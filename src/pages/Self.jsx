import Footer from '../components/Footer';

export default function Self() {
  return (
    <div className="font-body text-on-surface">
      <main className="pt-36 md:pt-48 pb-32 overflow-hidden">

        {/* Hero */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-24 md:mb-32">
          <div className="max-w-4xl">
            <span className="font-body text-secondary uppercase tracking-[0.2em] text-xs font-semibold mb-5 md:mb-6 block">
              The Digital Arboretum
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.1] mb-10 md:mb-12">
              Self Code of <br />
              <span className="italic font-light">Care</span>
            </h1>
          </div>
        </div>

        {/* Editorial Content Section 1 */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start mb-40 md:mb-64">
          <div className="md:col-span-7 order-2 md:order-1">
            <p className="font-headline text-2xl md:text-3xl lg:text-4xl text-primary leading-relaxed font-light tracking-tight first-letter:text-6xl md:first-letter:text-7xl first-letter:font-headline first-letter:mr-3 first-letter:float-left first-letter:text-secondary">
              The Self is not a static monolith but a garden that requires daily tending, a quiet
              space where the noise of the digital world dissolves into the background. To care for
              oneself is to acknowledge the rhythmic patterns of exhaustion and renewal, granting
              permission to withdraw into the interiority of thought and silence. It is in these
              moments of profound stillness that the architecture of our purpose is reinforced and
              our capacity for empathy is replenished.
            </p>
          </div>
          <div className="md:col-span-5 order-1 md:order-2 flex justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-xl overflow-hidden editorial-shadow md:translate-y-12 md:translate-x-4">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop"
                alt="Misty forest path at dawn with soft ethereal morning light"
                className="w-full h-full object-cover grayscale-[30%] opacity-90"
              />
            </div>
          </div>
        </section>

        {/* Full-Width Image */}
        <section className="mb-40 md:mb-64">
          <div className="w-full h-[320px] md:h-[500px] lg:h-[614px] relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&auto=format&fit=crop&q=80&sat=-50"
              alt="Minimalist calm interior space with soft natural light"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/5" />
          </div>
        </section>

        {/* Editorial Content Section 2 */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start mb-24 md:mb-32">
          {/* Sidebar Quote */}
          <div className="md:col-start-2 md:col-span-4 hidden md:block">
            <div className="border-l-2 border-secondary/20 pl-8 mt-12">
              <img className="block font-headline italic text-xl md:text-2xl text-secondary mb-4 rounded-2xl"
              src="https://images.pexels.com/photos/5537274/pexels-photo-5537274.jpeg"
              />
              <span className="block font-body text-xs tracking-widest text-primary/40 uppercase">
                Self
              </span>
            </div>
          </div>

          {/* Main text */}
          <div className="md:col-span-6">
            <p className="font-headline text-2xl md:text-3xl lg:text-4xl text-primary leading-relaxed font-light tracking-tight">
              In the cultivation of our digital landscapes, we often neglect the biological
              substrate upon which all creation rests. A sustainable code of care demands a radical
              reimagining of productivity-one that values the fallow periods as highly as the
              harvest. By establishing clear boundaries between the tool and the artisan, we preserve
              the sanctity of our own consciousness, ensuring that our contributions remain
              deliberate, meaningful, and deeply human.
            </p>
            {/* <div className="mt-16 md:mt-20">
              <a href="#" className="inline-flex items-center gap-4 group">
                <span className="bg-primary text-on-primary px-6 md:px-8 py-4 rounded-xl font-body text-sm font-medium tracking-wide group-hover:bg-primary-container transition-all">
                  Download the Ethos
                </span>
                <span className="material-symbols-outlined text-secondary group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div> */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
