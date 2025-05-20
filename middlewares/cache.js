import { redisClient } from '../utils/redis.js';

/**
 * Middleware para almacenar en caché las respuestas de las solicitudes
 * @param {function} keyGenerator función que genera la clave de caché a partir de la solicitud
 * @param {number} cacheTime tiempo de expiración de la caché en minutos
 * @returns
 */
export function cacheMiddleware({ keyGenerator, cacheTime = 30 }) {
  return async (req, res, next) => {
    if (!redisClient) {
      next(); // Si no hay conexión a Redis, continúa sin caché
    } else {
      const key = keyGenerator(req);
      try {
        const cachedData = await redisClient.get(key);
        if (cachedData) {
          const { status, body } = JSON.parse(cachedData);
          return res.status(status).json(body);
        } else {
          // no hay datos en caché
          res.sendResponse = res.json;
          res.json = async (body) => {
            const status = res.statusCode; // Obtiene el código de estado actual
            await redisClient.set(
              key,
              JSON.stringify({ status, body }), // Almacena el código de estado y el cuerpo de la respuesta
              { EX: cacheTime * 60 }, // Establece el tiempo de expiración en segundos
            );
            res.sendResponse(body);
          };
        }
        next();
      } catch (error) {
        console.error('Error accessing Redis:', error);
        next();
      }
    }
  };
}
