import { readStockData } from './stock.service';
import { readTransactionData } from './transaction.service';

export async function getCurrentStockLevel(sku: string): Promise<{ sku: string; qty: number }> {
    const stockData = await readStockData();
    const transactionData = await readTransactionData();

    // Create a map of SKUs to their starting quantities from stockData
    const stockMap = new Map<string, number>();
    for (const stockRecord of stockData) {
        stockMap.set(stockRecord.sku, stockRecord.stock);
    }

    const transactionMap = new Map<string, number>();
    for (const transactionRecord of transactionData) {
        transactionMap.set(transactionRecord.sku, transactionRecord.qty);
    }

    // Check if sku doesn't exist in both transaction and stock
    if (!stockMap.has(sku) && !transactionMap.has(sku)) {
        throw new Error(`SKU not found: ${sku}`);
    }

    // Initialize the current quantity
    let currentQty = stockMap.get(sku) || 0;

    // Update the quantity based on transactions
    for (const transaction of transactionData) {
        if (transaction.sku === sku) {
            if (transaction.type === 'order')
                currentQty -= transaction.qty;
            else if (transaction.type === 'refund')
                currentQty += transaction.qty;
        }
    }

    return { sku, qty: currentQty };
}