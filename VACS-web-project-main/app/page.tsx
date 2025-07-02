'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import Building from "lucide-react/dist/esm/icons/building"
import BookOpen from "lucide-react/dist/esm/icons/book-open"
import Home from "lucide-react/dist/esm/icons/home"
import Link from "next/link"
import { useState } from "react"

// Helper component for decorative circles
const DecorativeCircle = ({ className, size, opacity }: { className: string; size: number; opacity: number }) => (
  <div
    className={`absolute rounded-full ${className}`}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      opacity: opacity,
      zIndex: 0,
    }}
  />
)

// Icon resolver component to fix recursion error
const ServiceIcon = ({ name, ...props }: { name: string; [key: string]: any }) => {
  switch (name) {
    case "building":
      return <Building {...props} />
    case "book-open":
      return <BookOpen {...props} />
    // case "home":
    //   return <Home {...props} />
    default:
      return null
  }
}

export default function Home() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    organization: "",
    email: "",
    message: "",
  })

  // Handle form input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Handle form submission with mailto
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Construct email body
    const emailBody = `
New Contact Form Submission from VACS Website

Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}
Organization: ${formData.organization}
Email: ${formData.email}

Message:
${formData.message}

---
This message was sent from the VACS website contact form.
    `.trim()

    // Construct mailto URL
    const mailtoUrl = `mailto:chibuikenwume@gmail.com?subject=New Contact Form Submission - ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(emailBody)}`
    
    // Open email client
    window.open(mailtoUrl, '_blank')
    
    // Optional: Clear form after submission
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      organization: "",
      email: "",
      message: "",
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />

      <main id="main" className="fade-in">
        {/* 1. HERO */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/home/unsplash_GDokEYnOfnE.png')" }}
        >
          <div className="absolute inset-0 bg-[--clr-primary] opacity-30"></div>
          <div className="relative container mx-auto px-4 z-10">
            <div
              className="bg-primary/70 text-white p-12 rounded-[24px] max-w-lg"
              style={{ background: "rgba(43,76,122,0.78)" }}
            >
              <h1 className="text-[clamp(2rem,6vw,3.25rem)] leading-[1.15] font-display mb-6">
                Building <span className="text-[--clr-accent]">dreams</span>, one school at a time
              </h1>
              <div className="w-[72px] h-[4px] bg-[--clr-accent] mb-6"></div>
              <p className="font-body text-sm mb-8">
                Full Project Management • 100% Financing • Lease-to-Own Options
              </p>
              <Button
                asChild
                className="bg-[--clr-accent] text-white font-bold uppercase rounded-full px-8 py-6 hover:bg-orange-600"
              >
                <Link href="/about/mission">Our Mission</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 2. WHY DREAM SCHOOLS? */}
        <section
          id="why-us"
          className="py-24"
          style={{ background: "linear-gradient(90deg,#f4c8a4 0%,#e3a678 100%)" }}
        >
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-[32px] p-12 lg:p-16 grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <p className="font-display italic text-xl mb-4">Why Choose Us?</p>
                <h2 className="text-4xl lg:text-5xl font-display mb-8">
                  Because every student deserves a place to dream, grow, and thrive.
                </h2>
                <p className="mb-6">
                  Dream Schools turns visionary education into reality by developing affordable, sustainable, and
                  high-quality facilities.
                </p>
                <p>
                  We handle the complexities of real estate and construction so that school leaders can stay focused on
                  what matters most: their students.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="">
                  <Image
                    src="/home/unsplash_2s8WnAoNwR4.png"
                    alt="Students engaged in collaborative learning"
                    width={600}
                    height={400}
                    // className="w-full h-full object-cover rounded-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES GRID */}
        <section id="services" className="relative py-24 bg-gray-50 overflow-hidden">
          <DecorativeCircle className="bg-tint-blue -top-20 -left-40" size={320} opacity={0.12} />
          <DecorativeCircle className="bg-tint-peach -bottom-20 -right-40" size={280} opacity={0.12} />
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl lg:text-5xl font-display">Our Services</h2>
              <p className="mt-4 text-lg">
                From concept to completion, we build the spaces where students succeed.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {[
                {
                  title: "Facility Design",
                  description:
                    "We design and build charter school facilities from the ground up or renovate existing structures, always tailored to your educational mission.",
                  icon: "building",
                  color: "#2b4c7a",
                  image: "/home/unsplash_cXUOQWdRV4I.png",
                },
                {
                  title: "Educational Environment",
                  description:
                    "We believe learning environments should reflect and support the needs of students and educators. Every project is driven by purpose and equity.",
                  icon: "book-open",
                  color: "#4a6ba1",
                  image: "/home/unsplash_LvK8VKcrRjA.png",
                },
                {
                  title: "Real Estate Development",
                  description:
                    "We provide comprehensive real estate development services, guiding charter schools through every stage of the process.",
                  icon: "home",
                  color: "#e67a7c",
                  image: "/home/unsplash_80zZ1s24Nag.png",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col h-full rounded-2xl shadow-md overflow-hidden border-4 bg-white"
                  style={{ borderColor: service.color }}
                >
                  <div className="p-8" style={{ color: service.color }}>
                    <ServiceIcon name={service.icon} size={56} className="mb-6" />
                    <h3 className="text-2xl font-display mb-4">{service.title}</h3>
                    <p className="text-gray-600 flex-grow">{service.description}</p>
                  </div>
                  <div className="mt-auto">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. THE DREAM STRIP */}
        <section
          id="the-dream"
          className="py-24 text-white"
          style={{ background: "linear-gradient(90deg, #2b4c7a 0%, #4a6ba1 100%)" }}
        >
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/home/unsplash_8LITuYkZRIo.png"
                alt="Modern school classroom with flexible seating"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-display">
                <span className="text-[--clr-accent]">The Dream:</span> More than just a building.
              </h2>
              <p className="my-6 text-lg">
                We believe learning environments should reflect and support the unique needs of students and educators.
                Every project is driven by purpose and equity.
              </p>
              <Button
                asChild
                className="bg-[--clr-accent] text-white font-bold uppercase rounded-full px-8 py-6 hover:bg-orange-600"
              >
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 5. CONTACT */}
        <section id="contact" className="py-24 bg-gray-100">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
            <div className="bg-[--clr-primary] text-white p-12 rounded-2xl">
              <h2 className="text-5xl lg:text-6xl font-display">
                <span className="text-[--clr-accent]">LET'S</span> CHAT!
              </h2>
              <div className="w-[120px] h-[4px] bg-[--clr-accent] my-8"></div>
              <p>
                Ready to build the future? Reach out to our team to learn how we can help your charter school create
                the perfect learning environment.
              </p>
            </div>
            <div className="bg-[--clr-primary] p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-white rounded-lg px-4 py-3" 
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-white rounded-lg px-4 py-3" 
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                />
                <Input 
                  placeholder="Phone Number" 
                  className="bg-white rounded-lg px-4 py-3" 
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
                <Input 
                  placeholder="Organization" 
                  className="bg-white rounded-lg px-4 py-3" 
                  value={formData.organization}
                  onChange={(e) => handleInputChange('organization', e.target.value)}
                  required
                />
                <Input 
                  placeholder="Email Address" 
                  className="md:col-span-2 bg-white rounded-lg px-4 py-3" 
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
                <Textarea 
                  placeholder="Your Message" 
                  className="md:col-span-2 bg-white rounded-lg px-4 py-3" 
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="md:col-span-2 bg-[--clr-accent] text-white font-bold uppercase rounded-full w-full py-3"
                >
                  Send Email
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* 6. QUOTE OVERLAY */}
        <section
          className="relative py-32 bg-cover bg-center text-white text-center"
          style={{ backgroundImage: "url('/home/unsplash_zFSo6bnZJTw.png')" }}
        >
          <div className="absolute inset-0 bg-[--clr-primary] opacity-60"></div>
          <div className="relative container mx-auto px-4">
            <p className="text-3xl md:text-4xl lg:text-5xl font-display max-w-5xl mx-auto leading-snug">
              We don't just build <span className="text-[--clr-accent]">schools</span>, we build the foundation for
              student success and community <span className="text-[--clr-accent]">revitalization</span>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
