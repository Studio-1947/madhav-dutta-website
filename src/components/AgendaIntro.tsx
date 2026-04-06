"use client";

const pillars = [
  { num: "01", label: "Trusted as an Adult", href: "#strand-1" },
  { num: "02", label: "Basics Without Battle", href: "#strand-2" },
  { num: "03", label: "Health & Recreation", href: "#strand-3" },
  { num: "04", label: "Support, Not Punishment", href: "#strand-4" },
  { num: "05", label: "Democratic Voice", href: "#strand-5" },
];

export default function AgendaIntro() {
  return (
    <section id="agenda" className="bg-[#0D0D0D] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-[#FF2E0A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            The Campaign
          </p>
          <h2 className="font-serif font-black text-white text-3xl md:text-5xl leading-tight mb-6">
            A Dignity-Driven Agenda
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed">
            The campaign rests on a simple claim. Student life must be organised
            around dignity — students must be trusted as adults, allowed to live
            and study with basic ease, given real access to health and
            recreation, treated fairly in moments of difficulty, and represented
            through institutions that are actually democratic.{" "}
            <span className="text-white/80">
              Dignity is not a slogan here. It is the standard by which campus
              life should be judged.
            </span>
          </p>
        </div>

        {/* Pillar chips */}
        <div className="flex flex-wrap gap-3">
          {pillars.map((p) => (
            <a
              key={p.num}
              href={p.href}
              className="group flex items-center gap-3 border border-white/10 hover:border-[#FF2E0A]/60 bg-white/[0.03] hover:bg-[#FF2E0A]/[0.06] px-5 py-3 rounded-full transition-all duration-200"
            >
              <span className="font-serif font-black text-[#FF2E0A] text-sm">
                {p.num}
              </span>
              <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors">
                {p.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
