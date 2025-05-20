import { Sequelize } from 'sequelize';
import path from 'path';
import dotenv from 'dotenv';
const env = process.env.NODE_ENV ?? 'development';
dotenv.config(env === 'production' ? { path: '.env' } : { path: '.env.dev' });

const DIALECT = process.env.DB_DIALECT || 'sqlite';

let sequelize;

if (DIALECT === 'sqlite') {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join('database', 'SQLite3.db'),
    logging: false,
  });
  console.log('SQLite3 database connected\n');
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      port: process.env.DB_PORT,
      logging: false,
    },
  );
  console.log('MySQL database connected\n');
}

export default sequelize;
