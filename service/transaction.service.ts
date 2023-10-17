import * as fs from 'fs';

export interface Transaction {
    sku: string;
    type: string;
    qty: number;
}

export async function readTransactionData(): Promise<Transaction[]> {
    return new Promise((resolve, reject) => {
        let filePath = process.env.TRANSACTION_FILE as string | ""
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Error reading transaction data: ' + err.message));
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}