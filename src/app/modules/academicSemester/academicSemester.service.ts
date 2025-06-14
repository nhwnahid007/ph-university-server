import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';

import academicSemester from './academicSemester.model';

const createAcademicSemesterIntoDb = async (payload: TAcademicSemester) => {
  // if fall then code 03, if summer then code 02, if autumn then code 01 is not matching then throw error

  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid semester code');
  }

  const result = await academicSemester.create(payload);
  return result;
};

const getAllAcademicSemesterFromDb = async () => {
  const result = await academicSemester.find();
  return result;
};

const getSingleAcademicSemesterFromDb = async (id: string) => {
  const result = await academicSemester.findById(id);
  return result;
};

const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid Semester Code');
  }

  const result = await academicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterIntoDb,
  getAllAcademicSemesterFromDb,
  getSingleAcademicSemesterFromDb,
  updateAcademicSemesterIntoDB,
};
