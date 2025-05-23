import { Student } from './student.model';

//here we are creating a service to get all students from the database
const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

//here we are creating a service to get a single student from the database
const getSingleStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  //aggregate
  const result = await Student.aggregate([
    {
      $match: { id: id },
    },
  ]);

  return result;
};

//delete student from db
const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentService = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
