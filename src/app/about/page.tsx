export default function About() {
  const stats = [
    { number: '10000+', label: 'Participants', color: 'bg-red-500' },
    { number: '25+', label: 'Sessions', color: 'bg-blue-600' },
    { number: '35+', label: 'Speakers', color: 'bg-green-600' },
    { number: '2', label: 'Days', color: 'bg-amber-400' },
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center">
          
          {/* Left - Image Grid */}
          <div className="relative lg:pr-10">
            <div className="grid grid-cols-12 gap-4">
              
              {/* Top left */}
              <div className="col-span-3 aspect-square bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl flex items-end justify-start p-4">
                <div className="w-12 h-12 bg-indigo-400 rounded-2xl opacity-50" />
              </div>

              {/* Top middle */}
              <div className="col-span-5 row-span-2 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl overflow-hidden shadow-lg relative">
                <div className="absolute top-4 left-4 w-3 h-3 bg-teal-400 rounded-full" />
                <div className="absolute top-8 left-4 w-3 h-3 bg-teal-400 rounded-full" />
                <div className="flex items-center justify-center h-full">
                  <div className="text-6xl">👤</div>
                </div>
              </div>

              {/* Top right */}
              <div className="col-span-4 row-span-2 bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl overflow-hidden shadow-lg relative">
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-blue-300 rounded-full" />
                <div className="absolute top-1/3 left-4 w-4 h-4 bg-blue-300 rounded-full" />
                <div className="flex items-center justify-center h-full">
                  <div className="text-7xl">👤</div>
                </div>
              </div>

              {/* Bottom left */}
              <div className="col-span-5 row-span-2 bg-gradient-to-br from-indigo-700 to-indigo-900 rounded-3xl overflow-hidden shadow-lg relative">
                <div className="absolute bottom-6 right-6 w-8 h-8 bg-indigo-400 rounded-xl opacity-50" />
                <div className="grid grid-cols-3 gap-1 absolute top-6 left-6">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 bg-indigo-400 rounded-full opacity-30"
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-7xl">👤</div>
                </div>
              </div>

              {/* Bottom middle */}
              <div className="col-span-4 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden shadow-lg relative">
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-gray-400 rounded-full" />
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-gray-400 rounded-full" />
                <div className="flex items-center justify-center h-full">
                  <div className="text-5xl">👤</div>
                </div>
              </div>

              {/* Bottom right */}
              <div className="col-span-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl overflow-hidden shadow-lg relative">
                <div className="flex items-center justify-center h-full">
                  <div className="text-5xl">👤</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-bold mb-6 text-sm shadow-lg">
                About GDGoC WOW
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Welcome to Google Developer Groups on Campus{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Wonder of Wonders
                </span>{' '}
                <span className="text-yellow-400">✨</span>
              </h2>

              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                GDGoC WoW is an extraordinary annual celebration that brings together the brightest minds from across
                our global developer community.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Join us for an incredible journey filled with learning, innovation, and networking opportunities that
                will inspire and empower you. No matter your skill level, background, or path, we're in this together —
                we're building more than just code — we're building the future!
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`${stat.color} text-white rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform`}
                >
                  <div className="text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm font-semibold opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
