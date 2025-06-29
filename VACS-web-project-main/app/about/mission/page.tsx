// Rebuilding the Figma site layout based on provided image and source code
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function MissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center bg-cover bg-center text-white text-center px-4 py-24" style={{ backgroundColor: "#5f8399" }}>
        <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-4">
          BUILDING SCHOOLS,
          <br />
          STRENGTHENING COMMUNITIES
        </h1>
        <p className="text-xl md:text-2xl text-orange-300 font-bold uppercase">
          One at a time
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex gap-4 mb-4">
              <Button className="bg-orange-400 text-white px-4 py-2 rounded-full">Our Story</Button>
              <Button className="bg-gray-300 text-black px-4 py-2 rounded-full">Our Mission</Button>
            </div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600">
              Dream Schools supports public charter schools in meeting their facility needs by providing access to affordable,
              sustainable, and high-quality learning environments that empower student success.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <div className="w-full h-[280px] bg-gray-200" />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-orange-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8 text-orange-600">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-4xl mx-auto">
          <div>
            <p className="text-4xl font-bold text-orange-500">10K+</p>
            <p className="text-gray-700">Students Served</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-500">1M+</p>
            <p className="text-gray-700">Square Feet Developed</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-500">25+</p>
            <p className="text-gray-700">Projects Completed</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-md">
            <div className="w-full h-[280px] bg-gray-200" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700">
              Founded in 2006, Dream Schools was created to solve a critical challenge in public education—helping charter
              schools access affordable facilities. We’ve grown from helping small schools to transforming communities.
            </p>
          </div>
        </div>
      </section>

      {/* Equity Banner */}
      <section className="bg-[#26495C] text-white text-center py-16 px-4">
        <p className="text-lg mb-2">AT DREAM SCHOOLS, WE’RE NOT JUST BUILDING SCHOOLS.</p>
        <p className="text-2xl md:text-4xl font-bold">WE’RE BUILDING</p>
        <p className="text-3xl md:text-5xl font-bold text-orange-400 mt-2">EQUITY, OPPORTUNITY, & DREAMS</p>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              Dream Schools turns visionary education into reality by developing affordable, sustainable, and high-quality
              facilities.
            </p>
            <p className="text-gray-600">
              We handle the complexities of real estate and construction so school leaders can focus on students.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="w-full h-[180px] bg-gray-200 rounded-xl shadow-md" />
            <div className="w-full h-[180px] bg-gray-200 rounded-xl shadow-md" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
