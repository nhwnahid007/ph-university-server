import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  // userNameSchema is a sub-schema for the Student model
  firstName: { type: String, required: [true, 'First Name is required'] }, // required is used to make the field mandatory and the second argument is the error message
  middleName: { type: String }, // optional field
  lastName: { type: String, required: [true, 'Last Name is required'] },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: [true, 'Father Name is required'] },
  fatherOccupation: {
    type: String,
    required: [true, 'Father Occupation is required'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father Contact No is required'],
  },
  motherName: { type: String, required: [true, 'Mother Name is required'] },
  motherOccupation: {
    type: String,
    required: [true, 'Mother Occupation is required'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother Contact No is required'],
  },
});

// localGuardianSchema is a sub-schema for the Student model
const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: [true, 'Local Guardian Name is required'] },
  occupation: {
    type: String,
    required: [true, 'Local Guardian Occupation is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Local Guardian Contact No is required'],
  },
  address: {
    type: String,
    required: [true, 'Local Guardian Address is required'],
  },
});

// studentSchema is the main schema for the Student model
const studentSchema = new Schema<Student>({
  id: { type: String, required: [true, 'ID is required'], unique: true }, // unique is used to make the field unique

  name: { type: userNameSchema, required: [true, 'Name is required'] }, // required is used to make the field mandatory and the second argument is the error message
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not a valid gender',
    }, // enum is used to restrict the value of the field to a set of predefined values
    required: [true, 'Gender is required'],
  },
  dateOfBirth: { type: String, required: [true, 'Date of Birth is required'] },
  email: { type: String, required: [true, 'Email is required'], unique: true },
  contactNo: { type: String, required: [true, 'Contact No is required'] },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency Contact No is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group',
    },
    required: [true, 'Blood Group is required'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present Address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent Address is required'],
  },
  guardian: { type: guardianSchema, required: [true, 'Guardian is required'] }, // guardian is a  field of type guardianSchema and is required
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local Guardian is required'],
  }, // localGuardian is a field of type localGuardianSchema and is required
  profileImage: { type: String },
  isActive: { type: String, enum: ['active', 'blocked'], default: 'active' }, //default is used to set a default value for the field
});

// StudentModel is the model for the Student collection in the database
// Student is the interface that defines the structure of the Student collection in the database
// studentSchema is the schema that defines the structure of the Student collection in the database
// model is a function that creates a model for the Student collection in the database
// model<Student> is used to create a model for the Student collection in the database
// 'Student' is the name of the collection in the database
// studentSchema is the schema that defines the structure of the Student collection in the database

const StudentModel = model<Student>('Student', studentSchema);

export default StudentModel;
