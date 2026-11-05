import Section from './Section'
import { experience } from '../data/cv'

export default function Experience() {
  return (
    <Section id="pengalaman" num="03" title="Pengalaman kerja">
      {experience.map((e) => (
        <article key={e.company} className="reveal">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-2xl">{e.role}</h3>
            <span className="font-mono text-sm text-gold">{e.period}</span>
          </div>
          <p className="mt-1 text-ink-soft">{e.company}</p>
          <p className="mt-4 rounded border-l-2 border-gold bg-white/50 px-4 py-3 text-sm text-ink-soft">
            <span className="font-mono text-xs uppercase tracking-wide text-gold">Proyek · </span>
            {e.project}
          </p>
          <ul className="mt-6 space-y-3">
            {e.points.map((p) => (
              <li key={p} className="flex gap-3 leading-relaxed text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {p}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </Section>
  )
}
