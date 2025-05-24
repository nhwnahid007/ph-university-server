import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import httpStatus from 'http-status';

// Add this interface at the top of user.service.ts
interface AppError extends Error {
  statusCode: number;
}

//here we are creating a service to create a student in the database
const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // Check if student with this email already exists
  const existingStudent = await Student.findOne({ email: studentData.email });
  if (existingStudent) {
    const error = new Error(
      'Student with this email already exists',
    ) as AppError;
    error.statusCode = httpStatus.BAD_REQUEST;
    throw error;
  }

  //set student role
  const userData: Partial<TUser> = {};
  //if password is not provided, use default password
  userData.password = password || (config.default_password as string);
  //set student role
  userData.role = 'student';

  //manuall generate id
  userData.id = '20301001';

  //create User
  const newUser = await User.create(userData);

  //create student
  if (Object.keys(newUser).length) {
    //set id
    studentData.id = newUser.id;
    studentData.user = newUser._id;
    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const userServices = {
  createStudentIntoDB,
};
