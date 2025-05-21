import express from 'express';
import { studentController } from './student.controller';

// router is a middleware that is used to handle the routes
const router = express.Router();

//will call controller function here
router.post('/create-student', studentController.createStudent);
router.get('/', studentController.getAllStudents);
router.get('/:studentId', studentController.getSingleStudent);
router.delete('/:studentId', studentController.deleteStudent);

//here we are exporting the router
export const studentRoutes = router;
