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
    <div className="flex flex-col min-h-screen bg-[#f5f6f8]">
      <Navbar />
      <div className="fade-in">
      {/* HERO/HEADER */}
      <section className="relative h-[420px] md:h-[520px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/mission/unsplash_Hg8fLXkdbmU.png')" }}>
        <div className="absolute inset-0 bg-[#5f8399] opacity-25"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-display font-bold tracking-wide mb-4">BUILDING SCHOOLS, STRENGTHENING COMMUNITIES<br />
            <span className="text-orange-400 text-3xl md:text-5xl block mt-2">ONE AT A TIME</span>
          </h1>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xl font-display font-bold mb-2 text-orange-500 tracking-widest">ABOUT US</h2>
            <p className="text-lg text-gray-700 mb-4">Dream Schools is a 501(c)(3) nonprofit helping charter schools access affordable, high-quality facilities that support student success and community transformation.</p>
            <div className="flex gap-4 mt-4">
              <Button className="bg-orange-400 text-white font-bold rounded-full px-6 py-2" asChild>
                <Link href="#impact">Our Impact</Link>
              </Button>
              <Button variant="outline" className="border-orange-400 text-orange-500 font-bold rounded-full px-6 py-2" asChild>
                <Link href="#story">Our Story</Link>
              </Button>
            </div>
          </div>
          <Image src="/mission/unsplash_bgQgAKagQB4.png" alt="School Building Exterior" width={600} height={400} className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* OUR IMPACT */}
      <section id="impact" className="py-12 px-4 bg-gradient-to-r from-[#f4c8a4] to-[#e3a678]">
        <div className="container mx-auto">
          <h3 className="text-center text-2xl font-display font-bold mb-10 text-gray-800">OUR IMPACT</h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
            <div className="bg-white rounded-2xl shadow-md px-8 py-8 text-center flex-1 min-w-[200px] border-t-8 border-orange-400 flex flex-col justify-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">10K+</div>
              <div className="text-gray-700 font-semibold">STUDENTS IMPACTED</div>
            </div>
            <div className="bg-white rounded-2xl shadow-md px-8 py-8 text-center flex-1 min-w-[200px] border-t-8 border-orange-400 flex flex-col justify-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">1M+</div>
              <div className="text-gray-700 font-semibold">SQ FT BUILT</div>
            </div>
            <div className="bg-white rounded-2xl shadow-md px-8 py-8 text-center flex-1 min-w-[200px] border-t-8 border-orange-400 flex flex-col justify-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">25+</div>
              <div className="text-gray-700 font-semibold">PROJECTS COMPLETED</div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section id="story" className="bg-white py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image src="/mission/unsplash_DJOLSUP2Uqg.png" alt="Construction Site" width={600} height={400} className="rounded-lg shadow-lg order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <h3 className="text-xl font-display font-bold mb-2 text-blue-500 tracking-widest">OUR STORY</h3>
            <p className="text-lg text-gray-700 mb-4">Since our founding, Dream Schools has partnered with communities to create inspiring, functional, and sustainable learning environments. Our team brings decades of experience in education, real estate, and construction to every project.</p>
            <p className="text-gray-600"></p>
          </div>
        </div>
      </section>

      {/* BOLD STATEMENT */}
      <section className="py-12 px-4 bg-[#2b4c7a] text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">AT DREAM SCHOOLS, WE'RE NOT JUST BUILDING SCHOOLS.<br />WE'RE BUILDING</h2>
          <div className="text-3xl md:text-5xl font-display font-extrabold text-orange-300 tracking-wider mb-2">EQUITY, OPPORTUNITY, & DREAMS</div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-display font-bold mb-2 text-orange-500 tracking-widest">OUR MISSION</h3>
            <p className="text-lg text-gray-700 mb-4">Our mission is to empower charter schools by providing access to affordable, high-quality facilities. We are committed to equity, opportunity, and the belief that every child deserves a place to dream, learn, and succeed.</p>
            <p className="text-gray-600">We believe every student deserves a safe, welcoming, and purpose-built space to learn—and that every educator deserves the freedom to focus on teaching, not construction management. That's why we partner with mission-driven school leaders, funders, and community stakeholders to create facilities that are more than just buildings. 

They're launchpads for academic excellence and community renewal. Dream Schools offers customized real estate development, project management, and lease-to-purchase solutions for charter schools nationwide. We take on the early financial risk, manage complex development processes, and provide 100% financing so that schools can stay focused on students and not stress about square footage. 

Over the years, we've helped countless schools grow from dream to reality—turning vacant lots and empty buildings into vibrant learning centers. Along the way, we've seen firsthand how excellent school facilities can breathe new life into neighborhoods and inspire communities.</p>
          </div>
          <div className="flex flex-col gap-6">
            <Image src="/mission/unsplash_RpHVdsmPYc0.png" alt="Students in Classroom" width={600} height={200} className="rounded-lg shadow-lg" />
            <Image src="/mission/unsplash_VLPUm5wP5Z0.png" alt="Science Lab" width={600} height={200} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  )
}
