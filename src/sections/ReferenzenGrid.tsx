import { Container } from '@/components/Container'
import { CaseStudyCard } from '@/components/CaseStudyCard'
import { CASE_STUDIES } from '@/lib/content/references'

export function ReferenzenGrid() {
  return (
    <section className="relative bg-transparent pb-[clamp(4rem,8vw,6rem)]">
      <Container>
        <div className="mx-auto flex max-w-[44rem] flex-col gap-8">
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyCard key={study.archetype} study={study} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
