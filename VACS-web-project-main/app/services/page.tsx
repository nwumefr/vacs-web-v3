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
      "From concept to completion, we manage every phase of facility development—site selection, zoning, design, construction, and occupancy. Every project is tailored to your school's educational model and vision.",
    image: "./services/unsplash_PlBsJ5MybGc.png",
  },
  {
    id: "project-management",
    title: "Project Management",
    description:
      "We serve as trusted owner's reps to deliver your facility vision on time and on budget. We remove distractions so your leadership can focus on education.",
    image: "/services/interior-school-classroom-wooden-floor-desks-concept-education-learning-3d-render.jpg",
  },
  {
    id: "renovations",
    title: "Renovations & Upgrades",
    description:
      "We transform outdated buildings into modern schools. From warehouses to big-box stores, we turn challenges into vibrant learning spaces.",
    image: "/services/large-modern-office-building.jpg",
  },
  {
    id: "financing",
    title: "Lease-to-Purchase Financing",
    description:
      "We offer 100% financing and lease-to-own pathways so you can grow without the upfront burden. Build equity over time and eventually own your space.",
    image: "/services/School Design 2 (1).jpg",
  },
]

export default function ServicesPage() {
  const [activeService, setActiveService] = useState("real-estate")
  const current = services.find((s) => s.id === activeService)

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#f5f6f8]">
      <Navbar />
      <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-[260px] md:h-[340px] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: `url('/services/unsplash_80zZ1s24Nag.png')` }}>
        <div className="absolute inset-0 bg-[#5f8399] opacity-25" />
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-4">
          <div className="bg-[#3d5e72]/90 rounded-xl p-6 max-w-xl mx-auto shadow-lg">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white">WHAT WE DO</h1>
            <p className="text-white text-base md:text-lg">
              At Dream Schools, we believe that excellent facilities help create great opportunities.
            </p>
          </div>
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
                alt={
                  current.id === 'real-estate' ? 'Construction Site' :
                  current.id === 'project-management' ? 'Project Management Meeting' :
                  current.id === 'renovations' ? 'School Renovation' :
                  current.id === 'financing' ? 'Lease to Purchase Financing' :
                  'Service Image'
                }
                width={320}
                height={220}
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
      </div>
      <Footer />
    </div>
  )
}
