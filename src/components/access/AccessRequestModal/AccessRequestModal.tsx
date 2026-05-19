import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import type { Path } from 'react-hook-form'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, X } from 'lucide-react'
import { Button } from '../../ui/Button/Button'
import { cn } from '../../../lib/cn'
import { accessRequestSchema } from './access-request.schema'
import type { AccessRequestFormValues } from './access-request.schema'

const defaultValues: AccessRequestFormValues = {
  email: '',
  name: '',
}

const inputClassName =
  'min-h-12 w-full rounded-[14px] border border-[#464646] bg-[#0b0b0b] px-4 py-3 text-[#f3f0e7] outline-none transition placeholder:text-[#77736b] focus:border-[#f3631f]'

type SubmissionFeedback = {
  message: string
  type: 'error' | 'success'
}

type AccessRequestModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function AccessRequestModal({ isOpen, onClose }: AccessRequestModalProps) {
  const [submissionFeedback, setSubmissionFeedback] =
    useState<SubmissionFeedback | null>(null)
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
    setError,
  } = useForm<AccessRequestFormValues>({ defaultValues })

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const onSubmit = async (values: AccessRequestFormValues) => {
    setSubmissionFeedback(null)
    const parsed = accessRequestSchema.safeParse(values)

    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        const fieldName = issue.path[0]

        if (typeof fieldName === 'string' && fieldName in values) {
          setError(fieldName as Path<AccessRequestFormValues>, {
            message: issue.message,
            type: 'manual',
          })
        }
      })
      return
    }

    const endpoint = import.meta.env.VITE_DEMO_FORM_ENDPOINT

    if (!endpoint) {
      setSubmissionFeedback({
        message: 'Form endpoint is not configured yet.',
        type: 'error',
      })
      return
    }

    const response = await fetch(endpoint, {
      body: JSON.stringify({
        ...parsed.data,
        _subject: 'New Tradeyard access request',
        requestType: 'try_it_now',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    if (!response.ok) {
      setSubmissionFeedback({
        message: 'We could not send the request. Please try again.',
        type: 'error',
      })
      return
    }

    setSubmissionFeedback({
      message: `Thanks, ${parsed.data.name}. We will be in touch soon.`,
      type: 'success',
    })
    reset(defaultValues)
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/78 px-5 py-8 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          role="presentation"
          onMouseDown={onClose}
        >
          <motion.div
            className="relative w-full max-w-[520px] rounded-[20px] border border-white/10 bg-[#20201e] p-6 text-[#f3f0e7] shadow-[0_24px_80px_rgba(0,0,0,0.55)] sm:p-8"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="access-request-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-5 top-5 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-[#c8c3b8] transition hover:bg-white/8 hover:text-white"
              aria-label="Close access request form"
              onClick={onClose}
            >
              <X size={21} aria-hidden="true" />
            </button>

            <div className="pr-10">
              <h2
                id="access-request-title"
                className="text-2xl font-black leading-tight sm:text-3xl"
              >
                Get access to Tradeyard
              </h2>
              <p className="mt-4 max-w-[420px] text-base font-semibold leading-7 text-[#c8c3b8]">
                Tradeyard is live on jobsites and not yet open to the public.
                Leave your details and we will reach out about getting you access.
              </p>
            </div>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
              <label className="block">
                <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-[#d8d4c9]">
                  Name
                </span>
                <input
                  {...register('name')}
                  aria-invalid={Boolean(errors.name)}
                  className={inputClassName}
                  placeholder="Your name"
                />
                {errors.name?.message ? (
                  <span className="mt-2 block text-sm text-[#ffad8b]">
                    {errors.name.message}
                  </span>
                ) : null}
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-[#d8d4c9]">
                  Email
                </span>
                <input
                  {...register('email')}
                  aria-invalid={Boolean(errors.email)}
                  className={inputClassName}
                  placeholder="you@company.com"
                  type="email"
                />
                {errors.email?.message ? (
                  <span className="mt-2 block text-sm text-[#ffad8b]">
                    {errors.email.message}
                  </span>
                ) : null}
              </label>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-14 w-full text-base"
                icon={<ArrowRight size={18} aria-hidden="true" />}
                iconPosition="right"
              >
                {isSubmitting ? 'Sending...' : 'Request access'}
              </Button>

              {submissionFeedback ? (
                <p
                  className={cn(
                    'text-sm font-semibold leading-6',
                    submissionFeedback.type === 'success'
                      ? 'text-[#d8d4c9]'
                      : 'text-[#ffad8b]',
                  )}
                >
                  {submissionFeedback.message}
                </p>
              ) : null}
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
