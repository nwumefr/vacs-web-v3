'use client'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DecorativeCircle from "@/components/decorative-circle" // adjust path as needed

const portfolios = [
  {
    name: "Young Scholars of Central Pennsylvania Charter School",
    location: "State College, PA | Completed",
    desc:"A purpose-built, state-of-the-art charter school campus totaling 35,000 square feet on a 9-acre site. Designed specifically to meet the needs of a growing K–8 public charter school, the campus has expanded over the years to serve more than 400 students",
    points: [
      "Purpose-built educational facility on a 9-acre campus",
      "Flexible classrooms, multipurpose areas, administrative offices, and play area",
      "Expansive outdoor green space for recreation and learnin",
      "Continuous development to support enrollment growth and 21st-century instruction",
    ],
  },
  {
    name: "Young Scholars of Western Pennsylvania Charter School",
    location: "Pittsburgh, PA | Completed",
    desc:"A 42,000 square foot educational facility situated on approximately 5 acres, originally repurposed from an assisted living facility and previously used as an elementary school. The building has been expanded and fully transformed into a modern K–8 public charter school campus featuring classrooms, a multipurpose room, a gymnasium, and additional amenities. A separate administrative office building is located adjacent to the central facility.",
    points: [
      "Adaptive reuse of former assisted living and elementary school structures",
      "Renovated and expanded to meet the needs of K-8 public charter education",
      "Features classrooms, gymnasium, multipurpose spaces, and student-centered facilities",
      "Dedicated arts and athletics facilities",
      "Includes a standalone administrative office building",
    ],
  },
  {
    name: "Young Scholars of Greater Allegheny Charter School",
    location: "McKeesport, PA | In Progress",
    desc:"A 40,000+ square foot adaptive reuse project transforming a former religious and commercial property on a 3-acre site into a modern K–8 charter school campus. The facility includes classroom spaces, a gymnasium, a cafeteria, a green field, and a standalone administrative office building.",
    points: [
      "Adaptive reuse of religious and commercial buildings",
      "Designed to serve K-8 students in the McKeesport area",
      "Educational and administrative facilities designed for future-ready learning",
      "Educational and administrative facilities designed for future-ready learnin",
      // "Playground and community garden added",
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
        <div className="absolute inset-0 bg-[#2b4c7a] opacity-50" />
        <div className="z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">OUR WORK</h1>
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
                    <h2 className="text-2xl font-display font-bold text-orange-500 mb-2">{project.name}</h2>
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
                    <h2 className="text-2xl font-display font-bold text-orange-500 mb-2">{project.name}</h2>
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
