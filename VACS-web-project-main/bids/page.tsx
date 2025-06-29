import Image from "next/image";

export default function BidsPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 flex items-center justify-center bg-blue-900">
        <Image
          src="/placeholder.jpg"
          alt="Board meeting"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center drop-shadow-lg">
            The Driving Force <br /> Behind Our Mission
          </h1>
        </div>
      </div>

      {/* Leadership Section */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-4">LEADERSHIP</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
          Together, our board members lead the way to provide affordable, inclusive, and high-quality learning environments for students everywhere. Their vision supports the right success of the process and communities we serve.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-blue-200 rounded-lg p-6 flex-1 flex flex-col items-center">
            <div className="w-20 h-20 bg-white rounded-full mb-4 flex items-center justify-center">
              <Image src="/placeholder-user.jpg" alt="Jonathan Wolf" width={64} height={64} className="rounded-full" />
            </div>
            <h3 className="font-bold text-blue-900">JONATHAN WOLF</h3>
            <p className="text-xs text-blue-900 mb-2">Chief Executive Officer</p>
            <p className="text-center text-gray-700 text-sm">
              Our Chief Executive Officer brings years of experience in education and nonprofit leadership, guiding our mission with passion and expertise.
            </p>
          </div>
          <div className="bg-blue-200 rounded-lg p-6 flex-1 flex flex-col items-center">
            <div className="w-20 h-20 bg-white rounded-full mb-4 flex items-center justify-center">
              <Image src="/placeholder-user.jpg" alt="David Uminksy" width={64} height={64} className="rounded-full" />
            </div>
            <h3 className="font-bold text-blue-900">DAVID UMINSKY</h3>
            <p className="text-xs text-blue-900 mb-2">Board Chair</p>
            <p className="text-center text-gray-700 text-sm">
              Passionate about educational equity, our Board Chair ensures our organization stays true to its values and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-blue-800 text-white py-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-around text-center gap-8">
          <div>
            <div className="text-2xl font-bold">10K+</div>
            <div className="text-xs tracking-widest">STUDENTS SERVED</div>
          </div>
          <div>
            <div className="text-2xl font-bold">1M+</div>
            <div className="text-xs tracking-widest">SQUARE FEET DEVELOPED</div>
          </div>
          <div>
            <div className="text-2xl font-bold">25+</div>
            <div className="text-xs tracking-widest">PROJECTS COMPLETED</div>
          </div>
        </div>
      </section>

      {/* Dream Schools Section */}
      <section className="bg-blue-200 py-10 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 w-full md:w-1/3">
            <Image src="/placeholder.jpg" alt="Dream Schools" width={300} height={200} className="rounded-lg" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-blue-900 mb-2">DREAM SCHOOLS</h3>
            <p className="text-gray-700 text-sm">
              The strength of Dream Schools, Inc. lies in its expertise, vision, and commitment to the success of every student. Our board and leadership team are dedicated to building and supporting schools that foster learning, growth, and opportunity for all.
              <br /><br />
              Leveraging deep skills in architecture, finance, law, real estate, and education, our team delivers innovative solutions for school development and management. We believe every child deserves a safe, inspiring place to learn, and we work tirelessly to make that a reality.
            </p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-blue-800 text-white py-8 flex flex-col items-center">
        <p className="mb-4 text-center max-w-xl">
          DREAM SCHOOLS IS A 501(C)(3) NONPROFIT ORGANIZATION. YOUR DONATION IS TAX-DEDUCTIBLE TO THE EXTENT ALLOWED BY LAW.
        </p>
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded shadow">
          DONATE TODAY
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Image src="/placeholder-logo.png" alt="Dream Schools Logo" width={100} height={40} />
            <div className="flex gap-2 mt-2">
              <a href="#" className="hover:text-orange-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-orange-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-orange-400"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="hover:text-orange-400"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="font-bold mb-2">QUICK LINKS</h4>
            <a href="#" className="text-sm hover:text-orange-400">About Us</a>
            <a href="#" className="text-sm hover:text-orange-400">Services</a>
            <a href="#" className="text-sm hover:text-orange-400">Portfolios</a>
            <a href="#" className="text-sm hover:text-orange-400">Contact</a>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="font-bold mb-2">NEWSLETTER</h4>
            <input type="email" placeholder="Your email" className="rounded px-2 py-1 text-black mb-2" />
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-1 rounded">Subscribe</button>
          </div>
        </div>
        <div className="text-center text-xs text-gray-300 mt-6">© 2025 DREAM SCHOOLS, INC. ALL RIGHTS RESERVED</div>
      </footer>
    </div>
  );
}
