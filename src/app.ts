import express, { Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
import router from './app/routes';

const app = express();
// const port = 3000

//parsers

app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1', router);

const test = (req: Request, res: Response) => {
  res.send('Test route');
};

app.get('/', test);

//global error handler

app.use(globalErrorHandler);

//not found
app.use(notFound);

export default app;
