import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BoardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F6F8]">
      <Navbar />
      {/* HERO */}
      <section className="relative h-[320px] md:h-[400px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/board/unsplash_5pU5P9NngVo.png')" }}>
        <div className="absolute inset-0 bg-[#E67E45] opacity-50"></div>
        <div className="relative z-10 text-center w-full">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 drop-shadow-lg">The Driving Force<br />Behind Our Mission</h1>
        </div>
      </section>

      {/* Decorative Circles */}
      <div className="hidden md:block">
        <div className="absolute left-0 top-[420px] w-24 h-24 bg-[#F4C8A4] opacity-60 rounded-full -z-1"></div>
        <div className="absolute right-0 top-[500px] w-20 h-20 bg-[#E3A678] opacity-60 rounded-full -z-1"></div>
        <div className="absolute left-0 top-[900px] w-20 h-20 bg-[#E3A678] opacity-60 rounded-full -z-1"></div>
        <div className="absolute right-0 top-[1000px] w-24 h-24 bg-[#F4C8A4] opacity-60 rounded-full -z-1"></div>
      </div>

      {/* Gradient background wrapper for impact to support */}
      <div className="bg-gradient-to-b from-[#4a6ba1] to-[#1e3552]">
        {/* OUR IMPACT */}
        <section className="py-12 px-4 text-white text-center">
          <div className="container mx-auto">
            <h2 className="text-xl font-display font-bold tracking-[0.2em] mb-10">OUR IMPACT</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
              <div className="flex-1 min-w-[180px] bg-white/10 rounded-2xl shadow-md px-8 py-8 text-center border-t-8 border-orange-400 flex flex-col justify-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">10K+</div>
                <div className="font-semibold">STUDENTS SERVED</div>
              </div>
              <div className="flex-1 min-w-[180px] bg-white/10 rounded-2xl shadow-md px-8 py-8 text-center border-t-8 border-orange-400 flex flex-col justify-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">1M+</div>
                <div className="font-semibold">SQ FT DEVELOPED</div>
              </div>
              <div className="flex-1 min-w-[180px] bg-white/10 rounded-2xl shadow-md px-8 py-8 text-center border-t-8 border-orange-400 flex flex-col justify-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">25+</div>
                <div className="font-semibold">PROJECTS COMPLETED</div>
              </div>
            </div>
          </div>
        </section>

        {/* DREAM SCHOOLS */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">DREAM SCHOOLS</h3>
            <div className="max-w-4xl mx-auto bg-white/20 rounded-xl p-8 shadow-lg flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-full md:w-[320px] flex justify-center mb-6 md:mb-0">
                <Image src="/board/unsplash_uOhBxB23Wao.png" alt="Dream Schools" width={320} height={200} className="rounded-lg shadow-xl object-cover" />
              </div>
              <div className="text-white text-base md:text-lg">
                <p className="mb-4">The strength of Dream Schools, Inc. lies in the expertise, passion, and dedication of its Board of Directors. Our board comprises professionals from diverse backgrounds and professions, united by a shared commitment to educational equity and community development.</p>
                <p>Representing fields such as education, finance, law, real estate, construction, public policy, and nonprofit leadership, our board brings various perspectives and skill sets to guide our strategic direction and ensure strong governance. Their collective experience allows Dream Schools to navigate complex challenges and remain innovative in our approach to supporting public charter schools.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SUPPORT OUR MISSION */}
        <section className="py-12 text-center">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-display font-bold text-white mb-4">SUPPORT OUR MISSION</h3>
            <p className="text-white mb-6 max-w-2xl mx-auto">Dream Schools is a 501(c)(3) nonprofit organization. Your donation is tax-deductible to the extent allowed by law.</p>
            <button className="bg-[#E67E45] hover:bg-[#d46c2d] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition">DONATE TODAY</button>
          </div>
        </section>
      </div>

      {/* QUOTE OVERLAY */}
      <section 
        className="relative py-24 min-h-[320px] text-center border-t border-[#d4e0e8] bg-cover bg-center"
        style={{ backgroundImage: "url('/board/unsplash_IpRr6RGAD_A.png')" }}
      >
        <div className="absolute inset-0 bg-[#2b4c7a] opacity-60 pointer-events-none"></div>
        <div className="relative container mx-auto px-4 flex flex-col justify-center h-full">
          <h4 className="text-white text-3xl md:text-4xl font-display font-semibold mb-2">Leaders Whose Expertise And Vision<br />Shape The Future Of Equitable Education</h4>
        </div>
      </section>

      <Footer />
    </div>
  )
}
