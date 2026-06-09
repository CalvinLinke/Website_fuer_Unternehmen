export type Service = {
  slug: string
  title: string
  summary: string
  description: string
  highlights: string[]
}

export type ProcessStep = {
  number: string
  title: string
  description: string
  detail: string
}

export type CaseStudy = {
  archetype: string
  context: string
  challenge: string
  outcome: string
  metric: string
}

export type Testimonial = {
  quote: string
  attribution: string
  context: string
}

export type FaqItem = {
  question: string
  answer: string
}
