import { Student } from './student.interface';
import StudentModel from './student.model';
const createStudentToDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

export const studentService = {
  createStudentToDB,
};
