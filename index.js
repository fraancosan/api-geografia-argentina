import express, { json } from 'express';
import { corsMiddleware } from './middlewares/cors.js';
import dotenv from 'dotenv';

const app = express();

// Initial configuration
app.disable('x-powered-by');
app.use(json());
app.use(corsMiddleware);

// environment variables
const env = process.env.NODE_ENV ?? 'development';
dotenv.config(env === 'production' ? { path: '.env' } : { path: '.env.dev' });

const port = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  res.status(400).send('Nothing to see here');
});

app.use(
  '/img',
  express.static(path.resolve(path.join('src', 'public', 'img'))),
);

app.use('/health', (req, res) => {
  res.status(200).send('OK');
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).send('Not found');
});

// Error handler
app.use((err, req, res, next) => {
  // personalized error?
  if (err.status) {
    res.status(err.status).json({ message: err.message });
  } else {
    res.status(500).send('Internal server error');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port} \n`);
});
