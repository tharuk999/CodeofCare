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
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.1] tracking-tight italic">
              Community Code of <br />
              <span className="not-italic opacity-90">Care.</span>
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
                    A community is built through the effort of those within it to genuinely show care for one another. The relationships we choose to invest in have the potential to shape not just how we learn, but what we do with that learning.
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
                  <p className="font-headline text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight text-primary font-light">
                    Being honest about when we are struggling, or making space for perspectives different from our own, carries more weight than it might seem in the moment. Small, consistent choices to be present and considerate are what allow a meaningful community to grow, and it is often those choices that leave the most lasting impact on the people around us.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </article>

        {/* Quote Callout */}
        <section className="bg-secondary-fixed/30 py-12 md:py-16 mt-16 md:mt-20">
          <div className="editorial-spacing">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface-container-lowest mb-7 md:mb-8 text-secondary">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <h2 className="font-headline text-2xl md:text-3xl text-primary italic mb-6">
                "In every community, there is work to be done. In every nation, there are wounds to heal. In every heart, there is the power to do it."
              </h2>
              <div className="w-20 h-px bg-secondary/30 mx-auto" />
              <p>- Marianne Williamson</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
