import Footer from '../components/Footer';

export default function Community() {
  return (
    <div className="font-body text-on-surface">
      <main className="pt-32 md:pt-40 pb-20">

        {/* Hero Title */}
        <header className="editorial-spacing mb-24 md:mb-32">
          <div className="max-w-4xl">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase mb-5 md:mb-6 block">
              Our Ethos
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.1] font-light">
              Community
              <br />
              <span className="italic">Code of Care</span>
            </h1>
          </div>
        </header>

        {/* Asymmetric Visual Anchor */}
        <section className="mb-32 md:mb-40 relative px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-end">
            <div className="md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-9 aspect-[21/9] overflow-hidden rounded-xl bg-surface-container-low editorial-shadow">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&auto=format&fit=crop"
                alt="People collaborating in a sun-drenched architectural space"
                className="w-full h-full object-cover opacity-90 mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </section>

        {/* Focused Narrative */}
        <article className="editorial-spacing mb-32 md:mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-start-3 lg:col-span-8">
              <div className="space-y-16 md:space-y-24">

                {/* Paragraph 1 */}
                <div className="relative">
                  <span className="absolute -left-10 md:-left-12 top-2 text-secondary-fixed-dim font-headline text-4xl hidden lg:block opacity-40">
                    01
                  </span>
                  <p className="font-headline text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-primary font-light">
                    In the cultivation of our digital landscapes, we recognize that care is not a
                    static policy but a living practice-one that requires constant nurturing and
                    mutual attention. We commit to a space where professional rigor meets human
                    softness, fostering an environment where ideas are grown with patience rather
                    than forced through urgency.
                  </p>
                </div>

                {/* Secondary Image Interlude */}
                <div className="w-full md:w-3/4 ml-auto py-8 md:py-12">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-low rotate-1">
                    <img
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop"
                      alt="Hands working together over architectural drawings in soft natural light"
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                  <p className="mt-5 md:mt-6 text-secondary italic font-headline text-base md:text-lg max-w-sm">
                    Collaboration is the root system that sustains our collective vision.
                  </p>
                </div>

                {/* Paragraph 2 */}
                <div className="relative">
                  <span className="absolute -left-10 md:-left-12 top-2 text-secondary-fixed-dim font-headline text-4xl hidden lg:block opacity-40">
                    02
                  </span>
                  <p className="font-headline text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-primary font-light">
                    Our community exists as a digital arboretum, a sanctuary where the complexity of
                    the human experience is honored through ethical code and intentional dialogue.
                    Here, the pursuit of progress never comes at the expense of the practitioner,
                    and every contribution is valued for the life it breathes into our shared
                    ethical architecture.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </article>

        {/* Quote Callout */}
        <section className="bg-secondary-fixed/30 py-24 md:py-32 mt-32 md:mt-40">
          <div className="editorial-spacing">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface-container-lowest mb-7 md:mb-8 text-secondary">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <h2 className="font-headline text-2xl md:text-3xl text-primary italic mb-6">
                "To build with care is to build for longevity."
              </h2>
              <div className="w-20 h-px bg-secondary/30 mx-auto" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
