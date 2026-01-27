'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Speaker {
  id: number
  name: string
  title: string
  company: string
  image: string
  bio?: string
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Kartik Padmanabhan',
    title: 'Developer Relations',
    company: 'Google India',
    image: '/images/image.png',
    bio: 'Leading developer advocacy at Google India',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    title: 'Senior Developer Advocate',
    company: 'Google',
    image: '/images/image.png',
    bio: 'Passionate about building communities',
  },
  {
    id: 3,
    name: 'Arun Kumar',
    title: 'Product Manager',
    company: 'Google Cloud',
    image: '/images/image.png',
    bio: 'Building the future of cloud technology',
  },
]

export default function Speaker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? speakers.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === speakers.length - 1 ? 0 : prev + 1))
  }

  const currentSpeaker = speakers[currentIndex]

  return (
    <section id="speaker" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Sponsors Card */}
          <div className="flex flex-col gap-6">
            <div className="bg-yellow-100 rounded-2xl p-8 border-2 border-yellow-400 min-h-80 flex flex-col justify-between">
              <div>
                <p className="text-gray-700 font-semibold mb-4">Diamond sponsor</p>
                <p className="text-gray-600 text-2xl font-bold mb-8">eightfold.ai</p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold mb-4">Gold sponsor</p>
                <p className="text-gray-600 text-2xl font-bold mb-8">FlutterFlow</p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">Bronze sponsor</p>
                <p className="text-gray-400 text-sm mt-2">Coming soon...</p>
              </div>
            </div>
          </div>

          {/* Right - Speaker Carousel */}
          <div className="flex flex-col gap-6">
            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={goToPrevious}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold transition-colors flex items-center gap-2"
              >
                <ChevronLeft size={20} />
                Previous Speaker
              </button>
              <button
                onClick={goToNext}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold transition-colors flex items-center gap-2 ml-auto"
              >
                Next Speaker
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Speaker Card */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50">
                <div className="flex items-center justify-center h-full">
                  <div className="text-6xl opacity-20">🎤</div>
                </div>
              </div>

              <div className="relative h-full flex flex-col justify-end p-6 bg-gradient-to-t from-black/50 to-transparent">
                <div className="bg-red-600 text-white p-4 rounded-lg">
                  <h3 className="text-2xl font-bold">{currentSpeaker.name}</h3>
                  <p className="text-sm mt-1">{currentSpeaker.title}, {currentSpeaker.company}</p>
                </div>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex gap-2 justify-center">
              {speakers.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
