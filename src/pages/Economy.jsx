import Footer from '../components/Footer';

export default function Economy() {
  return (
    <div className="font-body text-on-surface">
      <main className="pt-28 md:pt-32 pb-32 md:pb-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <header className="mb-20 md:mb-24">
            <span className="font-label text-secondary uppercase tracking-[0.2em] text-xs font-semibold mb-5 md:mb-6 block">
              The Economic Code
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.1] tracking-tight italic">
              Economical Code of <br />
              <span className="not-italic opacity-90">Care.</span>
            </h1>
          </header>

          {/* Hero Image */}
          <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden mb-24 md:mb-32 group editorial-shadow">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&auto=format&fit=crop"
              alt="Majestic mountain peaks under soft morning mist representing enduring value"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>

          {/* Content Canvas */}
          <div className="flex flex-col gap-12 items-start px-4">
            <div className="md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4">
              <article className="space-y-12 md:space-y-16">

                {/* Paragraph 1 */}
                <p className="font-headline text-2xl md:text-3xl leading-relaxed text-primary/90 font-light italic">
                  Currently, the 5 largest American technology companies hold more market value than the entire GDP of Germany, while the average worker earns below minimum wage after expenses are removed. AI hiring tools trained on historical data have been proven to systemically marginalize women and applicants of colour because the training data encoded was not safeguarded and checked. Credit scoring models used by millions of lenders have been found to assign lower scores to applicants living in historically black neighbourhoods than people with identical profiles who don’t live in such areas. This is what happens when systems are built quickly and audited rarely. These are not edge cases, we can see that the technology industry has built some of the most efficient tools for inequality that have ever existed.

                </p>

                {/* Asymmetric Secondary Image */}
                <div className="py-8">
                  <div className="w-full aspect-video rounded-xl overflow-hidden bg-surface-container-low">
                    <img
                      src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&auto=format&fit=crop"
                      alt="A tiny green sprout emerging from rich dark earth with soft bokeh sunlight"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 md:mt-6 md:ml-32">
                    <span className="font-label text-sm italic text-primary/60">
                      Fig 1.1: The Principle of Emergent Vitality
                    </span>
                  </div>
                </div>

                {/* Paragraph 2 */}
                <p className="font-headline text-2xl md:text-3xl leading-relaxed text-primary/90 font-light">
                  Amazon’s early warehouse productivity system tracked output per hour and fired workers when below quota. This system produced injury rates around double the industry average. Uber’s surge pricing forced people who could be in emergencies to pay the highest fares possible, with no alternatives. Facebook’s internal research showed that recommendation algorithms attempt to increase outrage because it drives more engagement and revenue. Each of these metrics was designed to systemically manipulate people for profit.
                </p>
                <div className="flex items-center gap-6 py-10 md:py-14">
                  <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-semibold">
                    Closing
                  </span>
                  <div className="flex-1 h-px bg-outline-variant/30" />
                </div>

                <p className="font-headline text-xl md:text-2xl leading-relaxed text-primary/90 font-light">
                  Every system described in this code of care is ultimately an economic system. The economy is what we have been building without bothering to see it. The choice to audit a hiring tool, to cap a surge, to slow down a recommendation engine, is an economic choice just as much as a technical or ethical choice. 
                </p>
                
              </article>
            </div>
          </div>
        </div>
        <section className="bg-secondary-fixed/30 py-12 md:py-16 mt-16 md:mt-20">
          <div className="editorial-spacing">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface-container-lowest mb-7 md:mb-8 text-secondary">
                <span className="material-symbols-outlined">account_balance</span>
              </div>
              <h2 className="font-headline text-2xl md:text-3xl text-primary italic mb-6">
                “The economy is the start and end of everything. You can't have successful education reform or any other reform if you don't have a strong economy”
              </h2>
              <div className="w-20 h-px bg-secondary/30 mx-auto" />
              <p>- David Cameron</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
