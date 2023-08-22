import { z } from "zod"

export const userSchema = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  gender: z.string(),
  age: z.number(),
})

export type User = z.infer<typeof userSchema>
