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
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.1] tracking-tight italic">
              Self Code of <br />
              <span className="not-italic opacity-90">Care.</span>
            </h1>
          </div>
        </div>

        {/* Editorial Content Section 1 */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start mb-40 md:mb-64">
          <div className="md:col-span-7 order-2 md:order-1">
            <p className="font-headline text-xl md:text-2xl lg:text-3xl text-primary leading-relaxed font-light tracking-tight first-letter:text-6xl md:first-letter:text-7xl first-letter:font-headline first-letter:mr-3 first-letter:float-left first-letter:text-secondary">
              The relationship we have with ourselves shapes every decision we make and every system we build. Learning to recognize our own limits before we reach them is not a weakness to overcome but a practice to maintain. The pressure to build fast and ship faster is real, but a depleted person makes decisions they later regret. Caring for yourself is not a luxury. It is a responsibility to your work, your team, and the people your systems will eventually touch. Being honest with yourself about when something feels wrong matters more than it might seem in the moment. Discomfort is information and the technology we build carries the values we held in the moments we were least comfortable, so those moments deserve more attention than we usually give them.

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
        <section className="mb-20 md:mb-32">
          <div className="w-full h-[320px] md:h-[500px] lg:h-[614px] relative overflow-hidden">
            <img
              src="https://applescoop.org/image/wallpapers/mac/snowcapped-mountain-landscape-nature-ultrawide-wallpapers-2025-best-ultra-hd-high-resolution-4k-desktop-backgrounds-wallpapers-for-mac-linux-and-windows-pc-macos-11-03-2025-1741731828-hd-wallpaper.webp"
              alt="Aesthetic Mountain Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/5" />
          </div>
        </section>

        {/* Editorial Content Section 2 */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
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
            <p className="font-headline text-md md:text-xl lg:text-2xl text-primary leading-relaxed font-light tracking-tight">
              It is also worth remembering that your identity is not your output. You are not your code, your grade, or your productivity, and resisting the pressure to define yourself that way requires knowing who you are apart from your work. Every builder brings blind spots into the room. Staying curious about your own assumptions means regularly asking whose experience you are not imagining and what you are treating as default that isn't. Rest is not the opposite of progress. The systems that last were built by people who thought without distraction, and thinking clearly requires distance from the work. Build that into your life the way you would build it into any system you want to run well for decades.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
