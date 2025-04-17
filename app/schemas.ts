import { z } from "zod"

export const signUpSchemaModel = z.object({
  firstName: z
    .string()
    .min(3, { message: 'First name must be "3" characters or more' }),
  lastName: z
    .string()
    .min(3, { message: 'Last name must be "3" characters or more' }),

  email: z
    .string()
    .email()
    .min(3, { message: 'Email address must be "3" charactes or more' }),

  password: z.string().min(8, { message: 'Password must be "8" characters or more' }),
});


export const loginSchemaModel = z.object({
  email: z
    .string()
    .email()
    .min(3, { message: 'Email address must be "3" charactes or more' }),

  password: z
    .string()
    .min(8, { message: 'Password must be "8" characters or more' }),
});