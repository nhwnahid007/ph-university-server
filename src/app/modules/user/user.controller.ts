import { userServices } from './user.service';
import catchAsync from '../../utils/catchAsync';




const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  const result = await userServices.createStudentIntoDB(password, studentData);

  res.status(200).json({
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});


export const UserControllers = {
  createStudent,
};
