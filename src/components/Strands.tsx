"use client";
import { motion, type Variants } from "framer-motion";
import { ease } from "@/lib/motion";
import AnimateIn, { StaggerIn, staggerChild } from "./AnimateIn";

interface AgendaItem {
  title: string;
  detail: string;
}

interface StrandData {
  id: string;
  num: string;
  superText: string;
  title: string;
  desc: string;
  items: AgendaItem[];
  dark?: boolean;
}

const strands: StrandData[] = [
  {
    id: "strand-1",
    num: "01",
    superText: "Dignity means",
    title: "Being Trusted as an Adult, Not Policed Like a Suspect",
    desc: "A university cannot claim to respect students while governing them through suspicion, humiliation, and intrusive control. Adult students should not be treated as potential offenders who must constantly be monitored, screened, or morally supervised. Rules may exist, but they must be proportionate, civil, and rooted in trust.",
    items: [
      {
        title: "End routine breath analyser tests at entry gates",
        detail: "Students should not be subjected to degrading checks as a matter of routine. Safety cannot become a cover for humiliation.",
      },
      {
        title: "Roll back excessive surveillance and intrusive monitoring",
        detail: "Constant monitoring replaces trust with suspicion. A campus cannot speak the language of dignity while normalising watchfulness.",
      },
      {
        title: "Allow regulated cross-hostel entry between men's and women's hostels",
        detail: "Blanket restrictions reflect moral policing, not mature administration. Adult interaction should not be treated as misconduct by default.",
      },
      {
        title: "Reduce arbitrary gatekeeping in campus movement rules",
        detail: "Movement on campus should not be turned into a disciplinary question at every step. Dignity requires freedom from needless control.",
      },
      {
        title: "Ensure students have a say in rules that govern campus life",
        detail: "Rules imposed without student voice usually become rules of control. Trust requires participation, not one-sided regulation.",
      },
      {
        title: "Review security practices that are excessive, arbitrary, or degrading",
        detail: "Security without limits easily becomes indignity in uniform. Necessary rules must still answer to standards of fairness and restraint.",
      },
    ],
    dark: false,
  },
  {
    id: "strand-2",
    num: "02",
    superText: "Dignity means",
    title: "Study, Eat, Move, Rest, and Live Without Fighting for Basics",
    desc: "A dignified university does not force students to struggle for food, access, mobility, study spaces, or simple residential functionality. When basic needs become recurring battles, the institution drains students of time, energy, and self-respect. Dignity requires that daily life work without constant friction.",
    items: [
      { title: "Night access to study spaces", detail: "Students should be able to study when they need to, not only when a rigid timetable permits." },
      { title: "A 24-hour eating joint", detail: "Food is not a luxury tied to fixed hours. Campus life runs late, and basic access to food should reflect that reality." },
      { title: "Reform mess timings to match real student schedules", detail: "Students should not lose access to a basic meal due to narrow timings that ignore actual schedules." },
      { title: "Transparency in food court pricing", detail: "Students should know what they are being charged and why. Dignity includes freedom from opaque and arbitrary pricing." },
      { title: "Healthier and more reliable food options", detail: "Students should not have to choose between convenience and decent food. A functioning campus must provide both." },
      { title: "More printing centres + monthly printing allowance", detail: "Academic work should not be made harder by preventable logistical shortages. Students should not be nickel-and-dimed for ordinary academic needs." },
      { title: "Upgrade hostel microwaves and refrigerators", detail: "Residential life cannot be dignified when basic appliances are poor, unavailable, or inadequate for actual use." },
      { title: "Online lost and found system", detail: "Basic campus systems should work with some order and reliability. Students should not have to chase confusion for everyday problems." },
      { title: "Golf cart tracking + waive shuttle booking fees", detail: "Mobility should be predictable on a large campus. Campus movement is a basic necessity, not a premium add-on." },
    ],
    dark: true,
  },
  {
    id: "strand-3",
    num: "03",
    superText: "Dignity means",
    title: "Health, Fitness, and Recreation Are Real Parts of Student Life",
    desc: "Students do not only attend classes. They live on campus, use their bodies, manage stress, and need space for exercise, rest, leisure, and ordinary human balance. A university that ignores this treats students like academic units rather than people. Dignity means the body and mind are not an afterthought.",
    items: [
      { title: "Restore the old girls' gym", detail: "Access to fitness infrastructure cannot be selectively reduced and then dismissed as minor. Equal wellbeing access is a dignity question." },
      { title: "Move toward 24-hour gym access", detail: "Students have different schedules and pressures. Health should not be made inaccessible through narrow timing rules." },
      { title: "More pool tables & table tennis tables; improved common room infrastructure", detail: "Recreation is part of liveable campus life. Students should have real, not token, access to leisure." },
    ],
    dark: false,
  },
  {
    id: "strand-4",
    num: "04",
    superText: "Dignity means",
    title: "Support, Not Punishment Through Rigid Systems",
    desc: "Illness, internships, attendance shortages, academic setbacks, and personal strain are ordinary parts of student life. A dignified system helps students recover and continue. An undignified system defaults to penalties, procedural rigidity, and indifferent administration. Rules should solve problems, not weaponise them.",
    items: [
      { title: "Reform the attendance policy in line with court directions", detail: "Attendance should not become a blunt instrument that ignores context, effort, or reality." },
      { title: "Reduce improvement and resit exam fee burdens", detail: "Academic recovery should not be made harsher through unnecessary financial punishment." },
    ],
    dark: true,
  },
  {
    id: "strand-5",
    num: "05",
    superText: "Dignity means",
    title: "Democratic Voice, Equal Representation, and Accountable Governance",
    desc: "Students cannot be asked to believe in representation while power is centralised, participation is tokenised, and accountability is weak. A student Constitution should distribute voice fairly, allow reform from below, open leadership broadly, and prevent power from hardening into a closed internal structure. Dignity in governance means students are not merely spoken for — they actually count.",
    items: [
      { title: "Reform the JGLS Constitution to end token representation", detail: "Elected representatives must have real power, not decorative status. Representation that does not count is not representation." },
      { title: "Give Class Representatives equal and ordinary voting power", detail: "Those closest to actual student concerns should not be reduced to message carriers inside the body meant to represent students." },
      { title: "End counting Class Representatives for quorum while denying them equal power", detail: "Legitimacy cannot be borrowed from representatives who are then sidelined in governance." },
      { title: "Democratise the amendment process", detail: "A Constitution cannot belong to students if reform is gated, centralised, and effectively controlled from above." },
      { title: "Remove arbitrary eligibility barriers for leadership positions", detail: "Leadership should be broadly open, not carefully filtered through narrow academic, programme, or pedigree-based restrictions." },
      { title: "Introduce independent financial accountability and audit mechanisms", detail: "Bodies that handle fees and funds cannot be left to police themselves and call it transparency." },
      { title: "Make student governance transparent, answerable, and structurally fair", detail: "Democracy is not just about elections. It is about how power operates after the election." },
    ],
    dark: false,
  },
];

const dotVariant: Variants = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: "spring", stiffness: 400, damping: 20 } },
};

function ItemCard({ item, dark }: { item: AgendaItem; dark: boolean }) {
  const cardBg = dark
    ? "bg-white/[0.04] border-white/[0.07]"
    : "bg-white border-[#0D0D0D]/[0.07]";
  const titleColor = dark ? "text-white/90" : "text-[#0D0D0D]";
  const detailColor = dark ? "text-white/45" : "text-[#5A5A5A]";

  return (
    <motion.div
      variants={staggerChild}
      whileHover={{
        y: -4,
        borderColor: "rgba(255,46,10,0.45)",
        boxShadow: "0 12px 32px rgba(255,46,10,0.08)",
      }}
      className={`border ${cardBg} rounded-2xl p-6 cursor-default`}
    >
      <div className="flex items-start gap-3 mb-3">
        <motion.span
          variants={dotVariant}
          className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF2E0A] shrink-0"
        />
        <p className={`${titleColor} font-semibold text-sm leading-snug`}>
          {item.title}
        </p>
      </div>
      <p className={`${detailColor} text-sm leading-relaxed pl-4`}>
        {item.detail}
      </p>
    </motion.div>
  );
}

function StrandSection({ strand }: { strand: StrandData }) {
  const bg = strand.dark ? "bg-[#111111]" : "bg-[#FAFAFA]";
  const headingColor = strand.dark ? "text-white" : "text-[#0D0D0D]";
  const bodyColor = strand.dark ? "text-white/50" : "text-[#4A4A4A]";

  return (
    <section id={strand.id} className={`${bg} py-24 md:py-32`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 md:mb-16">
          <div className="flex items-start gap-6 md:gap-10 mb-8">
            <AnimateIn direction="left" delay={0.05}>
              <span className="font-serif font-black text-[#FF2E0A] leading-none shrink-0 text-[clamp(3.5rem,8vw,6rem)]">
                {strand.num}
              </span>
            </AnimateIn>
            <div className="pt-2">
              <AnimateIn delay={0.1}>
                <p className="text-[#FF2E0A] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                  {strand.superText}
                </p>
              </AnimateIn>
              <AnimateIn delay={0.18}>
                <h2 className={`font-serif font-black ${headingColor} text-2xl md:text-4xl leading-tight`}>
                  {strand.title}
                </h2>
              </AnimateIn>
            </div>
          </div>

          <AnimateIn delay={0.28}>
            <p className={`${bodyColor} text-base md:text-lg leading-relaxed max-w-3xl border-l-2 border-[#FF2E0A]/40 pl-5`}>
              {strand.desc}
            </p>
          </AnimateIn>
        </div>

        <StaggerIn
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          containerDelay={0.35}
          staggerDelay={0.07}
        >
          {strand.items.map((item, i) => (
            <ItemCard key={i} item={item} dark={!!strand.dark} />
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}

export default function Strands() {
  return (
    <div id="strands">
      {strands.map((strand) => (
        <StrandSection key={strand.id} strand={strand} />
      ))}
    </div>
  );
}
