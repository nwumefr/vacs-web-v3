'use client'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import { useState } from "react"
import GradientLine from "@/components/gradient-line"
const services = [
  {
    id: "real-estate",
    title: "Real Estate Development",
    description:
      "From concept to completion, we manage every phase of facility development—site selection, zoning, design, construction, and occupancy. Every project is tailored to your school’s educational model and vision.",
    image: "./services/unsplash_PlBsJ5MybGc.png",
  },
  {
    id: "project-management",
    title: "Project Management",
    description:
      "We serve as trusted owner’s reps to deliver your facility vision on time and on budget. We remove distractions so your leadership can focus on education.",
    image: "/images/service-pm.jpg",
  },
  {
    id: "renovations",
    title: "Renovations & Upgrades",
    description:
      "We transform outdated buildings into modern schools. From warehouses to big-box stores, we turn challenges into vibrant learning spaces.",
    image: "/images/service-reno.jpg",
  },
  {
    id: "financing",
    title: "Lease-to-Purchase Financing",
    description:
      "We offer 100% financing and lease-to-own pathways so you can grow without the upfront burden. Build equity over time and eventually own your space.",
    image: "/images/service-finance.jpg",
  },
]

export default function ServicesPage() {
  const [activeService, setActiveService] = useState("real-estate")
  const current = services.find((s) => s.id === activeService)

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center bg-cover bg-center" 
      style={{ backgroundImage: `url('/services/unsplash_80zZ1s24Nag.png')` }}>
        <div className="bg-black/40 absolute inset-0" />
        <div className="z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">WHAT WE DO</h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto">
            At Dream Schools, we believe that excellent facilities help create great opportunities.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 px-4 border-b">
        <h2 className="text-3xl font-bold text-center text-#5f8399 mb-6">OUR SERVICES</h2>
        <div className="flex flex-wrap justify-center gap-4" >
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                activeService === service.id
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-orange-100"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>
      </section>

      {/* Active Service Content */}
      {current && (
        <section className="bg-[#f5f7fa] py-12 px-4" 
        style={{ background: "#c1e3f7" }}>
          <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center max-w-6xl">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={current.image}
                alt={current.title}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4">{current.title}</h3>
              <GradientLine
              c1='#f4c8a4'
              c2='#e3a678'></GradientLine>
              <p className="text-gray-700 text-lg">{current.description}</p>
            </div>
          </div>
        </section>
      )}

      {/* Quote Section */}
      <section className=" text-white text-center py-12 px-4" style={{background:"linear-gradient(90deg,#f4c8a4 0%,#e3a678 100%)"}}>
        <p className="text-2xl mb-9 font-medium">
          We don't just build schools — we build the foundation for student success and community revitalization.
        </p>
      </section>

      <Footer />
    </div>
  )
}
