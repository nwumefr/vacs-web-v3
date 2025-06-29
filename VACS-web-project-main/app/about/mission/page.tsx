import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GradientLine from "@/components/gradient-line"
import { Target, FileText, TrendingUp } from "lucide-react"
import HeroHeader from "@/components/hero-header"
import HeroHeader2 from "@/app/hero-header-2"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import DecorativeCircle from "@/components/decorative-circle"
import ServiceIcon from "@/components/service-icon"
import Link from "next/link"

export default function MissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroHeader2
        backgroundUrl="/mission/unsplash_Hg8fLXkdbmU.png"
        title="BUILDING SCHOOLS, STRENGTHENING COMMUNITIES 
<accent>ONE SCHOOL AT A TIME<accent>.
"
      />
      {/* <HeroHeader 
              src="/mission/unsplash_Hg8fLXkdbmU.png"
              alt="school buildings"
              headText="Our Mission"
              subtext="Explore our completed projects and see how we've helped charter schools across the country create inspiring
                  learning environments."/> */}
      {/* Mission Content */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">Mission Statement</h2>
             
              <p className="text-gray-600 mb-4">One school at a time~</p>
              <GradientLine c1="#5B8BA3" c2="#E67E45" />
              
              <div className="rounded-card p-8 flex gap-6" style={{ background: "#4A6B7C"}}>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white text-lg leading-relaxed">
                    Dream Schools exists to support public charter schools in meeting their facility needs by providing
                    access to affordable, sustainable, and high-quality learning environments that empower student
                    success.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4">Building schools, strengthening communities~</p>
              <GradientLine c1="#5B8BA3" c2="#E67E45" />
              <div className="rounded-card p-8 flex gap-6" style={{ background: "#4A6B7C" }}>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white text-lg leading-relaxed mb-4">
                    Founded in 2006, Dream Schools, Inc. is a 501(c)(3) nonprofit organization created to solve a
                    critical challenge in public education—helping charter schools access high-quality, affordable
                    facilities.
                  </p>
                  <p className="text-white text-lg leading-relaxed">
                    From day one, we understood that while visionary educators can spark transformational learning,
                    inadequate facilities often hinder that mission. Classrooms in church basements, converted
                    storefronts, or overcrowded rentals are far too familiar. That's where Dream Schools steps in.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                Dream Schools supports public charter schools in meeting their facility needs by providing access to
                affordable, sustainable, high-quality learning environments that empower student success.
              </p>
              <GradientLine c1="#5B8BA3" c2="#E67E45" />
              
              <div className="rounded-card p-8 flex gap-6" style={{ background: "#4A6B7C" }}>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white text-lg leading-relaxed mb-4">
                    We believe every student deserves a safe, welcoming, and purpose-built space to learn—and that every
                    educator deserves the freedom to focus on teaching, not construction management. That's why we
                    partner with mission-driven school leaders, funders, and community stakeholders to create facilities
                    that are more than just buildings.
                  </p>
                  <p className="text-white text-lg leading-relaxed mb-4">
                    They're launchpads for academic excellence and community renewal. Dream Schools offers customized
                    real estate development, project management, and lease-to-purchase solutions for charter schools
                    nationwide. We take on the early financial risk, manage complex development processes, and provide
                    100% financing so that schools can stay focused on students and not stress about square footage.
                  </p>
                  <p className="text-white text-lg leading-relaxed">
                    Over the years, we've helped countless schools grow from dream to reality—turning vacant lots and
                    empty buildings into vibrant learning centers. And while we're proud of the physical spaces we've
                    created, we're even prouder of the opportunities and futures we've helped build for students and
                    communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center py-12">
              <p className="text-xl text-gray-700 mb-2">At Dream Schools, we're not just building schools.</p>
              <p className="text-xl text-gray-700 mb-2">We're building equity.</p>
              <p className="text-xl text-gray-700 mb-2">We're building opportunity.</p>
              <p className="text-2xl font-bold text-orange-primary">We're building dreams.</p>
            </div>
          </div>
        </div>
      </section> */}
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
                  {/* </div> */}
                </div>
              </section>
      
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
      
              
              {/* 4. THE DREAM STRIP */}
              <section
                id="the-dream"
                className="py-24 text-white"
                style={{ background: "linear-gradient(90deg, #5f8399 0%, #7b9bb0 100%)" }}
              >
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <Image
                      src="/images/educational-environment.png"
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
                    <form action="#" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="First Name" className="bg-white rounded-lg px-4 py-3" />
                      <Input placeholder="Last Name" className="bg-white rounded-lg px-4 py-3" />
                      <Input placeholder="Phone Number" className="bg-white rounded-lg px-4 py-3" />
                      <Input placeholder="Organization" className="bg-white rounded-lg px-4 py-3" />
                      <Input placeholder="Email Address" className="md:col-span-2 bg-white rounded-lg px-4 py-3" />
                      <Textarea placeholder="Your Message" className="md:col-span-2 bg-white rounded-lg px-4 py-3" />
                      <Button
                        type="submit"
                        className="md:col-span-2 bg-[--clr-accent] text-white font-bold uppercase rounded-full w-full py-3"
                      >
                        Submit
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
            {/* </main> */}
      
      {/* </div> */}
      <Footer />
    </div>
  )
}
