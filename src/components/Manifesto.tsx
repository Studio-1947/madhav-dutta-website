const strands = [
  {
    num: "01",
    text: "Dignity means being ",
    bold: "trusted as an adult",
    rest: ", not policed like a suspect.",
  },
  {
    num: "02",
    text: "Dignity means being able to ",
    bold: "study, eat, move, rest, and live",
    rest: " without fighting for basics.",
  },
  {
    num: "03",
    text: "Dignity means ",
    bold: "health, fitness, hygiene, and recreation",
    rest: " are real parts of student life, not optional extras.",
  },
  {
    num: "04",
    text: "Dignity means ",
    bold: "support, not punishment",
    rest: " through rigid systems.",
  },
  {
    num: "05",
    text: "Dignity means ",
    bold: "democratic voice, equal representation",
    rest: ", and accountable student governance.",
  },
];

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="bg-[#FF2E0A] py-24 md:py-32 overflow-hidden relative"
    >
      {/* Subtle background text */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 font-serif font-black text-white/[0.06] text-[20vw] leading-none select-none pointer-events-none whitespace-nowrap"
      >
        FIVE
      </span>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <p className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            The Compact
          </p>
          <h2 className="font-serif font-black text-white text-3xl md:text-5xl">
            Five Strands. One Standard.
          </h2>
        </div>

        <ol className="space-y-0 divide-y divide-white/20">
          {strands.map((s) => (
            <li
              key={s.num}
              className="flex items-start gap-6 md:gap-10 py-7 group"
            >
              <span className="font-serif font-black text-white/30 text-xl md:text-2xl shrink-0 pt-0.5 group-hover:text-white/60 transition-colors">
                {s.num}
              </span>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                {s.text}
                <strong className="text-white font-semibold">{s.bold}</strong>
                {s.rest}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
