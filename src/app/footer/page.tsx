'use client'

import { Github, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, Sparkles, Send, Calendar, Users } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white pt-20 pb-8 mt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
        {/* Fixed the SVG data URL */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Animated Wave/Tide Top Border */}
      <div className="absolute top-0 left-0 w-full h-12 overflow-hidden">
        <div
          className="absolute -top-12 w-[200%] h-24"
          style={{
            transform: `translateX(${scrollY * -0.1}px)`,
          }}
        >
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="absolute top-0 left-0 w-full h-full"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              className="fill-emerald-500/20"
            />
          </svg>

          {/* Second wave for depth */}
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="absolute top-2 left-0 w-full h-full opacity-60"
            style={{
              transform: `translateX(${scrollY * -0.15}px)`,
            }}
          >
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              className="fill-teal-500/30"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-400 text-gray-900 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Sparkles size={16} />
            Google Developer Groups
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              GDGC DYPCOE
            </span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Building the future of technology through community, innovation, and continuous learning at Dr. D. Y. Patil College of Engineering, Pune.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">

          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Users size={20} className="text-emerald-400" />
              About GDGC
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Google Developer Groups on Campus - DYPCOE is a student-led community focused on learning and sharing knowledge about Google technologies. Join us in shaping the future of tech!
            </p>
            <div className="flex items-start gap-3 text-gray-400 text-sm">
              <MapPin size={18} className="mt-1 flex-shrink-0 text-emerald-400" />
              <span>Dr. D. Y. Patil College of Engineering, Pune</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Events', 'Team', 'Projects', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-emerald-400 transition-all duration-300 text-sm hover:translate-x-2 inline-block group"
                  >
                    <span className="group-hover:before:content-['→'] group-hover:before:mr-2 transition-all duration-300">
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:gdgc@dypcoe.ac.in"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center gap-3 group"
                >
                  <Mail size={16} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                  gdgc@dypcoe.ac.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+911234567890"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center gap-3 group"
                >
                  <Phone size={16} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                  +91 12345 67890
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">Get the latest updates on events and tech news.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
              />
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-lg transition-colors">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com"
              className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>

            <a
              href="https://instagram.com"
              className="bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>

            <a
              href="https://linkedin.com"
              className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="https://twitter.com"
              className="bg-sky-500 hover:bg-sky-600 text-white p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/25"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-300 font-medium mb-3">
            © 2024 GDGC DYPCOE. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Google Developer Groups on Campus is a Google-supported initiative by students for students.
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-teal-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
    </footer>
  )
}