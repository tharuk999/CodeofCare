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
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl text-primary max-w-4xl leading-[1.1] font-light">
              Cultivating a <span className="italic">regenerative</span> framework for global value.
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4">
              <article className="space-y-12 md:space-y-16">

                {/* Paragraph 1 */}
                <p className="font-headline text-2xl md:text-3xl leading-relaxed text-primary/90 font-light italic">
                  The current economic landscape prioritizes rapid extraction over long-term
                  vitality. Our Code of Care reimagines this paradigm, treating capital not as a
                  finite resource to be hoarded, but as a seed that requires a healthy ecosystem to
                  thrive. By shifting our focus from quarterly returns to generational stability, we
                  create a landscape where growth is measured by the depth of our roots and the
                  health of our soil.
                </p>

                {/* Asymmetric Secondary Image */}
                <div className="relative md:-ml-32 md:mr-12 py-8 md:py-12">
                  <div className="w-full md:w-[120%] aspect-video rounded-xl overflow-hidden bg-surface-container-low">
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
                  Sustainability is not a limit on prosperity; it is the prerequisite for its
                  endurance. In this new architecture, value is defined by mutual resilience. We
                  build systems that are grounded in the physical reality of our planet, ensuring
                  that every transaction contributes to the restorative cycle of the arboretum. To
                  care for the economy is to care for the intricate web of relationships that
                  sustain human life across time.
                </p>
              </article>

              {/* CTA */}
              <div className="mt-20 md:mt-24 flex justify-center">
                <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 md:px-10 py-4 md:py-5 rounded-xl font-body font-medium flex items-center gap-3 hover:opacity-90 transition-all shadow-lg shadow-primary/10">
                  Download the Full Code
                  <span className="material-symbols-outlined">arrow_downward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
