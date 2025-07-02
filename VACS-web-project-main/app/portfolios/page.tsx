'use client'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DecorativeCircle from "@/components/decorative-circle" // adjust path as needed

const portfolios = [
  {
    name: "Innovation Academy",
    location: "Philadelphia, PA | Completed 2022",
    points: [
      "Ground-up construction of a modern building",
      "Flexible interior spaces for collaborative learning",
      "Outdoor classroom and playground",
      "STEM maker labs to support project-based curriculum",
    ],
  },
  {
    name: "Horizon Charter School",
    location: "Atlanta, GA | Completed 2021",
    points: [
      "65,000 sq. ft. adaptive reuse project",
      "Transformed former big-box retail site",
      "Created state-of-the-art classrooms and labs",
      "Dedicated arts and athletics facilities",
      "Advanced technology infrastructure",
    ],
  },
  {
    name: "Riverside Elementary",
    location: "Denver, CO | Completed 2020",
    points: [
      "Renovated historic school to expand access",
      "Preserved original architecture, including mission-style facade",
      "New modern library, cafeteria, gymnasium",
      "Flexible classroom design",
      "Playground and community garden added",
    ],
  },
]

const imageUrls = [
  '/images/Pictures/room-interior-design.jpg',
  '/images/Pictures/large-modern-office-building.jpg',
  '/images/Pictures/diverse-education-shoot.jpg',
  '/images/Pictures/interior-school-classroom-wooden-floor-desks-concept-education-learning-3d-render.jpg',
  '/images/Pictures/pupils-primary-school-girls-with-backpacks-near-school-outdoors-beginning-lessons-first-day-fall.jpg',
  '/images/Pictures/School Design 2.jpg',
  '/images/Pictures/School Design.jpg',
  '/images/Pictures/schoolgirl-with-notebook-her-hands-sunset-background-school-goes-school.jpg',
  '/images/Pictures/teacher-students-walking-around-school-campus-stock-photo.jpg',
]

export default function PortfolioPage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/portfolios/image 1.png')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">OUR WORK</h1>
          <p className="text-lg max-w-xl mx-auto">
            Explore our completed projects to see how we've helped charter schools create inspiring learning environments.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-16 bg-gray-50 px-4 z-10">
        {/* Decorative Circles based on Figma */}
        <DecorativeCircle className="top-[10%] left-[-30px] bg-blue-300" size={80} />
        <DecorativeCircle className="top-[35%] right-[-30px] bg-red-300" size={60} />
        <DecorativeCircle className="bottom-[22%] left-[-30px] bg-blue-300" size={60} />
        <DecorativeCircle className="bottom-[6%] right-[-30px] bg-orange-300" size={80} />

        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          {portfolios.map((project, index) => (
            <div key={project.name} className="grid md:grid-cols-2 gap-10 items-start relative">
              {index % 2 === 0 ? (
                <>
                  <div>
                    <h2 className="text-2xl font-bold text-orange-500 mb-2">{project.name}</h2>
                    <p className="text-sm text-gray-500 mb-4">{project.location}</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {project.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-[150px] rounded-md bg-cover bg-center" style={{backgroundImage: `url('${imageUrls[index*3]}')`}} />
                    <div className="h-[150px] rounded-md bg-cover bg-center" style={{backgroundImage: `url('${imageUrls[index*3+1]}')`}} />
                    <div className="col-span-2 h-[200px] rounded-md bg-cover bg-center" style={{backgroundImage: `url('${imageUrls[index*3+2]}')`}} />
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
                    <div className="h-[150px] rounded-md bg-cover bg-center" style={{backgroundImage: `url('${imageUrls[index*3]}')`}} />
                    <div className="h-[150px] rounded-md bg-cover bg-center" style={{backgroundImage: `url('${imageUrls[index*3+1]}')`}} />
                    <div className="col-span-2 h-[200px] rounded-md bg-cover bg-center" style={{backgroundImage: `url('${imageUrls[index*3+2]}')`}} />
                  </div>
                  <div className="order-1 md:order-2">
                    <h2 className="text-2xl font-bold text-orange-500 mb-2">{project.name}</h2>
                    <p className="text-sm text-gray-500 mb-4">{project.location}</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {project.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
