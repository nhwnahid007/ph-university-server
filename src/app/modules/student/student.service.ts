import { Student } from './student.interface';
import StudentModel from './student.model';

//here we are creating a service to create a student in the database
const createStudentToDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

//here we are creating a service to get all students from the database
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

//here we are creating a service to get a single student from the database
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const studentService = {
  createStudentToDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
