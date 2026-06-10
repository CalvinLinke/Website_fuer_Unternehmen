import { Hero } from '@/sections/Hero'
import { Problem } from '@/sections/Problem'
import { Loesung } from '@/sections/Loesung'
import { Entscheidungen } from '@/sections/Entscheidungen'
import { Testimonials } from '@/sections/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Loesung />
      <Entscheidungen />
      <Testimonials />
    </>
  )
}
