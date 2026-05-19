import type { LucideIcon } from 'lucide-react'

export type NavLinkItem = {
  label: string
  href: string
}

export type IconContentItem = {
  icon: LucideIcon
  title: string
  description: string
}

export type TextContentItem = {
  title: string
  description: string
}

export type StatItem = {
  value: string
  label: string
}

export type WorkflowStep = {
  eyebrow: string
  title: string
  description: string
}
