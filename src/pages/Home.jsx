import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const pillars = [
  {
    icon: 'park',
    number: '01',
    title: 'Nature',
    description:
      'Restoring our fundamental connection to the Earth through regenerative practices and bio-mimetic design.',
    to: '/nature',
    colSpan: 'md:col-span-7',
    bg: 'bg-surface-container-low hover:bg-surface-container',
    titleColor: 'text-primary',
    descColor: 'text-on-surface-variant',
    iconColor: 'text-primary',
    numColor: 'text-secondary',
  },
  {
    icon: 'self_improvement',
    number: '02',
    title: 'Self',
    description:
      'Cultivating inner landscape clarity and sovereign wellness as the foundation of all care.',
    to: '/self',
    colSpan: 'md:col-span-5',
    bg: 'bg-surface-container-lowest border border-outline-variant/10 hover:border-outline-variant/30',
    titleColor: 'text-primary',
    descColor: 'text-on-surface-variant',
    iconColor: 'text-secondary',
    numColor: 'text-secondary',
  },
];

export default function Home() {
  return (
    <div className="font-body text-on-surface">
      {/* Background organic shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="organic-blur absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary-container" />
        <div className="organic-blur absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary-fixed" />
        <div className="organic-blur absolute top-[40%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-tertiary-fixed" />
      </div>

      <main className="relative pt-32 px-4 md:px-6 lg:px-24">
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto mb-24 md:mb-32">
          <div className="relative overflow-hidden rounded-3xl h-[400px] md:h-[600px] lg:h-[716px] w-full">
            <img
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&auto=format&fit=crop"
              alt="Expansive serene forest landscape with ancient trees and soft morning mist"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            <div className="absolute bottom-8 md:bottom-16 left-8 md:left-16 max-w-2xl">
              <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl text-white font-bold leading-tight drop-shadow-sm">
                Stewarding the <br />
                <span className="italic font-normal">Next Ecology</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Editorial Quote */}
        <section className="flex flex-col items-center justify-center text-center space-y-16 mb-32 md:mb-40 px-4">
          <div className="max-w-5xl">
            <p className="font-headline text-xl md:text-2xl lg:text-4xl leading-[1.6] text-primary/90 font-light italic">
              "The Future Code of Care is not a digital mandate, but a biological resonance. We
              believe that technology should serve as the trellis for human flourishing, allowing the
              natural complexity of our spirits to climb toward a brighter, more integrated horizon."
            </p>
          </div>
          <div className="max-w-6xl text-left border-l-4 border-secondary/20 pl-8 md:pl-12 py-4">
            <p className="font-headline text-lg md:text-xl lg:text-2xl leading-[1.8] text-on-surface-variant max-w-4xl">
              In this emerging era, our definitions of progress must transition from extraction to
              cultivation. We are building systems that honor the intricate web of life-recognizing
              that the health of our economies is inseparable from the vitality of our soil, the
              strength of our communities, and the clarity of our individual purpose.
            </p>
          </div>
        </section>

        {/* Five Pillars Grid */}
        <section className="max-w-[1440px] mx-auto mb-32 md:mb-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
            {/* Nature */}
            <Link
              to="/nature"
              className="md:col-span-7 bg-surface-container-low rounded-xl p-8 md:p-12 hover:bg-surface-container transition-colors duration-500 group"
            >
              <div className="flex items-start justify-between mb-6 md:mb-8">
                <span className="material-symbols-outlined text-4xl text-primary">park</span>
                <span className="text-secondary font-headline italic">01</span>
              </div>
              <h3 className="font-headline text-2xl md:text-3xl text-primary mb-4">Nature</h3>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-lg">
                Restoring our fundamental connection to the Earth through regenerative practices and
                bio-mimetic design.
              </p>
            </Link>

            {/* Self */}
            <Link
              to="/self"
              className="md:col-span-5 bg-surface-container-lowest rounded-xl p-8 md:p-12 border border-outline-variant/10 hover:border-outline-variant/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-6 md:mb-8">
                <span className="material-symbols-outlined text-4xl text-secondary">
                  self_improvement
                </span>
                <span className="text-secondary font-headline italic">02</span>
              </div>
              <h3 className="font-headline text-2xl md:text-3xl text-primary mb-4">Self</h3>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                Cultivating inner landscape clarity and sovereign wellness as the foundation of all
                care.
              </p>
            </Link>

            {/* Tech */}
            <Link
              to="/tech"
              className="md:col-span-4 bg-tertiary-container rounded-xl p-8 md:p-12 group hover:opacity-95 transition-opacity"
            >
              <div className="flex items-start justify-between mb-6 md:mb-8">
                <span className="material-symbols-outlined text-4xl text-on-tertiary-container">
                  memory
                </span>
                <span className="text-on-tertiary-container font-headline italic">03</span>
              </div>
              <h3 className="font-headline text-2xl md:text-3xl text-on-tertiary mb-4">Tech</h3>
              <p className="text-on-tertiary-container text-base md:text-lg leading-relaxed">
                Developing tools that are silent, respectful, and inherently aligned with human
                biology.
              </p>
            </Link>

            {/* Community + Economy */}
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <Link
                to="/community"
                className="bg-secondary-fixed rounded-xl p-8 md:p-12 group hover:opacity-95 transition-opacity"
              >
                <div className="mb-6 md:mb-8">
                  <span className="material-symbols-outlined text-4xl text-on-secondary-fixed">
                    groups
                  </span>
                </div>
                <h3 className="font-headline text-xl md:text-2xl text-on-secondary-fixed mb-4">
                  Community
                </h3>
                <p className="text-on-secondary-fixed/80 text-sm md:text-base leading-relaxed">
                  Forging resilient bonds through shared stewardship and localized wisdom exchange.
                </p>
              </Link>

              <Link
                to="/economy"
                className="bg-primary rounded-xl p-8 md:p-12 group hover:bg-primary-container transition-colors"
              >
                <div className="mb-6 md:mb-8">
                  <span className="material-symbols-outlined text-4xl text-secondary-fixed">
                    account_balance
                  </span>
                </div>
                <h3 className="font-headline text-xl md:text-2xl text-white mb-4">Economy</h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  Transitioning toward circular models that value longevity and generational legacy.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto text-center mb-40 md:mb-60 px-4">
          <h2 className="font-headline text-3xl md:text-4xl text-primary mb-10 md:mb-12">
            Will you grow with us?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            {/* <button className="bg-primary hover:bg-primary-container text-white px-8 md:px-10 py-4 rounded-xl font-body font-semibold transition-all duration-300 flex items-center gap-3">
              Inquire for Membership
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button> */}
            <button className="text-primary hover:text-secondary px-8 md:px-10 py-4 font-body font-semibold transition-all duration-300 border-b border-transparent hover:border-secondary">
              <a href='#'> Read the Manifesto</a>
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
