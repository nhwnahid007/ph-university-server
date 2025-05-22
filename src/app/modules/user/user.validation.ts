import { z } from 'zod';

export const createUserZodSchema = z.object({
  id: z.string({
    required_error: 'User ID is required',
  }),
  password: z.string({
    required_error: 'Password is required',
  }),
  needsPasswordChange: z.boolean().optional(), // optional because it has a default
  role: z.enum(['admin', 'student', 'faculty'], {
    required_error: 'Role is required',
  }),
  status: z.enum(['in-progress', 'blocked'], {
    required_error: 'Status is required',
  }),
  isDeleted: z.boolean().optional(), // optional because it has a default
});
