export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.06] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif font-black text-white text-lg">
          MD <span className="text-[#FF2E0A]">2025</span>
        </p>
        <p className="text-white/30 text-xs text-center">
          Madhav Dutta · Dignity Driven Campaign · JGLS Student Election 2025
        </p>
        <p className="text-white/20 text-xs">This is a student election campaign website.</p>
      </div>
    </footer>
  );
}
