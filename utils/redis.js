import { createClient } from 'redis';

let redisClient;
let connectionAttempts = 0;
const REDIS_URL = process.env.REDIS_URL;

async function connectRedis() {
  if (REDIS_URL !== undefined && REDIS_URL !== '') {
    try {
      redisClient = createClient({
        url: process.env.REDIS_URL,
      });

      redisClient.on('error', (err) => {
        throw new Error(err);
      });

      await redisClient.connect();
      console.log('Redis connected \n');
    } catch (error) {
      connectionAttempts += 1;
      console.error(`Redis connection error: ${error.message}.`);
      console.log(
        'Trying to reconnect to redis. This is the attempt number:',
        connectionAttempts,
        '\n',
      );
      setTimeout(connectRedis, 5000); // Reintenta la conexión después de 5 segundos
    }
  } else {
    console.log('No Redis URL provided. Skipping cache connection.');
  }
}

await connectRedis();

export { redisClient };
