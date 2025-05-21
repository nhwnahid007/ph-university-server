import { Request, Response } from 'express';
import { studentService } from './student.service';
import studentValidationSchema from './student.validation';
// import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    //data validation using zod
    const { student: studentData } = req.body;
    const zodParsedData = studentValidationSchema.parse(studentData);

    //data validation using joi
    // const { error, value } = studentValidationSchema.validate(studentData);
    // if (error) {
    //   res.status(400).json({
    //     success: false,
    //     message: 'Validation failed',
    //     error,
    //   });
    //   return;
    // }
    const result = await studentService.createStudentToDB(zodParsedData);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong',
      error: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response): Promise<void> => {
  try {
    const students = await studentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response): Promise<void> => {
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
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};
const deleteStudent = async (req: Request, res: Response): Promise<void> => {
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
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
