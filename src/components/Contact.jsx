import Section from './Section'
import { profile } from '../data/cv'

export default function Contact() {
  const links = [
    ['Email', profile.email, `mailto:${profile.email}`],
    profile.showPhone && ['Telepon', profile.phone, `tel:${profile.phone}`],
    profile.linkedin && ['LinkedIn', profile.linkedin.replace('https://', ''), profile.linkedin],
    profile.github && ['GitHub', profile.github.replace('https://', ''), profile.github],
  ].filter(Boolean)

  return (
    <Section id="kontak" num="06" title="Kontak">
      <p className="reveal max-w-xl text-lg text-ink-soft">
        Tertarik berdiskusi soal operasional core banking, database, atau analisis data? Silakan hubungi saya.
      </p>
      <ul className="reveal mt-8 space-y-3">
        {links.map(([label, text, href]) => (
          <li key={label} className="flex items-baseline gap-4">
            <span className="w-20 font-mono text-sm text-gold">{label}</span>
            <a href={href} className="underline decoration-line underline-offset-4 transition hover:decoration-gold">{text}</a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
