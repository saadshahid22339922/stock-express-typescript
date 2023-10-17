import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import RouterSetup from './routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

RouterSetup(app);

app.get('/*', async (req: Request, res: Response) => {
  res.status(200).send("Welcome to the beginning")
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;