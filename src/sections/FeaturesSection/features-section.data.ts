import { HardHat, ListChecks, Mic, ShieldCheck } from 'lucide-react'
import type { IconContentItem } from '../../types/landing'

export const features: IconContentItem[] = [
  {
    icon: Mic,
    title: 'Talk-first workflow',
    description:
      'Add tasks, materials, tools, and job notes by speaking naturally instead of digging through menus.',
  },
  {
    icon: HardHat,
    title: 'Built for real trades',
    description:
      'Guidance organized around construction, carpentry, plumbing, HVAC, electrical work, and project management.',
  },
  {
    icon: ListChecks,
    title: 'Daily jobsite updates',
    description:
      'Start the day with a clear morning update, quick training cards, and a simple to-do list.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety-first guidance',
    description:
      'AI support designed to assist, not replace supervisors, training, licensing, or safety requirements.',
  },
]
