import { Router } from 'express';
import { provinciasController } from '../controllers/provincias.js';
import { cacheMiddleware } from '../middlewares/cache.js';

export const provinciasRouter = Router();

provinciasRouter.get(
  '/',
  cacheMiddleware({
    keyGenerator: () => `provincias/all`,
    cacheTime: 60,
  }),
  provinciasController.getAll,
);

provinciasRouter.get(
  '/search/:name',
  cacheMiddleware({
    keyGenerator: (req) => `provincias/search/:${req.params.name}`,
    cacheTime: 60,
  }),
  provinciasController.getByName,
);

provinciasRouter.get(
  '/searchlike/:name',
  cacheMiddleware({
    keyGenerator: (req) => `provincias/searchlike/:${req.params.name}`,
    cacheTime: 60,
  }),
  provinciasController.getByNameLike,
);

provinciasRouter.get(
  '/:id',
  cacheMiddleware({
    keyGenerator: (req) => `provincias/id:${req.params.id}`,
    cacheTime: 60,
  }),
  provinciasController.getById,
);
