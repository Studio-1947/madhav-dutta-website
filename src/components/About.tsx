export default function About() {
  const stats = [
    { num: "5", label: "Dignity Pillars" },
    { num: "25+", label: "Concrete Actions" },
    { num: "1", label: "Core Standard" },
  ];

  return (
    <section id="about" className="bg-[#FAFAFA] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-20">
          {/* Label col */}
          <div className="pt-1">
            <p className="text-[#FF2E0A] text-xs font-semibold tracking-[0.2em] uppercase">
              Who is Madhav?
            </p>
          </div>

          {/* Content col */}
          <div>
            <h2 className="font-serif font-black text-[#0D0D0D] text-3xl md:text-5xl leading-tight mb-8">
              A student who believes campus life can be better — and is ready to
              fight for it.
            </h2>
            <div className="space-y-4 text-[#2A2A2A] text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                Madhav Dutta is a student at OP Jindal Global University running
                for the Student Union. His campaign is built on one foundational
                idea: every student deserves to live, study, and grow in an
                environment that respects their dignity.
              </p>
              <p>
                This is not a campaign of vague promises. It is a campaign with
                a clear, concrete agenda — five pillars, twenty-five specific
                reforms, all anchored to one standard:{" "}
                <strong className="text-[#0D0D0D]">
                  Are we treating students as trusted adults?
                </strong>
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 md:gap-10 border-t border-[#0D0D0D]/10 pt-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif font-black text-[#FF2E0A] text-4xl md:text-5xl leading-none mb-1">
                    {s.num}
                  </p>
                  <p className="text-[#2A2A2A] text-sm font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
