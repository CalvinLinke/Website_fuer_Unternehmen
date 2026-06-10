import { Container } from '@/components/Container'
import { KontaktForm } from '@/components/KontaktForm'
import { KontaktInfo } from '@/components/KontaktInfo'

export function KontaktFormSection() {
  return (
    <section className="bg-cream/75 pb-[clamp(5rem,10vw,8rem)] backdrop-blur-sm">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-14">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] text-text">
                Schreiben Sie mir
              </h2>
              <p className="mt-2 text-[0.9375rem] leading-[1.6] text-text-muted">
                In der Regel antworte ich innerhalb eines Werktages, persönlich und nicht automatisiert.
              </p>
            </div>
            <KontaktForm />
          </div>
          <KontaktInfo />
        </div>
      </Container>
    </section>
  )
}
