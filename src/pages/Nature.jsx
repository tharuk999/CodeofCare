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
              Nature Code of <br />
              <span className="not-italic opacity-90">Care.</span>
            </h1>
          </div>
        </header>

        {/* Main Narrative Section 1 */}
        <section className="editorial-spacing grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start mb-40 md:mb-56">
          <div className="lg:col-span-7">
            <p className="font-headline md:text-xl lg:text-2xl text-primary leading-relaxed font-light">
              We built systems that reshaped the world in years, a technology so powerful and sought after that everyone wanted to get their hands on it, but we didn’t account for the effects it would have, especially on the environment. The advent of artificial intelligence by OpenAI shocked the world when it first emerged, and it put everything else into a downward spiral. Since then, company after company has adopted AI in some kind of form, and those that are quickly competing to be the best are developing the strongest models available. But what did we forget? We forgot the amount of resources that it uses to run these artificial intelligence models on such a large scale with millions of users around the world. The effects of artificial intelligence have required substantial water usage to cool massive data centers due to their constant runtime, but also the amount of natural resources used just to create those data centers and with the computers used to power these models. Alongside these models, as they become older, they eventually become e-waste, leaving behind the resources used to create these machines, just to use even more resources to create newer ones. These resources pertain to just running machines, and this isn’t even the full story, energy consumption is a huge factor when it comes to training these models on a large data set so they can learn, make predictions, and generate messages. With this in mind, the world’s energy consumption has increased to another level within the past few years, and will continue to rise as more and more companies adopt artificial intelligence, and those that use it consume more resources for it.

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
        <section className="editorial-spacing flex flex-col">
          <div className="">
            <p className="font-headline text-center text-xl md:text-2xl lg:text-3xl text-primary leading-relaxed font-light">
              To you who’s reading this far in the future, I want you to say, what has artificial intelligence come to? Is it still being heavily pursued in the world? If it is, how powerful has it become? And how resource-intensive is it, and have we found a way to keep it all under control? We hope that sometime in the future, you have transformed the dominant technologies of today like artificial intelligence, into something that is helpful and sustainable, following the hopeful path of a solarpunk society, in a world where we could combine renewable energy to make our resource-intensive technologies more sustainable, making something like artificial intelligence be used for small tasks and automation, like identifying plants and farming tactics, rather than being widely available for anyone to use for anything, rather than a world headed towards a cyberpunk philosophy.
            </p>
          </div>
          <div className='mt-30 items-end'>
            <p className='text-xl font-headline font-light'>Sources: </p>
            <a href='https://news.mit.edu/2025/explained-generative-ai-environmental-impact-0117' className='editorial-spacing font-headline font-light'>https://news.mit.edu/2025/explained-generative-ai-environmental-impact-0117</a><br/>
            <a href='https://www.unep.org/news-and-stories/story/ai-has-environmental-problem-heres-what-world-can-do-about' className='editorial-spacing font-headline font-light'>https://www.unep.org/news-and-stories/story/ai-has-environmental-problem-heres-what-world-can-do-about</a><br/>
            <a href='https://earth.org/the-green-dilemma-can-ai-fulfil-its-potential-without-harming-the-environment/' className='editorial-spacing font-headline font-light'>https://earth.org/the-green-dilemma-can-ai-fulfil-its-potential-without-harming-the-environment/</a><br/>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
