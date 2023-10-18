import { z } from 'zod';

export const PersonalInfoSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be 2 or more characters length' }),
  email: z.string().email().trim().toLowerCase(),
  phone: z
    .string()
    .min(10, { message: 'Phone numbers are a minimum of 10 digits' })
    .length(10, { message: 'Ten numbers are required' }),
});
