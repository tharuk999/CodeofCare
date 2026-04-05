import Footer from '../components/Footer';

const essayParagraphs = [
  {
    number: '03',
    text: 'The greatest ethical risk in technology is not malice. It is distance. When someone writes code that reshapes the life of someone they will never meet, empathy becomes nearly impossible to sustain. This moral distance takes two forms: ignorance ("I don\'t really know what this code is used for") and privilege. Research shows that even randomly assigned wealth in a board game makes people ruder and less empathetic, and they attribute their success to skill rather than the coin flip that gave them the advantage. The technology industry, with its outsized compensation, is especially vulnerable. We commit to closing that distance.',
  },
  {
    number: '04',
    text: 'When people feel unsafe, they enter survival mode: fight, flight, freeze. This is neurobiology, not a character flaw. The mind, body, and heart are interconnected. Technology that manipulates through fear or urgency forces people into their hedgehog response: curled inward, reactive, unable to think or connect. We commit to building systems that help people move from surviving to thriving. We must also question the stories our industry celebrates. The Innovator so driven by progress that consequences disappear. The Visionary who dismisses anyone who disagrees. Purpose without care is dangerous. We do not aspire to move fast and break things. We aspire to build things that last.',
  },
  {
    number: '05',
    text: 'Many systems shaping daily life were built by the fox alone: analytical, efficient, goal-oriented. The fox built the modern world. A world that is not good enough. Social media is engineered to keep people in constant focused engagement, preventing the reflective thinking they need to make meaning. The problems technology creates are complex, affect everyone, and have no clean answers. They live in the brave zone. The fourth industrial revolution demands people who carry both technical depth and human breadth, who hold "how do we make this better?" alongside "should this exist at all?"',
  },
  {
    number: '06',
    text: 'Trust is not a zero-sum game. When systems are designed around extraction, everyone loses. When designed around mutual benefit, trust compounds. And the way we measure matters. When researchers removed the ladder metaphor from a happiness scale, people stopped thinking about power and wealth and started thinking about health, relationships, and security. If we measure success only in engagement and revenue, that is the world we build. The values most universally shared across cultures are honesty, fairness, critical thinking, curiosity, and kindness. We commit to building systems that find the win-win.',
  },
  {
    number: '07',
    text: 'We are not isolated builders. Ubuntu teaches that I am because we are. Indigenous wisdom speaks of all my relations. The Chinese character for "human" depicts two figures leaning on each other. Victor Frankl found meaning in love, purposeful work, and courage in the face of difficulty. Building technology with care is purposeful work. It requires courage, because it is easier and more profitable to build without it. And it is an act of love for people we may never meet. We believe in protopia: a world that is imperfect but improving, courageously. This code is our contribution to that effort.',
  },
];

export default function Tech() {
  return (
    <div className="font-body text-on-surface">
      <main className="pt-32 md:pt-40 pb-20">

        {/* Hero Title */}
        <header className="max-w-[1440px] mx-auto px-6 md:px-12 mb-24 md:mb-32">
          <div className="max-w-4xl">
            <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-5 md:mb-6 block">
              Foundational Principles
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.1] tracking-tight italic">
              Technological <br />Code of
              <span className="not-italic opacity-90"> Care.</span>
            </h1>
          </div>
        </header>

        {/* Main Narrative Grid */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">

          {/* Paragraph 1 */}
          <div className="md:col-span-7 space-y-10 md:space-y-12">
            <p className="font-headline text-2xl md:text-3xl lg:text-4xl leading-[1.6] text-primary font-light">
              Engineering, medicine, and law each hold a grand bargain with society. They offer expertise, reliability, and trustworthiness. In return, society grants them legal protection and the right to regulate themselves. Software development holds no such bargain. It is a weak profession: no licensing body, no enforceable ethical standard, no one standing between a careless product and the people it harms. This code of care exists because no one else will write it for us.
            </p>
          </div>

          {/* Image 1 */}
          <div className="md:col-span-5 md:mt-24">
            <div className="rounded-xl overflow-hidden bg-surface-container-low aspect-[4/5] relative group">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop"
                alt="Abstract macro photography of glowing digital pathways"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>

          {/* Spacing Break */}
          <div className="hidden md:block md:col-span-12 h-28 md:h-40" />

          {/* Image 2 */}
          <div className="md:col-span-5 order-last md:order-none">
            <div className="rounded-xl overflow-hidden bg-surface-container-low aspect-square relative group">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop"
                alt="Ethereal crystalline structures catching soft morning light"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-secondary/5 mix-blend-screen" />
            </div>
          </div>

          {/* Paragraph 2 */}
          <div className="md:col-span-7">
            <p className="font-headline text-xl md:text-2xl lg:text-3xl leading-[1.6] text-primary font-light">
              Human beings need safety before they can reach for anything higher. They need competence, autonomy, relatedness, and purpose. Every piece of technology either supports these needs or quietly undermines them. A platform that simulates connection while deepening isolation attacks relatedness at its root. The longest study of human happiness found that close relationships matter more than income or status, and that loneliness is more harmful than smoking. Yet there is a paradox: when people feel unsafe, they push others away, even though connection is what they need most. Technology can deepen this paradox or help resolve it.
            </p>
          </div>

          <div className="hidden md:block md:col-span-12 h-14 md:h-20" />
        </section>

        {/* ── Extended Essay Section ── */}
        <section className="mt-24 md:mt-32 border-t border-outline-variant/10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">

            {/* Section label */}
            <div className="flex items-center gap-6 py-10 md:py-14">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-semibold">
                The Full Code
              </span>
              <div className="flex-1 h-px bg-outline-variant/30" />
            </div>

            {/* Paragraphs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {essayParagraphs.map((para, i) => (
                <div
                  key={i}
                  className="lg:col-start-2 lg:col-span-9 xl:col-start-3 xl:col-span-7 relative py-12 md:py-16 border-b border-outline-variant/10 last:border-b-0"
                >
                  {/* Number marker */}
                  <span className="absolute -left-2 lg:-left-10 top-12 md:top-16 font-headline italic text-3xl text-secondary-fixed-dim opacity-50 hidden lg:block select-none">
                    {para.number}
                  </span>
                  <p className="font-headline text-lg md:text-xl lg:text-2xl leading-[1.8] text-primary/85 font-light">
                    {para.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Bottom Quote */}
        <section className="mt-24 md:mt-40 mb-10 md:mb-20 px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto py-16 md:py-24 border-y border-outline-variant/10">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6 md:mb-8 block">
              auto_awesome
            </span>
            <blockquote className="font-headline italic text-xl md:text-2xl text-primary/60">
              "The most profound technologies are those that disappear. They weave themselves into
              the fabric of everyday life until they are indistinguishable from it."
            </blockquote>
            <div className="w-1/3 h-px bg-secondary/30 mx-auto mt-6 md:mt-8" />
            <p className="font-headline text-primary/50 mt-4">— Mark Weiser</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}