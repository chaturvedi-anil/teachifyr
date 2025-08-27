import { z } from "zod";

export const registrationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(24, "Password should not be long than 24 characters"),
});

export const activationSchema = z.object({
  activation_token: z.string().min(1, "Activation token is required"),
  activation_code: z.string().min(4, "Activation code is required"),
});
