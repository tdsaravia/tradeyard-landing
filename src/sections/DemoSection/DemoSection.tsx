import { useState } from 'react'
import type { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import type { Path } from 'react-hook-form'
import { motion } from 'motion/react'
import { Send } from 'lucide-react'
import { Button } from '../../components/ui/Button/Button'
import { Container } from '../../components/ui/Container/Container'
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader'
import { cardMotion, staggerContainer } from '../../lib/animations'
import { cn } from '../../lib/cn'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { demoSchema } from './demo.schema'
import type { DemoFormValues } from './demo.schema'

const defaultValues: DemoFormValues = {
  name: '',
  email: '',
  company: '',
  role: '',
  message: '',
}

type FieldProps = {
  children: ReactNode
  error?: string
  label: string
}

function Field({ children, error, label }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[#d8d4c9]">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm text-[#ffad8b]">{error}</span> : null}
    </label>
  )
}

const inputClassName =
  'min-h-12 w-full rounded-lg border border-[#383838] bg-[#0d0d0d] px-4 py-3 text-[#f3f0e7] outline-none transition placeholder:text-[#77736b] focus:border-[#f3631f]'

export function DemoSection() {
  const [submittedName, setSubmittedName] = useState<string | null>(null)
  const reveal = useScrollReveal({ amount: 0.24 })
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setError,
  } = useForm<DemoFormValues>({ defaultValues })

  const onSubmit = (values: DemoFormValues) => {
    const parsed = demoSchema.safeParse(values)

    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        const fieldName = issue.path[0]

        if (typeof fieldName === 'string' && fieldName in values) {
          setError(fieldName as Path<DemoFormValues>, {
            message: issue.message,
            type: 'manual',
          })
        }
      })
      return
    }

    setSubmittedName(parsed.data.name)
    reset(defaultValues)
  }

  return (
    <motion.section
      id="demo"
      className="relative bg-[#111111] py-24 text-[#f3f0e7]"
      {...reveal}
    >
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'linear-gradient(125deg, rgba(243,99,31,0.18), transparent 36%, rgba(129,135,37,0.15) 76%, transparent)',
        }}
      />
      <Container className="relative grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow="Early access"
          title="Schedule a demo for your crew."
          description="Tell us who you support, how your field team works, and where voice-first capture would save the most time."
        />

        <motion.form
          variants={cardMotion}
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg border border-[#2f2f2f] bg-[#151515] p-6 shadow-xl sm:p-8"
          noValidate
        >
          <motion.div variants={staggerContainer} className="grid gap-5 sm:grid-cols-2">
            <motion.div variants={cardMotion}>
              <Field label="Name" error={errors.name?.message}>
                <input
                  {...register('name')}
                  aria-invalid={Boolean(errors.name)}
                  className={inputClassName}
                  placeholder="Alex Morgan"
                />
              </Field>
            </motion.div>

            <motion.div variants={cardMotion}>
              <Field label="Email" error={errors.email?.message}>
                <input
                  {...register('email')}
                  aria-invalid={Boolean(errors.email)}
                  className={inputClassName}
                  placeholder="alex@company.com"
                  type="email"
                />
              </Field>
            </motion.div>

            <motion.div variants={cardMotion}>
              <Field label="Company" error={errors.company?.message}>
                <input
                  {...register('company')}
                  aria-invalid={Boolean(errors.company)}
                  className={inputClassName}
                  placeholder="BuildCo"
                />
              </Field>
            </motion.div>

            <motion.div variants={cardMotion}>
              <Field label="Role" error={errors.role?.message}>
                <input
                  {...register('role')}
                  aria-invalid={Boolean(errors.role)}
                  className={inputClassName}
                  placeholder="Operations lead"
                />
              </Field>
            </motion.div>

            <motion.div variants={cardMotion} className="sm:col-span-2">
              <Field label="Message" error={errors.message?.message}>
                <textarea
                  {...register('message')}
                  aria-invalid={Boolean(errors.message)}
                  className={cn(inputClassName, 'min-h-32 resize-y')}
                  placeholder="What should Tradeyard help your crew capture first?"
                />
              </Field>
            </motion.div>
          </motion.div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-[#bdb9ae]">
              {submittedName
                ? `Thanks, ${submittedName}. Your request is ready for a backend endpoint.`
                : 'Validated locally with react-hook-form and zod.'}
            </p>
            <Button
              type="submit"
              icon={<Send size={18} aria-hidden="true" />}
              iconPosition="right"
            >
              Request demo
            </Button>
          </div>
        </motion.form>
      </Container>
    </motion.section>
  )
}
