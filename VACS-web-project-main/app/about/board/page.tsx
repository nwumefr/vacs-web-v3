import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BoardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F6F8]">
      <Navbar />
      {/* HERO */}
      <section className="relative h-[260px] md:h-[320px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/Pictures/teacher-students-walking-around-school-campus-stock-photo.jpg')" }}>
        <div className="absolute inset-0 bg-[#5B8BA3] opacity-70"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">The Driving Force<br />Behind Our Mission</h1>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="relative py-16 bg-[#EAF2F7]">
        {/* Decorative Circles */}
        <div className="hidden md:block absolute left-0 top-10 w-24 h-24 bg-[#F4C8A4] opacity-60 rounded-full -z-1"></div>
        <div className="hidden md:block absolute right-0 bottom-10 w-20 h-20 bg-[#E3A678] opacity-60 rounded-full -z-1"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-center text-[#5B8BA3] text-xl font-bold tracking-widest mb-8">LEADERSHIP</h2>
          <p className="text-center max-w-2xl mx-auto text-[#5B8BA3] mb-12">Together, our board members serve as stewards of our mission—to provide affordable, sustainable, and high-quality learning environments for students—ensuring that every decision supports the long-term success of the schools and communities we serve.</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {/* Jonathan Wolf */}
            <div className="flex-1 bg-[#5B8BA3] rounded-2xl p-8 flex flex-col items-center shadow-lg">
              <div className="w-20 h-20 bg-white rounded-full mb-4 flex items-center justify-center">
                {/* Placeholder avatar */}
                <Image src="/public/placeholder-user.jpg" alt="Jonathan Wolf" width={64} height={64} className="rounded-full object-cover" />
              </div>
              <h3 className="text-white text-lg font-bold mb-1 tracking-wide">JONATHAN WOLF</h3>
              <p className="text-[#F4C8A4] text-xs font-semibold mb-4">Chief Executive Officer</p>
              <div className="bg-white/20 rounded-lg p-4 text-white text-sm text-center">
                Jonathan brings decades of experience in educational leadership and nonprofit management. His vision and commitment drive our mission forward every day.
              </div>
            </div>
            {/* David Uminsky */}
            <div className="flex-1 bg-[#5B8BA3] rounded-2xl p-8 flex flex-col items-center shadow-lg">
              <div className="w-20 h-20 bg-white rounded-full mb-4 flex items-center justify-center">
                {/* Placeholder avatar */}
                <Image src="/public/placeholder-user.jpg" alt="David Uminsky" width={64} height={64} className="rounded-full object-cover" />
              </div>
              <h3 className="text-white text-lg font-bold mb-1 tracking-wide">DAVID UMINSKY</h3>
              <p className="text-[#F4C8A4] text-xs font-semibold mb-4">Board Chair</p>
              <div className="bg-white/20 rounded-lg p-4 text-white text-sm text-center">
                David is a seasoned leader in real estate and community development, ensuring our projects deliver lasting impact for students and families.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-12 bg-[#5B8BA3]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-white text-lg font-bold tracking-widest mb-10">OUR IMPACT</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
            <div className="flex-1">
              <div className="text-[#E67E45] text-3xl md:text-4xl font-bold mb-2">10K+</div>
              <div className="text-white text-base font-medium">STUDENTS SERVED</div>
            </div>
            <div className="flex-1">
              <div className="text-[#E67E45] text-3xl md:text-4xl font-bold mb-2">1M+</div>
              <div className="text-white text-base font-medium">SQUARE FEET DEVELOPED</div>
            </div>
            <div className="flex-1">
              <div className="text-[#E67E45] text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-white text-base font-medium">PROJECTS COMPLETED</div>
            </div>
          </div>
        </div>
      </section>

      {/* DREAM SCHOOLS */}
      <section className="py-12 bg-[#7BA4BD]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex justify-center">
            <Image src="/images/Pictures/room-interior-design.jpg" alt="Dream Schools" width={320} height={200} className="rounded-lg shadow-xl object-cover" />
          </div>
          <div className="flex-1 text-white">
            <h3 className="text-2xl font-bold mb-4">DREAM SCHOOLS</h3>
            <p className="mb-4">The strength of Dream Schools, Inc. lies in the expertise, passion, and dedication of its Board of Directors. Our board comprises professionals from diverse backgrounds and professions, united by a shared commitment to educational equity and community development.</p>
            <p>Representing fields such as education, finance, law, real estate, construction, public policy, and nonprofit leadership, our board brings various perspectives and skill sets to guide our strategic direction and ensure strong governance. Their collective experience allows Dream Schools to navigate complex challenges and remain innovative in our approach to supporting public charter schools.</p>
          </div>
        </div>
      </section>

      {/* SUPPORT OUR MISSION */}
      <section className="py-12 bg-[#5B8BA3] text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-4">SUPPORT OUR MISSION</h3>
          <p className="text-white mb-6 max-w-2xl mx-auto">DREAM SCHOOLS IS A 501(C)(3) NONPROFIT ORGANIZATION. YOUR DONATION IS TAX-DEDUCTIBLE TO THE EXTENT ALLOWED BY LAW.</p>
          <button className="bg-[#E67E45] hover:bg-[#d46c2d] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition">DONATE TODAY</button>
        </div>
      </section>

      {/* QUOTE OVERLAY */}
      <section className="py-10 bg-[#EAF2F7] text-center border-t border-[#d4e0e8]">
        <div className="container mx-auto px-4">
          <h4 className="text-[#5B8BA3] text-xl font-semibold mb-2">Leaders Whose Expertise And Vision<br />Shape The Future Of Equitable Education</h4>
        </div>
      </section>

      <Footer />
    </div>
  )
}
