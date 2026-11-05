import { useState } from 'react'
import { profile } from '../data/cv'

const links = [
  ['Tentang', '#tentang'],
  ['Keahlian', '#keahlian'],
  ['Pengalaman', '#pengalaman'],
  ['Proyek', '#proyek'],
  ['Pendidikan', '#pendidikan'],
  ['Kontak', '#kontak'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-display text-lg font-semibold">
          {profile.shortName}<span className="text-gold">.</span>
        </a>
        <ul className="hidden gap-6 text-sm md:flex">
          {links.map(([l, h]) => (
            <li key={h}>
              <a href={h} className="text-ink-soft transition hover:text-ink">{l}</a>
            </li>
          ))}
        </ul>
        <button
          className="rounded border border-line px-3 py-1 text-sm md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Buka menu"
          aria-expanded={open}
        >
          {open ? 'Tutup' : 'Menu'}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-line bg-paper px-5 py-2 md:hidden">
          {links.map(([l, h]) => (
            <li key={h}>
              <a href={h} onClick={() => setOpen(false)} className="block py-2 text-ink-soft">{l}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
