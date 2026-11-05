import Section from './Section'
import { profile } from '../data/cv'

export default function About() {
  return (
    <Section id="tentang" num="01" title="Tentang saya">
      <p className="reveal max-w-3xl text-lg leading-relaxed text-ink-soft">{profile.summary}</p>
      <p className="reveal mt-4 font-mono text-sm text-ink-soft">📍 {profile.location}</p>
    </Section>
  )
}
