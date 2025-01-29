import Joi from 'joi';

//creating schema using joi
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .min(3)
    .max(20)
    .trim()
    .regex(/^[A-Z][a-z]*$/, 'First Name must start with a capital letter')
    .messages({
      'string.base': 'First Name must be a string',
      'string.empty': 'First Name is required',
      'string.min': 'First Name must be at least 3 characters',
      'string.max': 'First Name must be at most 20 characters',
      'string.pattern.base': 'First Name must start with a capital letter',
    }),
  middleName: Joi.string().optional(),
  lastName: Joi.string()
    .required()
    .min(3)
    .max(20)
    .trim()
    .regex(/^[A-Za-z]+$/, 'Last Name must contain only alphabets')
    .messages({
      'string.base': 'Last Name must be a string',
      'string.empty': 'Last Name is required',
      'string.min': 'Last Name must be at least 3 characters',
      'string.max': 'Last Name must be at most 20 characters',
      'string.pattern.base': 'Last Name must contain only alphabets',
    }),
});

// Define Joi schema for Guardian
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'string.base': 'Father Name must be a string',
    'string.empty': 'Father Name is required',
  }),
  fatherOccupation: Joi.string().required().messages({
    'string.base': 'Father Occupation must be a string',
    'string.empty': 'Father Occupation is required',
  }),
  fatherContactNo: Joi.string().required().messages({
    'string.base': 'Father Contact No must be a string',
    'string.empty': 'Father Contact No is required',
  }),
  motherName: Joi.string().required().messages({
    'string.base': 'Mother Name must be a string',
    'string.empty': 'Mother Name is required',
  }),
  motherOccupation: Joi.string().required().messages({
    'string.base': 'Mother Occupation must be a string',
    'string.empty': 'Mother Occupation is required',
  }),
  motherContactNo: Joi.string().required().messages({
    'string.base': 'Mother Contact No must be a string',
    'string.empty': 'Mother Contact No is required',
  }),
});

// Define Joi schema for LocalGuardian
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.base': 'Local Guardian Name must be a string',
    'string.empty': 'Local Guardian Name is required',
  }),
  occupation: Joi.string().required().messages({
    'string.base': 'Local Guardian Occupation must be a string',
    'string.empty': 'Local Guardian Occupation is required',
  }),
  contactNo: Joi.string().required().messages({
    'string.base': 'Local Guardian Contact No must be a string',
    'string.empty': 'Local Guardian Contact No is required',
  }),
  address: Joi.string().required().messages({
    'string.base': 'Local Guardian Address must be a string',
    'string.empty': 'Local Guardian Address is required',
  }),
});

// Define Joi schema for Student
const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.base': 'ID must be a string',
    'string.empty': 'ID is required',
  }),
  name: userNameValidationSchema.required().messages({
    'object.base': 'Name is required',
  }),
  gender: Joi.string().valid('male', 'female').required().messages({
    'string.base': 'Gender must be a string',
    'string.empty': 'Gender is required',
    'any.only': '{#label} must be either male or female',
  }),
  dateOfBirth: Joi.string().required().messages({
    'string.base': 'Date of Birth must be a string',
    'string.empty': 'Date of Birth is required',
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be a string',
    'string.empty': 'Email is required',
    'string.email': '{#value} is not a valid email address',
  }),
  contactNo: Joi.string().required().messages({
    'string.base': 'Contact No must be a string',
    'string.empty': 'Contact No is required',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'string.base': 'Emergency Contact No must be a string',
    'string.empty': 'Emergency Contact No is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .required()
    .messages({
      'string.base': 'Blood Group must be a string',
      'string.empty': 'Blood Group is required',
      'any.only': '{#value} is not a valid blood group',
    }),
  presentAddress: Joi.string().required().messages({
    'string.base': 'Present Address must be a string',
    'string.empty': 'Present Address is required',
  }),
  permanentAddress: Joi.string().required().messages({
    'string.base': 'Permanent Address must be a string',
    'string.empty': 'Permanent Address is required',
  }),
  guardian: guardianValidationSchema.required().messages({
    'object.base': 'Guardian is required',
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'object.base': 'Local Guardian is required',
  }),
  profileImage: Joi.string().optional(),
  isActive: Joi.string().valid('active', 'blocked').default('active').messages({
    'string.base': 'isActive must be a string',
    'any.only': '{#value} is not a valid status',
  }),
});

export default studentValidationSchema;
