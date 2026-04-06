export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0D0D0D] flex items-center overflow-hidden"
    >
      {/* Background word */}
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center text-[22vw] font-serif font-black text-white/[0.03] select-none pointer-events-none leading-none tracking-tighter"
      >
        DIGNITY
      </span>

      {/* Left red accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#FF2E0A]" />

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 79px,#fff 79px,#fff 80px), repeating-linear-gradient(90deg,transparent,transparent 79px,#fff 79px,#fff 80px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        {/* Eyebrow */}
        <p className="text-[#FF2E0A] text-sm font-semibold tracking-[0.2em] uppercase mb-8">
          OP Jindal Global University · Student Election 2025
        </p>

        {/* Name */}
        <h1 className="font-serif font-black text-white leading-[0.9] mb-8">
          <span className="block text-[clamp(4rem,12vw,10rem)]">Madhav</span>
          <span className="block text-[clamp(4rem,12vw,10rem)] text-[#FF2E0A]">
            Dutta.
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-white/60 text-lg md:text-2xl font-light max-w-xl leading-relaxed mb-12">
          Student life must be organised around{" "}
          <em className="text-white not-italic font-semibold">dignity.</em>
          <br />
          That is not a slogan. It is a standard.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#agenda"
            className="bg-[#FF2E0A] hover:bg-[#C4220A] text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm tracking-wide"
          >
            See the Agenda
          </a>
          <a
            href="#strands"
            className="border border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm tracking-wide"
          >
            The 5 Pillars
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
