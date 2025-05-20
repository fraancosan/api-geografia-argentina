import { Router } from 'express';
import { localidadesController } from '../controllers/localidades.js';
import { cacheMiddleware } from '../middlewares/cache.js';

export const localidadesRouter = Router();

localidadesRouter.get(
  '/',
  cacheMiddleware({
    keyGenerator: () => `localidades/all`,
    cacheTime: 60,
  }),
  localidadesController.getAll,
);

localidadesRouter.get(
  '/search/:name',
  cacheMiddleware({
    keyGenerator: (req) => `localidades/search/:${req.params.name}`,
    cacheTime: 60,
  }),
  localidadesController.getByName,
);

localidadesRouter.get(
  '/searchlike/:name',
  cacheMiddleware({
    keyGenerator: (req) => `localidades/searchlike/:${req.params.name}`,
    cacheTime: 60,
  }),
  localidadesController.getByNameLike,
);

localidadesRouter.get(
  '/:id',
  cacheMiddleware({
    keyGenerator: (req) => `localidades/id:${req.params.id}`,
    cacheTime: 60,
  }),
  localidadesController.getById,
);
