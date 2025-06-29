'use client'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DecorativeCircle from "@/components/decorative-circle"
import Image from "next/image"

export default function BoardPage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/images/board-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
            The Driving Force Behind Our Mission
          </h1>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="relative py-16 px-4 bg-white">
        {/* Circles */}
        <DecorativeCircle className="top-4 left-[-30px] bg-blue-300" size={60} />
        <DecorativeCircle className="top-20 right-[-30px] bg-orange-300" size={60} />
        <DecorativeCircle className="bottom-20 right-[-30px] bg-red-300" size={60} />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">LEADERSHIP</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Together, our board members lead the strategy of our mission—to provide affordable, sustainable, and high-quality learning environments for students—ensuring that all students benefit from the right resources at the right time.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <div className="w-24 h-24 bg-white/30 rounded-full mb-4" />
              <h3 className="text-xl font-semibold">JONATHAN WOLF</h3>
              <p className="text-sm opacity-80 mb-2">CHIEF EXECUTIVE OFFICER</p>
              <p className="text-sm opacity-90">
                Our founder and executive director leads strategy, operations, and finance while supporting our charter school clients in delivering their mission to students and communities.
              </p>
            </div>
            <div className="bg-blue-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <div className="w-24 h-24 bg-white/30 rounded-full mb-4" />
              <h3 className="text-xl font-semibold">DAVID UMINSKY</h3>
              <p className="text-sm opacity-80 mb-2">BOARD CHAIR</p>
              <p className="text-sm opacity-90">
                A respected nonprofit leader and public education advocate, David has championed community-focused charter schools and helped expand equitable access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-[#e8f0f5] py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-10">OUR IMPACT</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <p className="text-4xl font-bold text-orange-500">10K+</p>
            <p className="text-gray-600">STUDENTS SERVED</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-500">1M+</p>
            <p className="text-gray-600">SQUARE FEET DEVELOPED</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-500">25+</p>
            <p className="text-gray-600">PROJECTS COMPLETED</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/3] bg-gray-300 rounded-lg" />
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">DREAM SCHOOLS</h3>
            <p className="text-gray-700 mb-4">
              The strength of Dream Schools, Inc. lies in its expertise, leadership, and deep belief in the power of education. Our board represents a diverse range of backgrounds—spanning nonprofit leadership, education, development, and community finance.
            </p>
            <p className="text-gray-700">
              By leveraging decades of experience across finance, real estate, and community work, Dream Schools ensures that students and families get the resources they need—where and when they need them most. Our leadership brings a fresh new approach to supporting public charter schools.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#2f4a5b] text-white text-center py-12 px-4">
        <h3 className="text-lg mb-2">SUPPORT OUR MISSION</h3>
        <p className="mb-4 text-sm max-w-2xl mx-auto">
          Dream Schools is a 501(c)(3) nonprofit organization. Your donation helps us continue to offer affordable, high-quality learning environments.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 text-white font-semibold rounded-full transition">
          DONATE TODAY
        </button>
      </section>

      {/* Final Quote */}
      <section
        className="bg-cover bg-center text-white text-center py-20 px-4"
        style={{ backgroundImage: "url('/images/board-quote-bg.jpg')" }}
      >
        <h3 className="text-2xl md:text-3xl font-bold max-w-3xl mx-auto leading-snug">
          Leaders Whose Expertise And Vision Shape The Future Of Equitable Education.
        </h3>
      </section>

      <Footer />
    </div>
  )
}
