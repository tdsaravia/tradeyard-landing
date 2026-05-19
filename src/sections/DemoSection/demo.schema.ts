import { z } from 'zod'

export const demoSchema = z.object({
  name: z.string().min(2, 'Enter your name.'),
  email: z.string().email('Enter a valid email.'),
  company: z.string().min(2, 'Enter your company.'),
  role: z.string().min(2, 'Enter your role.'),
  message: z.string().max(400, 'Keep it under 400 characters.').optional(),
})

export type DemoFormValues = z.infer<typeof demoSchema>
