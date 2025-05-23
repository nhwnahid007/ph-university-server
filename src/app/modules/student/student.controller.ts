import { NextFunction, Request, Response } from 'express';
import { studentService } from './student.service';

const getAllStudents = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const students = await studentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      data: students,
    });
  } catch (error) {

    next(error)

  }
};

const getSingleStudent = async (req: Request, res: Response,next: NextFunction): Promise<void> => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentFromDB(studentId);
    if (!result) {
      res.status(404).json({
        success: false,
        message: 'Student not found',
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: 'Student fetched successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteStudent = async (req: Request, res: Response, next:NextFunction): Promise<void> => {
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
    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: result,
    });
  } catch (error) {
    next(error)
  }
};

export const studentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
