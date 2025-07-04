import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function BidsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f6f8] text-gray-800">
      <Navbar />
      <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-[260px] md:h-[320px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bids/unsplash_TxA3dwseTsw.png')" }}>
        <div className="absolute inset-0 bg-[#5f8399] opacity-25"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-display font-bold mb-2 drop-shadow">CURRENT BIDS & RFPs</h1>
          <p className="mt-2 text-base md:text-lg max-w-2xl mx-auto drop-shadow">
            Explore our open bid process and RFPs for mission-aligned charter school projects.
          </p>
        </div>
      </section>

      {/* Open Opportunities Section */}
      <section className="py-12 px-4 bg-[#eaf1f6]">
        <div className="max-w-3xl mx-auto w-full">
          <h2 className="text-xl font-display font-bold text-center text-[#2b4c7a] mb-8 tracking-wide">OPEN OPPORTUNITIES</h2>
          <div className="space-y-6">
            {/* op 0 */}
            <div className="bg-white rounded shadow p-6 flex flex-col md:flex-row md:items-center justify-between border-t-4 border-[#f4c8a4]">
              <div>
                <h3 className="font-display font-bold text-lg text-[#2b4c7a]">Request for Proposal: School Building Addition Project</h3>
                <p className="text-gray-700 text-sm mt-1 mb-2 max-w-2xl">
                  Owner: Dream Schools, Inc.<br />

Project Location: 10 Center Street, McKeesport, PA 15312<br />

Dream Schools, Inc. is soliciting proposals from qualified bidders for a school building addition project designed to enhance educational space for Young Scholars of Greater Allegheny Charter School.

Project Overview:

The planned addition will total approximately 14,172 square feet, including a gymnasium, classrooms, and offices—a dynamic, purpose-built expansion to support 21st-century learning.

Project Specifications:

Detailed drawings and specifications can be accessed via the link below or by contacting the parties listed:<br />

· Email: info@dreamschoolsinc.org<br />

· Architect Contact: nhart@hartarc.com (Hart Architects)
                  </p>
              </div>
              <div className="flex flex-col md:items-end gap-2 md:ml-4 min-w-[160px]">
                <span className="text-xs font-semibold mb-1 text-[#e67a7c]">DUE: MARCH 7, 2025</span>
                <div className="flex gap-2">
                  <button className="bg-orange-400 hover:bg-orange-500 text-white text-xs font-bold py-1 px-3 rounded-full"><Link href={"https://www.dropbox.com/scl/fi/nxphv1j7oqcix7ilt4qnq/250113_YSGA_Addition_Full-Progress-Set.pdf?rlkey=g0bihhe441l5eo7bzx4n3qzf8&e=1&dl=0"}>
                  DOWNLOAD RFP</Link></button>
                  <button className="bg-white border border-orange-400 text-orange-400 hover:bg-orange-50 text-xs font-bold py-1 px-3 rounded-full">SUBMIT PROPOSAL</button>
                </div>
              </div>
            </div>
            {/* Opportunity 1 */}
            <div className="bg-white rounded shadow p-6 flex flex-col md:flex-row md:items-center justify-between border-t-4 border-[#f4c8a4]">
              <div>
                <h3 className="font-display font-bold text-lg text-[#2b4c7a]">General Contractor Services - Innovation Academy Phase 2</h3>
                <p className="text-gray-700 text-sm mt-1 mb-2 max-w-2xl">
                  Dream Schools is seeking qualified general contractors for Phase 2 of the Innovation Academy project in Philadelphia, PA. The project involves the renovation of 15,000 square feet of existing space to create additional classrooms, a media center, and administrative offices.
                </p>
              </div>
              <div className="flex flex-col md:items-end gap-2 md:ml-4 min-w-[160px]">
                <span className="text-xs font-semibold mb-1 text-[#e67a7c]">DUE: JULY 15, 2023</span>
                <div className="flex gap-2">
                  <button className="bg-orange-400 hover:bg-orange-500 text-white text-xs font-bold py-1 px-3 rounded-full">DOWNLOAD RFP</button>
                  <button className="bg-white border border-orange-400 text-orange-400 hover:bg-orange-50 text-xs font-bold py-1 px-3 rounded-full">SUBMIT PROPOSAL</button>
                </div>
              </div>
            </div>
            {/* Opportunity 2 */}
            <div className="bg-white rounded shadow p-6 flex flex-col md:flex-row md:items-center justify-between border-t-4 border-[#f4c8a4]">
              <div>
                <h3 className="font-display font-bold text-lg text-[#2b4c7a]">Architectural Services - Horizon Charter School Expansion</h3>
                <p className="text-gray-700 text-sm mt-1 mb-2 max-w-2xl">
                  Dream Schools is seeking architectural services for the expansion of Horizon Charter School in Atlanta, GA. The project involves designing a 20,000 square foot addition to the existing facility to accommodate growing enrollment.
                  </p>
              </div>
              <div className="flex flex-col md:items-end gap-2 md:ml-4 min-w-[160px]">
                <span className="text-xs font-semibold mb-1 text-[#e67a7c]">DUE: JULY 15, 2023</span>
                <div className="flex gap-2">
                  <button className="bg-orange-400 hover:bg-orange-500 text-white text-xs font-bold py-1 px-3 rounded-full">DOWNLOAD RFP</button>
                  <button className="bg-white border border-orange-400 text-orange-400 hover:bg-orange-50 text-xs font-bold py-1 px-3 rounded-full">SUBMIT PROPOSAL</button>
                </div>
              </div>
            </div>
            {/* Opportunity 3 */}
            <div className="bg-white rounded shadow p-6 flex flex-col md:flex-row md:items-center justify-between border-t-4 border-[#e3a678]">
              <div>
                <h3 className="font-display font-bold text-lg text-[#2b4c7a]">MEP Engineering Services - Multiple Projects</h3>
                <p className="text-gray-700 text-sm mt-1 mb-2 max-w-2xl">
                  Dream Schools is seeking MEP engineering services for a series of upcoming charter school projects. The selected firm(s) will provide design and consulting services for new construction and renovation projects across multiple states.
                </p>
              </div>
              <div className="flex flex-col md:items-end gap-2 md:ml-4 min-w-[160px]">
                <span className="text-xs font-semibold mb-1 text-[#e67a7c]">DUE: JULY 15, 2023</span>
                <div className="flex gap-2">
                  <button className="bg-orange-400 hover:bg-orange-500 text-white text-xs font-bold py-1 px-3 rounded-full">DOWNLOAD RFP</button>
                  <button className="bg-white border border-orange-400 text-orange-400 hover:bg-orange-50 text-xs font-bold py-1 px-3 rounded-full">SUBMIT PROPOSAL</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procurement Policy Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto w-full">
          <h2 className="text-xl font-display font-bold text-center mb-6 tracking-wide text-[#2b4c7a]">OUR PROCUREMENT POLICY</h2>
          <div className="text-white p-6 text-sm rounded-2xl shadow text-center font-medium"
            style={{ background: "linear-gradient(90deg,#2b4c7a 0%, #4a6ba1 100%)" }}>
            Dream Schools is committed to fair, open, and competitive procurement processes. We seek to work with diverse vendors and suppliers who share our commitment to quality, sustainability, and innovation.<br /><br />
            We encourage proposals and involvement from minority-owned businesses, women-owned businesses, and other historically disadvantaged and underutilized vendors. We strictly conduct business with honesty, integrity, and objectivity, all protected within written contractual relationships with our partners.<br /><br />
            For more information, or to be added to our vendor database, please contact <span className="underline">procurement@dream-schools.org</span>.
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
}
