import { TStudent } from './student.interface';
import { Student } from './student.model';

//here we are creating a service to create a student in the database
const createStudentToDB = async (studentData: TStudent) => {
  // const student = new Student(studentData) //create a new instance of the Student model
  // if(await student.isUserExist(studentData.id)){
  //   throw new Error('Student already exists')
  // } //check if the student already exists

  // const result = await student.save()

  const isUserExist = await Student.isUserExist(studentData.id);
  if (isUserExist) {
    throw new Error('Student already exists');
  }

  const result = await Student.create(studentData); //built in static method

  return result;
};

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
  createStudentToDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
