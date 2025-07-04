import { studentService } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const getAllStudents = catchAsync(async (req, res) => {
  const students = await studentService.getAllStudentsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students fetched successfully',
    data: students,
  });
});

const getSingleStudent = catchAsync(async (req, res, next) => {
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
});
const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentService.deleteStudentFromDB(studentId);
  if (!result) {
    res.status(httpStatus.NOT_FOUND).json({
      success: false,
      message: 'Student not found',
    });
    return;
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student deleted successfully',
    data: result,
  });
});

export const studentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
