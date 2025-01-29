import { z } from 'zod';

// Define the schema for UserName
const userNameValidationSchema = z.object({
  firstName: z.string()
    .min(3, { message: 'First Name must be at least 3 characters' })
    .max(20, { message: 'First Name must be at most 20 characters' })
    .refine(value => value.charAt(0) === value.charAt(0).toUpperCase(), {
      message: 'First Name must start with a capital letter',
    }),
  middleName: z.string().optional(),
  lastName: z.string()
    .min(3, { message: 'Last Name must be at least 3 characters' })
    .max(20, { message: 'Last Name must be at most 20 characters' })
    .refine(value => /^[A-Za-z]+$/.test(value), {
      message: 'Last Name must contain only alphabets',
    }),
});

// Define the schema for Guardian
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father Name is required' }),
  fatherOccupation: z.string().min(1, { message: 'Father Occupation is required' }),
  fatherContactNo: z.string().min(1, { message: 'Father Contact No is required' }),
  motherName: z.string().min(1, { message: 'Mother Name is required' }),
  motherOccupation: z.string().min(1, { message: 'Mother Occupation is required' }),
  motherContactNo: z.string().min(1, { message: 'Mother Contact No is required' }),
});

// Define the schema for LocalGuardian
const localGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Local Guardian Name is required' }),
  occupation: z.string().min(1, { message: 'Local Guardian Occupation is required' }),
  contactNo: z.string().min(1, { message: 'Local Guardian Contact No is required' }),
  address: z.string().min(1, { message: 'Local Guardian Address is required' }),
});

// Define the schema for Student
const studentSchema = z.object({
  id: z.string().min(1, { message: 'ID is required' }),
            name: userNameValidationSchema,
  gender: z.enum(['male', 'female'], {
    errorMap: () => ({ message: 'Gender must be either male or female' }),
  }),
  dateOfBirth: z.string().min(1, { message: 'Date of Birth is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  contactNo: z.string().min(1, { message: 'Contact No is required' }),
  emergencyContactNo: z.string().min(1, { message: 'Emergency Contact No is required' }),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
    errorMap: () => ({ message: 'Invalid blood group' }),
  }),
  presentAddress: z.string().min(1, { message: 'Present Address is required' }),
  permanentAddress: z.string().min(1, { message: 'Permanent Address is required' }),
  guardian: guardianValidationSchema,
    localGuardian: localGuardianValidationSchema,
  profileImage: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
});

export default studentSchema;