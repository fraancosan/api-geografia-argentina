import { Localidad } from '../models/index.js';
import { Op, fn, col, where } from 'sequelize';

export class localidadesController {
  static async getAll(req, res) {
    try {
      const localidades = await Localidad.findAll();
      localidades
        ? res.status(200).json(localidades)
        : res.status(404).json({ message: 'No se encontraron localidades' });
    } catch (error) {
      console.error('Error en getAll de localidadesController:', error);
      res.status(500).json({ message: '¡Ups! algo salió mal' });
    }
  }

  static async getByName(req, res) {
    try {
      const { name } = req.params;
      const localidades = await Localidad.findAll({
        where: where(fn('lower', col('nombre')), fn('lower', name)),
      });
      localidades.length
        ? res.status(200).json(localidades)
        : res.status(404).json({ message: 'No se encontraron localidades' });
    } catch (error) {
      console.error('Error en getByName de localidadesController:', error);
      res.status(500).json({ message: '¡Ups! algo salió mal' });
    }
  }

  static async getByNameLike(req, res) {
    try {
      const { name } = req.params;
      const localidades = await Localidad.findAll({
        where: {
          nombre: {
            [Op.like]: `%${name}%`,
          },
        },
      });
      localidades.length
        ? res.status(200).json(localidades)
        : res.status(404).json({ message: 'No se encontraron localidades' });
    } catch (error) {
      console.error('Error en getByNameLike de localidadesController:', error);
      res.status(500).json({ message: '¡Ups! algo salió mal' });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const localidad = await Localidad.findByPk(id);
      localidad
        ? res.status(200).json(localidad)
        : res.status(404).json({ message: 'Localidad no encontrada' });
    } catch (error) {
      console.error('Error en getById de localidadesController:', error);
      res.status(500).json({ message: '¡Ups! algo salió mal' });
    }
  }
}
