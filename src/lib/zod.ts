import  {  object, string } from "zod";

export const singInSchema = object({
 email: string()
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string()
    .min(1, "Password is required")
    .min(6, "Password must be more than 6 character")
    .max(20, 'Password must be less than 20 character')
}) 