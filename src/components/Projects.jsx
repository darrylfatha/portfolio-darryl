import Section from './Section'
import { projects } from '../data/cv'

export default function Projects() {
  return (
    <Section id="proyek" num="04" title="Proyek">
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="reveal flex flex-col rounded-lg border border-line bg-white/50 p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <span className="font-mono text-xs uppercase tracking-wide text-gold">{p.tag}</span>
            <h3 className="mt-2 font-display text-xl leading-snug">{p.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{p.desc}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t} className="rounded bg-ink px-2 py-0.5 font-mono text-[11px] text-paper">{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
