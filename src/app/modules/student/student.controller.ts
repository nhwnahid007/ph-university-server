import { Request, Response } from 'express';
import { studentService } from './student.service';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const { error } = studentValidationSchema.validate(studentData);
    //will call service function to send this data to database
    const result = await studentService.createStudentToDB(studentData);

    // console.log({error},{value});

    if (error) {
      return res.status(500).json({
        success: false,
        message: 'Student creation failed',
        error,
      });
    }

    //send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false, // success is a boolean value that indicates whether the request was successful or not
      message: 'Something went wrong',
      error: error, // error is the error object
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are fetched successfully',
      data: result,
    });
  } catch (error) {
    //eslint-disable-next-line no-console
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is fetched successfully',
      data: result,
    });
  } catch (error) {
    //eslint-disable-next-line no-console
    console.log(error);
  }
};

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
