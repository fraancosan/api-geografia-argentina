import { DataTypes } from 'sequelize';
import sequelize from '../utils/sequelizeConnection.js';
import Provincia from './Provincia.js';

const Departamento = sequelize.define(
  'Departamento',
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
    idProvincia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Provincia,
        key: 'id',
      },
    },
  },
  {
    tableName: 'departamentos',
    timestamps: false,
  },
);

export default Departamento;
