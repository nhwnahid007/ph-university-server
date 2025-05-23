import { NextFunction, Request, Response } from 'express';
import { studentService } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const students = await studentService.getAllStudentsFromDB();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Students fetched successfully',
      data: students,
    });
  } catch (error) {
    next(error);
  }
};


const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentFromDB(studentId);

    if (!result) {
      // It's better to create a custom error object for consistent global error handling
      const error = new Error('Student not found');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (error as any).statusCode = httpStatus.NOT_FOUND;
      return next(error);
    }

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single student fetched successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { studentId } = req.params;
    const result = await studentService.deleteStudentFromDB(studentId);
    if (!result) {
      res.status(404).json({
        success: false,
        message: 'Student not found',
      });
      return;
    }
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student deleted successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const studentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
