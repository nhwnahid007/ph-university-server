import { model, Schema } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import {
  academicSemesterCode,
  academicSemesterName,
  Months,
} from './academicSemester.constant';

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: academicSemesterName,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCode,
    },
    year: {
      type: String,
      required: true,
    },

    startMonth: {
      type: String,
      required: true,
      enum: Months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Months,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await academicSemester.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExists) {
    throw new Error('Semester already exists'); 
  }
  next();
});

const academicSemester = model<TAcademicSemester>(
  'academicSemester',
  academicSemesterSchema,
);

export default academicSemester;
