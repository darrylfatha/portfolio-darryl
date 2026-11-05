export default function Section({ id, num, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-20 md:py-28">
      <div className="reveal mb-10 flex items-baseline gap-4 border-b border-line pb-4">
        <span className="font-mono text-sm text-gold">{num}</span>
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  )
}
