import cardSoloScreenshot from '../../assets/images/card-solo-screenshot.webp'
import cardTeamsScreenshot from '../../assets/images/card-teams-screenshot.webp'

export const useCases = [
  {
    ctaLabel: 'Book a demo',
    description:
      "Every worker on site using Tradeyard makes every other worker better. It learns the site, the company standards, and the crew's skills, then delivers context-aware support to each person on the job.",
    image: cardTeamsScreenshot,
    imageAlt: 'Construction crew coordinating beside heavy equipment on a jobsite.',
    title: 'For teams',
    variant: 'demo',
  },
  {
    ctaLabel: 'Try it now',
    description:
      "A certified pro in your ear, adapting to every task and every site condition. Whether it is just you or a small crew, Tradeyard helps you move faster without new software to learn.",
    image: cardSoloScreenshot,
    imageAlt: 'Trade worker cutting material from scaffolding at a residential jobsite.',
    title: 'Solo and small crews',
    variant: 'access',
  },
] as const
