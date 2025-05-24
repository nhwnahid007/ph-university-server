import {  RequestHandler } from 'express';
import { userServices } from './user.service';



const createStudent : RequestHandler = async (req, res, next) => {
  try {
    //data validation using zod
    const { password, student: studentData } = req.body;

    const result = await userServices.createStudentIntoDB(
      password,
      studentData,
    );
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    next(error)
  }
};

export const UserControllers = {
  createStudent,
};
