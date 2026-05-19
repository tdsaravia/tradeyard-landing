import { z } from 'zod'

export const accessRequestSchema = z.object({
  name: z.string().min(2, 'Enter your name.'),
  email: z.string().email('Enter a valid email.'),
})

export type AccessRequestFormValues = z.infer<typeof accessRequestSchema>
