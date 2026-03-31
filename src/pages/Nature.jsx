import Footer from '../components/Footer';

export default function Nature() {
  return (
    <div className="font-body text-on-surface">
      <main className="pt-28 md:pt-32 pb-40">

        {/* Hero Title */}
        <header className="editorial-spacing mb-24 md:mb-32">
          <div className="max-w-4xl">
            <p className="font-label text-secondary uppercase tracking-[0.3em] text-xs mb-5 md:mb-6 font-semibold">
              The Manifesto
            </p>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.1] tracking-tight italic">
              Nurturing the Digital <br />
              <span className="not-italic opacity-90">Understory.</span>
            </h1>
          </div>
        </header>

        {/* Main Narrative Section 1 */}
        <section className="editorial-spacing grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start mb-40 md:mb-56">
          <div className="lg:col-span-7">
            <p className="font-headline text-2xl md:text-3xl lg:text-4xl text-primary leading-relaxed font-light italic">
              "We believe that the digital spaces we inhabit should mirror the quiet resilience of an
              ancient woodland. It is not merely about the code we write, but the ecosystem we
              cultivate-one where privacy is the root system and transparency is the light that
              filters through the canopy."
            </p>
            <div className="mt-10 md:mt-12 h-px w-24 bg-secondary/30" />
          </div>
          <div className="lg:col-span-5 lg:mt-24">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-low grayscale-[20%] hover:grayscale-0 transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&auto=format&fit=crop"
                alt="Sunlight streaming through tall trees in a misty forest"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Large Landscape Break */}
        <section className="px-4 md:px-6 lg:px-12 mb-40 md:mb-56">
          <div className="w-full aspect-[21/9] rounded-xl overflow-hidden bg-surface-container-low editorial-shadow">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&auto=format&fit=crop"
              alt="A wide panoramic view of a calm lake reflecting mountains at dawn"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Main Narrative Section 2 */}
        <section className="editorial-spacing flex flex-col items-end mb-32 md:mb-40">
          <div className="max-w-4xl text-right">
            <p className="font-headline text-2xl md:text-3xl lg:text-4xl text-primary leading-relaxed font-light">
              Our responsibility extends beyond the immediate interface. We design for the long-term
              health of the user's focus, creating tools that act as quiet companions rather than
              demanding masters. This is the code of care: a commitment to building a future that
              feels fundamentally human, even in its most complex digital forms.
            </p>
            {/* <div className="mt-12 md:mt-16 flex justify-end">
              <a className="group flex items-center gap-4 text-secondary font-medium tracking-wide" href="#">
                <span className="border-b border-secondary/20 group-hover:border-secondary transition-colors pb-1">
                  Download the full Ethics PDF
                </span>
                <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">
                  arrow_right_alt
                </span>
              </a>
            </div> */}
          </div>
        </section>

        {/* Editorial Footnote */}
        {/* <section className="editorial-spacing pt-16 md:pt-20 border-t border-outline-variant/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div>
              <span className="font-headline italic text-primary text-2xl md:text-3xl">
                Future Code of Care
              </span>
              <p className="font-body text-on-surface-variant mt-4 max-w-sm leading-relaxed">
                A project dedicated to the intersection of digital ethics, environmental philosophy,
                and high-craft interface design.
              </p>
            </div>
            <div className="flex md:justify-end gap-8 md:gap-12 font-label text-xs uppercase tracking-widest text-primary/40">
              <div>Established 2024</div>
              <div>Volume I</div>
              <div>Stockholm, SE</div>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
