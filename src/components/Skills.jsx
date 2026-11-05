import Section from './Section'
import { skills } from '../data/cv'

export default function Skills() {
  return (
    <Section id="keahlian" num="02" title="Keahlian">
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((g) => (
          <div key={g.title} className="reveal rounded-lg border border-line bg-white/50 p-5">
            <h3 className="mb-3 font-medium">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i} className="rounded-full border border-line bg-paper px-3 py-1 font-mono text-xs text-ink-soft">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
