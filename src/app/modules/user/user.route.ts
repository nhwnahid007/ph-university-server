import { NextFunction, Router, Request, Response } from 'express';
import { UserControllers } from './user.controller';

const router = Router();

const senaBahini = (req: Request, res: Response, next: NextFunction): void => {
  // eslint-disable-next-line no-console
  console.log(req.body);
  next();
};

router.post('/create-student', senaBahini, UserControllers.createStudent);

export const UserRoutes = router;
