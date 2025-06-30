import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BoardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f6f8]">
      <Navbar />
      <div className="fade-in">
      {/* HERO/HEADER */}
      <section className="relative h-[260px] md:h-[340px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/Pictures/teacher-students-walking-around-school-campus-stock-photo.jpg')" }}>
        <div className="absolute inset-0 bg-[#5f8399] opacity-25"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide mb-4">The Driving Force<br />Behind Our Mission</h1>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-white py-12 px-4 relative overflow-x-hidden">
        <div className="container mx-auto">
          <h2 className="text-center text-xl font-bold mb-2 text-[#5f8399] tracking-widest">LEADERSHIP</h2>
          <p className="text-center max-w-2xl mx-auto text-gray-700 mb-10">Together, our board members serve as stewards of our mission—to provide affordable, sustainable, and high-quality learning environments for students—ensuring that every decision supports the long-term success of the schools and communities we serve.</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {/* Board Member 1 */}
            <div className="bg-[#5f8399] rounded-xl p-8 flex-1 flex flex-col items-center text-white shadow-lg">
              <div className="w-20 h-20 rounded-full bg-white mb-4 flex items-center justify-center overflow-hidden">
                {/* Replace with actual image if available */}
                <Image src="/images/board-chair-david.png" alt="Board Chair Portrait" width={80} height={80} className="object-cover rounded-full" />
              </div>
              <div className="font-bold text-lg mb-1 tracking-wide">JONATHAN WOLF</div>
              <div className="uppercase text-xs mb-3 tracking-widest">Board Secretary (EX OFFICIO)</div>
              <p className="text-xs text-white/90 text-center bg-white/10 p-2 rounded">Jonathan brings over 20 years of experience in nonprofit leadership and education. His vision and commitment drive our mission forward every day.</p>
            </div>
            {/* Board Member 2 */}
            <div className="bg-[#5f8399] rounded-xl p-8 flex-1 flex flex-col items-center text-white shadow-lg">
              <div className="w-20 h-20 rounded-full bg-white mb-4 flex items-center justify-center overflow-hidden">
                {/* Replace with actual image if available */}
                <Image src="/images/ceo-jonathan.png" alt="Board Secretary Portrait" width={80} height={80} className="object-cover rounded-full" />
              </div>
              <div className="font-bold text-lg mb-1 tracking-wide">DAVID UMINSKY</div>
              <div className="uppercase text-xs mb-3 tracking-widest">Board Chair</div>
              <p className="text-xs text-white/90 text-center bg-white/10 p-2 rounded">David is a seasoned leader in real estate and finance, dedicated to ensuring every child has access to a quality learning environment.</p>
            </div>
          </div>
        </div>
        {/* Decorative circles */}
        <div className="hidden md:block absolute left-0 top-1/3 w-16 h-16 bg-[#eaf1f6] rounded-full opacity-60 -z-10"></div>
        <div className="hidden md:block absolute right-0 top-1/2 w-20 h-20 bg-[#f4c8a4] rounded-full opacity-60 -z-10"></div>
        <div className="hidden md:block absolute right-0 bottom-0 w-16 h-16 bg-[#e3a678] rounded-full opacity-60 -z-10"></div>
      </section>

      {/* OUR IMPACT */}
      <section className="py-12 px-4 bg-[#5f8399] text-white">
        <div className="container mx-auto">
          <h3 className="text-center text-xl font-bold mb-8 tracking-widest">OUR IMPACT</h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="flex-1 text-center">
              <div className="text-3xl font-bold text-orange-300 mb-2">10K+</div>
              <div className="font-semibold">STUDENTS SERVED</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-3xl font-bold text-blue-200 mb-2">1M+</div>
              <div className="font-semibold">SQ FT DEVELOPED</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-3xl font-bold text-[#e3a678] mb-2">25+</div>
              <div className="font-semibold">PROJECTS COMPLETED</div>
            </div>
          </div>
        </div>
      </section>

      {/* DREAM SCHOOLS */}
      <section className="py-12 px-4 bg-[#eaf1f6]">
        <div className="container mx-auto flex flex-col md:flex-row gap-10 items-center bg-[#5f8399] rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="flex-1">
            <Image src="/images/board-members.png" alt="Board Members Group Photo" width={320} height={220} className="rounded-lg shadow-md mx-auto md:mx-0" />
          </div>
          <div className="flex-1 text-white">
            <h4 className="text-xl font-bold mb-2">DREAM SCHOOLS</h4>
            <p className="mb-2">The strength of Dream Schools, Inc. lies in the responsibility, expertise, and dedication of its Board of Directors. Our board comprises professionals from diverse backgrounds and professions, united by a shared commitment to educational equity and community development.</p>
            <p className="mb-2">Representing fields such as education, finance, law, real estate, construction, public policy, and nonprofit leadership, our board brings various perspectives and skill sets to guide our strategic direction and ensure strong governance. Their collective experience allows Dream Schools to navigate complex challenges and remain innovative in our approach to supporting public charter schools.</p>
            <p>Our board members are stewards of our mission, supporting the long-term success of the schools and communities we serve.</p>
          </div>
        </div>
      </section>

      {/* SUPPORT OUR MISSION */}
      <section className="py-12 px-4 bg-[#5f8399] text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold mb-4 tracking-widest">SUPPORT OUR MISSION</h2>
          <p className="mb-6 max-w-2xl mx-auto">Dream Schools is a 501(c)(3) nonprofit organization. Your donation is tax-deductible to the extent allowed by law.</p>
          <button className="px-8 py-3 text-white font-bold rounded-full bg-gradient-to-r from-orange-400 to-[#e3a678] shadow-md hover:scale-105 transition-transform">DONATE TODAY</button>
        </div>
      </section>

      {/* QUOTE/STATEMENT */}
      <section className="py-12 px-4 bg-[#eaf1f6] text-[#5f8399] text-center">
        <div className="container mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Leaders Whose Expertise And Vision<br />Shape The Future Of <span className="text-orange-400">Equitable Education.</span></h3>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  )
}
