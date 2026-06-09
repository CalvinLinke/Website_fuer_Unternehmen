import { Hero } from '@/sections/Hero'
import { Loesung } from '@/sections/Loesung'
import { Testimonials } from '@/sections/Testimonials'
import { Preisvorteil } from '@/sections/Preisvorteil'
import { Technologie } from '@/sections/Technologie'

export default function Home() {
  return (
    <>
      <Hero />
      <Loesung />
      <Preisvorteil />
      <Technologie />
      <Testimonials />
    </>
  )
}
