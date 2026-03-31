import Footer from '../components/Footer';

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
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary font-light leading-tight tracking-tight">
              Technological Code <br />
              <span className="italic">of Stewardship</span>
            </h1>
          </div>
        </header>

        {/* Main Narrative Grid */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">

          {/* Paragraph 1 */}
          <div className="md:col-span-7 space-y-10 md:space-y-12">
            <p className="font-headline text-2xl md:text-3xl lg:text-4xl leading-[1.6] text-primary font-light">
              We believe that technology should not be a force of extraction, but a medium of{' '}
              <span className="text-secondary italic">cultivation</span>. In our digital arboretum,
              code is treated as soil-a living foundation that requires intentional nourishment,
              patience, and a deep respect for the interconnected systems it supports.
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
          <div className="md:col-span-7 md:pt-24 md:pt-32">
            <p className="font-headline text-2xl md:text-3xl lg:text-4xl leading-[1.6] text-primary font-light">
              This code of care mandates a shift from rapid obsolescence to enduring legacy. It asks
              us to build interfaces that offer <span className="italic">sanctuary</span> rather than
              stimulation, and algorithms that prioritize human agency over automated efficiency. We
              are the architects of the silent spaces between nodes.
            </p>
            {/* <div className="mt-16 md:mt-20 flex items-center space-x-6 group cursor-pointer">
              <div className="h-px w-12 bg-outline-variant transition-all duration-500 group-hover:w-24 group-hover:bg-secondary" />
              <span className="font-body text-sm tracking-widest uppercase text-outline group-hover:text-secondary transition-colors">
                Read the full manifesto
              </span>
            </div> */}
          </div>
        </section>

        {/* Bottom Quote */}
        {/* <section className="mt-40 md:mt-60 mb-10 md:mb-20 px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto py-16 md:py-24 border-y border-outline-variant/10">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6 md:mb-8 block">
              auto_awesome
            </span>
            <blockquote className="font-headline italic text-xl md:text-2xl text-primary/60">
              "The most profound technologies are those that disappear. They weave themselves into
              the fabric of everyday life until they are indistinguishable from it."
            </blockquote>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
