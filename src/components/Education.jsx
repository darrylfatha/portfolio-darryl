import Section from './Section'
import { education, certifications } from '../data/cv'

export default function Education() {
  return (
    <Section id="pendidikan" num="05" title="Pendidikan & sertifikasi">
      <div className="reveal mb-12 rounded-lg bg-ink p-6 text-paper">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-2xl">{education.school}</h3>
          <span className="font-mono text-sm text-gold-bright">{education.period}</span>
        </div>
        <p className="mt-2 text-paper/80">{education.degree} · IPK {education.gpa}</p>
      </div>

      <ul className="grid gap-4 md:grid-cols-2">
        {certifications.map((c) => (
          <li key={c.name} className="reveal rounded-lg border border-line bg-white/50 p-5">
            <div className="flex items-start justify-between gap-3">
              <h4 className="font-medium leading-snug">{c.name}</h4>
              {c.date && <span className="shrink-0 font-mono text-xs text-gold">{c.date}</span>}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.desc}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
