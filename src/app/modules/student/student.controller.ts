import { Request, Response } from 'express';
import { studentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    //will call service function to send this data to database
    const result = await studentService.createStudentToDB(studentData);
    //send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    //eslint-disable-next-line no-console
    console.log(error);
  }
};

export const studentController = {
  createStudent,
};
