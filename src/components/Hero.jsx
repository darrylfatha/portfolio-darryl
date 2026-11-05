import { profile, stats } from '../data/cv'

// Strip kecil bergaya "status batch EOD" sebagai ciri khas dunia operasional bank
function StatusStrip() {
  const rows = [
    ['EOD batch', 'COMPLETED', 'bg-emerald-500'],
    ['DRC replication', 'IN SYNC', 'bg-emerald-500'],
    ['Daily backup', 'VERIFIED', 'bg-emerald-500'],
    ['SLA Sev-1', '0 BREACH', 'bg-emerald-500'],
  ]
  return (
    <div className="rounded-lg bg-ink p-5 font-mono text-xs text-paper shadow-xl">
      <div className="mb-3 flex items-center gap-2 text-paper/60">
        <span className="blink h-2 w-2 rounded-full bg-gold-bright" />
        ops-console — ilustrasi
      </div>
      {rows.map(([k, v, c]) => (
        <div key={k} className="flex items-center justify-between border-t border-paper/10 py-2">
          <span className="text-paper/70">{k}</span>
          <span className="flex items-center gap-2">
            <span className={`h-1.5 w-1.5 rounded-full ${c}`} />
            {v}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-16 pt-16 md:pt-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="reveal mb-4 font-mono text-sm text-gold">Halo, saya</p>
          <h1 className="reveal font-display text-5xl leading-[1.05] md:text-6xl">
            {profile.name}
          </h1>
          <p className="reveal mt-4 text-xl text-ink-soft">{profile.role}</p>
          <p className="reveal mt-6 max-w-xl leading-relaxed text-ink-soft">{profile.tagline}</p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <a href="#kontak" className="rounded bg-ink px-5 py-3 text-sm font-medium text-paper transition hover:bg-gold">
              Hubungi saya
            </a>
            <a href="#pengalaman" className="rounded border border-ink/30 px-5 py-3 text-sm font-medium transition hover:border-ink">
              Lihat pengalaman
            </a>
          </div>
        </div>
        <div className="reveal"><StatusStrip /></div>
      </div>

      <dl className="reveal mt-16 grid grid-cols-2 gap-6 border-t border-line pt-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="font-display text-3xl">{s.value}</dt>
            <dd className="mt-1 text-sm text-ink-soft">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
