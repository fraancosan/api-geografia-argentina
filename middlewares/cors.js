import cors from 'cors';

export const corsMiddleware = cors({
  origin: (origin, callback) => {
    const whiteList = process.env.CORS_WHITELIST
      ? process.env.CORS_WHITELIST.split(',')
      : [];

    if (
      whiteList.includes(origin) ||
      !origin ||
      process.env.NODE_ENV === 'dev'
    ) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
});
