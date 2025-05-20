import { Router } from 'express';
import { departamentosController } from '../controllers/departamentos.js';
import { cacheMiddleware } from '../middlewares/cache.js';

export const departamentosRouter = Router();

departamentosRouter.get(
  '/',
  cacheMiddleware({
    keyGenerator: () => `departamentos/all`,
    cacheTime: 60,
  }),
  departamentosController.getAll,
);

departamentosRouter.get(
  '/search/:name',
  cacheMiddleware({
    keyGenerator: (req) => `departamentos/search/:${req.params.name}`,
    cacheTime: 60,
  }),
  departamentosController.getByName,
);

departamentosRouter.get(
  '/searchlike/:name',
  cacheMiddleware({
    keyGenerator: (req) => `departamentos/searchlike/:${req.params.name}`,
    cacheTime: 60,
  }),
  departamentosController.getByNameLike,
);

departamentosRouter.get(
  '/:id',
  cacheMiddleware({
    keyGenerator: (req) => `departamentos/id:${req.params.id}`,
    cacheTime: 60,
  }),
  departamentosController.getById,
);
