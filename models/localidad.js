import { DataTypes } from 'sequelize';
import sequelize from '../utils/sequelizeConnection.js';
import Departamento from './Departamento.js';

const Localidad = sequelize.define(
  'Localidad',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idDepartamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Departamento,
        key: 'id',
      },
    },
  },
  {
    tableName: 'localidades',
    timestamps: false,
  },
);

export default Localidad;
