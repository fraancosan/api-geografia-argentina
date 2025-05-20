import { Provincia } from '../models/index.js';
import { Op, fn, col, where } from 'sequelize';

export class provinciasController {
  static async getAll(req, res) {
    try {
      const provincias = await Provincia.findAll();
      provincias
        ? res.status(200).json(provincias)
        : res.status(404).json({ message: 'No se encontraron provincias' });
    } catch (error) {
      console.error('Error en getAll de provinciasController:', error);
      res.status(500).json({ message: '¡Ups! algo salió mal' });
    }
  }

  // not more than 1 result
  static async getByName(req, res) {
    try {
      const { name } = req.params;
      const provincia = await Provincia.findOne({
        where: where(fn('lower', col('nombre')), fn('lower', name)),
      });
      provincia
        ? res.status(200).json(provincia)
        : res.status(404).json({ message: 'Provincia no encontrada' });
    } catch (error) {
      console.error('Error en getByName de provinciasController:', error);
      res.status(500).json({ message: '¡Ups! algo salió mal' });
    }
  }

  static async getByNameLike(req, res) {
    try {
      const { name } = req.params;
      const provincias = await Provincia.findAll({
        where: {
          nombre: {
            [Op.like]: `%${name}%`,
          },
        },
      });
      provincias.length
        ? res.status(200).json(provincias)
        : res.status(404).json({ message: 'No se encontraron provincias' });
    } catch (error) {
      console.error('Error en getByNameLike de provinciasController:', error);
      res.status(500).json({ message: '¡Ups! algo salió mal' });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const provincia = await Provincia.findByPk(id);
      provincia
        ? res.status(200).json(provincia)
        : res.status(404).json({ message: 'Provincia no encontrada' });
    } catch (error) {
      console.error('Error en getById de provinciasController:', error);
      res.status(500).json({ message: '¡Ups! algo salió mal' });
    }
  }
}
