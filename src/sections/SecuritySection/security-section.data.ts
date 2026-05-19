import { AlertTriangle, ClipboardList, Users } from 'lucide-react'
import type { IconContentItem } from '../../types/landing'

export const trustItems: IconContentItem[] = [
  {
    icon: Users,
    title: 'Made for crews',
    description:
      'Simple enough for the field, structured enough for managers, and fast enough for real workdays.',
  },
  {
    icon: ClipboardList,
    title: 'Keeps the day organized',
    description:
      'Turn spoken updates into tasks, materials, tools, and reminders without losing context.',
  },
  {
    icon: AlertTriangle,
    title: 'Not a replacement for safety',
    description:
      'Tradeyard supports decision-making, but field judgment, licensing, and safety standards stay first.',
  },
]
