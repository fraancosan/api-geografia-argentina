import Provincia from './Provincia.js';
import Departamento from './Departamento.js';
import Localidad from './Localidad.js';

// Relaciones
Provincia.hasMany(Departamento, { foreignKey: 'idProvincia' });
Departamento.belongsTo(Provincia, { foreignKey: 'idProvincia' });

Departamento.hasMany(Localidad, { foreignKey: 'idDepartamento' });
Localidad.belongsTo(Departamento, { foreignKey: 'idDepartamento' });

export { Provincia, Departamento, Localidad };
