import { Departamento } from '../models/index.js';
import { Op, fn, col, where } from 'sequelize';

export class departamentosController {
  static async getAll(req, res) {
    try {
      const departamentos = await Departamento.findAll();
      departamentos
        ? res.status(200).json(departamentos)
        : res.status(404).json({ message: 'No se encontraron departamentos' });
    } catch (error) {
      console.error('Error en getAll de departamentosController:', error);
      res.status(500).json({ message: '¡Ups! algo salió mal' });
    }
  }

  static async getByName(req, res) {
    try {
      const { name } = req.params;
      const departamentos = await Departamento.findAll({
        where: where(fn('lower', col('nombre')), fn('lower', name)),
      });
      departamentos.length
        ? res.status(200).json(departamentos)
        : res.status(404).json({ message: 'No se encontraron departamentos' });
    } catch (error) {
      console.error('Error en getByName de departamentosController:', error);
      res.status(500).json({ message: '¡Ups! algo salió mal' });
    }
  }

  static async getByNameLike(req, res) {
    try {
      const { name } = req.params;
      const departamentos = await Departamento.findAll({
        where: {
          nombre: {
            [Op.like]: `%${name}%`,
          },
        },
      });
      departamentos.length
        ? res.status(200).json(departamentos)
        : res.status(404).json({ message: 'No se encontraron departamentos' });
    } catch (error) {
      console.error(
        'Error en getByNameLike de departamentosController:',
        error,
      );
      res.status(500).json({ message: '¡Ups! algo salió mal' });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const departamento = await Departamento.findByPk(id);
      departamento
        ? res.status(200).json(departamento)
        : res.status(404).json({ message: 'Departamento no encontrado' });
    } catch (error) {
      console.error('Error en getById de departamentosController:', error);
      res.status(500).json({ message: '¡Ups! algo salió mal' });
    }
  }
}
