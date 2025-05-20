import { Sequelize } from 'sequelize';

const DIALECT = process.env.DB_DIALECT || 'sqlite';

let sequelize;

if (DIALECT === 'sqlite') {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../database/SQLite3.db',
  });
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
}

export default sequelize;
