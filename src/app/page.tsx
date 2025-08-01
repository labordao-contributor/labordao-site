import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Navigation and Header */}
      <header className="relative min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-orange-900 px-8 py-6">
        {/* Top Navigation Bar */}
        <nav className="flex items-center justify-between">
          <Image
            src="/labordao-logo.png"
            alt="LaborDAO Logo"
            width={225} // Increased size by 25%
            height={225}
            priority
          />
        </nav>

        {/* Centered Hero Content */}
        <div className="flex flex-col items-center justify-center pt-12 text-center">
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-7xl">
            LaborDAO
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300 md:text-xl">
            Building public goods and on-chain tools to make the value of labor in Web3 visible, verifiable, and fairly compensated.
          </p>
          <a
            href="#projects"
            className="mt-8 rounded-full bg-orange-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-orange-500"
          >
            Explore Our Projects
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-8 py-20">
        {/* About Section */}
        <section id="about" className="text-center">
          <h2 className="text-4xl font-bold text-orange-500">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-400">
            The work of builders, community managers, and contributors is the true engine of Web3, but it&apos;s often undervalued and hard to prove. LaborDAO is a collective dedicated to creating open-source tools that empower individuals to own their professional identity and build a more equitable digital economy.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mt-24">
          <h2 className="text-center text-4xl font-bold text-orange-500">Projects</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* ChainCV Project Card */}
            <div className="rounded-xl bg-gray-800 p-8 shadow-2xl">
              <h3 className="text-2xl font-bold">ChainCV</h3>
              <p className="mt-2 text-gray-400">
                An on-chain resume generator that aggregates your fragmented Web3 activity into a single, verifiable profile. Make your governance, development, and community contributions legible.
              </p>
              <button
                disabled
                className="mt-6 cursor-not-allowed rounded-full bg-gray-600 px-6 py-2 font-semibold text-gray-400"
              >
                Coming Soon
              </button>
            </div>
            
            {/* Future Project Card */}
            <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-700 p-8">
              <p className="text-gray-500">More projects coming soon...</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} LaborDAO. Building in public.</p>
      </footer>
    </div>
  );
}