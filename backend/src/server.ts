import cookieParser from 'cookie-parser';
import express, { NextFunction, Request, Response } from 'express';
import { BAD_REQUEST } from 'http-status-codes';
import BaseRouter from './routes/index';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', BaseRouter);

app.get('/', (req, res) => {
  res.send('hi mustachios!');
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message, err);

  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});


export default app;