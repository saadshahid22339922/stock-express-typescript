import * as fs from 'fs';

export interface StockRecord {
    sku: string;
    stock: number;
}

export async function readStockData(): Promise<StockRecord[]> {
    return new Promise((resolve, reject) => {
        let filePath = process.env.STOCK_FILE as string | ""
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Error reading stock data: ' + err.message));
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}