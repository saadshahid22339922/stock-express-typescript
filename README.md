# Stock Management System

A simple stock management system implemented in Node.js, Express, and TypeScript. This project allows you to manage and retrieve current stock levels for different SKUs based on initial stock data and transaction records.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/saadshahid22339922/stock-express-typescript.git


2. **Navigate to the project directory:**
   ```sh
    cd stock-express-typescript

3. **Install dependencies:**
   ```sh
    npm install

4. **Running the Project:**
   ```sh
    npm run dev

The server will be accessible at http://localhost:8000. You can access the stock management API at http://localhost:8000/api/stock?sku=YOUR_SKU to retrieve current stock levels.


5. **Install dependencies:**
   ```sh
    npm test



## Project Structure

The project is organized as follows:
- **data/**: Source code files.
  - `stock.json`: Contains initial stock levels for SKUs.
  - `transactions.json`: Contains transaction records.
- **service/**: Source code files.
  - `stockService.ts`: Service for handling stock data.
  - `transactionService.ts`: Service for handling transaction data.
  - `stockLevelService.ts`: Function to calculate current stock levels.
- **routes/**: Source code files.
 - `stockLevelRoutes.ts`: Function to calculate current stock levels.
- **test/**: Test files.
  - `stock.level.test.ts`: Tests for the `getCurrentStockLevel` function.

- `package.json`: Project configuration.
- `tsconfig.json`: TypeScript configuration.
- `app.ts`: Entry point for the Express server.

