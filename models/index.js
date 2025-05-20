import Provincia from './Provincia.js';
import Departamento from './Departamento.js';
import Localidad from './Localidad.js';

// Relaciones
Provincia.hasMany(Departamento, {
  foreignKey: 'idProvincia',
  as: 'departamentos',
});
Departamento.belongsTo(Provincia, {
  foreignKey: 'idProvincia',
  as: 'provincia',
});

Departamento.hasMany(Localidad, {
  foreignKey: 'idDepartamento',
  as: 'localidades',
});
Localidad.belongsTo(Departamento, {
  foreignKey: 'idDepartamento',
  as: 'departamento',
});

export { Provincia, Departamento, Localidad };
