import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Users } from "lucide-react"
import HeroHeader from "@/components/hero-header"
export default function BoardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroHeader 
                    src="/images/Pictures/School Design.jpg"
                    alt="school buildings"
                    headText="The Board"
                    subtext="Explore our completed projects and see how we've helped charter schools across the country create inspiring
                        learning environments."/>
      {/* Board Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Board of Directors</h1>
              <p className="text-xl text-gray-600">
                The driving force behind our mission—leaders whose expertise and vision shape the future of equitable
                education.
              </p>
            </div>

            {/* Main Board Description Box */}
            <div
              className="rounded-card p-8 md:p-12 mb-12 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #5B8BA3 0%, #4A7B8C 100%)" }}
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <p className="mb-6 text-lg leading-relaxed text-white font-medium">
                    The strength of Dream Schools, Inc. lies in the expertise, passion, and dedication of its Board of
                    Directors. Our board comprises professionals from diverse backgrounds and professions, united by a
                    shared commitment to educational equity and community development.
                  </p>
                  <p className="text-lg leading-relaxed text-white font-medium">
                    Representing fields such as education, finance, law, real estate, construction, public policy, and
                    nonprofit leadership, our board brings various perspectives and skill sets to guide our strategic
                    direction and ensure strong governance. Their collective experience allows Dream Schools to navigate
                    complex challenges and remain innovative in our approach to supporting public charter schools.
                  </p>
                </div>
              </div>
            </div>

            {/* Stewards Statement */}
            <div className="text-center mb-16">
              <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Together, our board members serve as stewards of our mission—to provide affordable, sustainable, and
                high-quality learning environments for students—ensuring that every decision supports the long-term
                success of the schools and communities we serve.
              </p>
            </div>

            {/* Our Impact */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-blue-header">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-card shadow-sm text-center">
                  <div className="text-4xl font-bold text-orange-primary mb-2">1M+</div>
                  <div className="text-gray-700">Square feet of learning space</div>
                </div>
                <div className="bg-white p-6 rounded-card shadow-sm text-center">
                  <div className="text-4xl font-bold text-orange-primary mb-2">10,000+</div>
                  <div className="text-gray-700">Students served</div>
                </div>
                <div className="bg-white p-6 rounded-card shadow-sm text-center">
                  <div className="text-4xl font-bold text-orange-primary mb-2">100s</div>
                  <div className="text-gray-700">Jobs created</div>
                </div>
              </div>
            </div>

            {/* Support Our Mission */}
            <div className="bg-white rounded-card p-8 text-center">
              <h2 className="text-2xl font-semibold mb-6 text-blue-header">Support Our Mission</h2>
              <p className="text-gray-700 mb-6">
                Dream Schools is a 501(c)(3) nonprofit organization. Your donation is tax-deductible to the extent
                allowed by law.
              </p>
              <button
                className="px-8 py-3 text-white font-medium rounded-card"
                style={{ background: "linear-gradient(45deg, #E67E45, #F4A574)" }}
              >
                Donate Today
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
