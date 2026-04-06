export default function Contact() {
  return (
    <section id="contact" className="bg-[#0D0D0D] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left */}
          <div>
            <p className="text-[#FF2E0A] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Join the Campaign
            </p>
            <h2 className="font-serif font-black text-white text-3xl md:text-5xl leading-tight mb-6">
              Stand for Dignity.
              <br />
              <span className="text-[#FF2E0A]">Vote Madhav Dutta.</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md">
              This campaign belongs to every student who has had to fight for
              something that should have been guaranteed. If you believe campus
              life can be better — stand with Madhav.
            </p>
          </div>

          {/* Right — card */}
          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-10">
            <p className="text-white/40 text-xs font-semibold tracking-[0.15em] uppercase mb-2">
              Reach Out
            </p>
            <a
              href="mailto:campaign@madhavdutta.in"
              className="block text-white text-lg font-medium hover:text-[#FF2E0A] transition-colors mb-8 break-all"
            >
              campaign@madhavdutta.in
            </a>

            <p className="text-white/40 text-xs font-semibold tracking-[0.15em] uppercase mb-3">
              Follow the Campaign
            </p>
            <div className="flex gap-3 mb-8">
              <a
                href="#"
                className="border border-white/20 hover:border-[#FF2E0A] hover:text-[#FF2E0A] text-white/70 text-sm font-medium px-5 py-2.5 rounded-full transition-all"
              >
                Instagram
              </a>
              <a
                href="#"
                className="border border-white/20 hover:border-[#FF2E0A] hover:text-[#FF2E0A] text-white/70 text-sm font-medium px-5 py-2.5 rounded-full transition-all"
              >
                LinkedIn
              </a>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-white/30 text-xs leading-relaxed">
                OP Jindal Global University · Student Election 2025
                <br />
                Paid for by the Madhav Dutta Campaign Committee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
