import { config } from 'dotenv';

config();

export const PORT = process.env.PORT ?? '5000';
export const DB_URL = process.env.DB_URL ?? 'missing DB URL';
