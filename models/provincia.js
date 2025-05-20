import { DataTypes } from 'sequelize';
import sequelize from '../utils/sequelizeConnection.js';

const Provincia = sequelize.define(
  'Provincia',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'provincias',
    timestamps: false,
  },
);

export default Provincia;
