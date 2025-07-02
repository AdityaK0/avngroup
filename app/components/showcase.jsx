export default function Showcase() {
  const uniforms = [
    {
      id: 1,
      title: "Corporate Uniforms",
      category: "Business",
      image: "/placeholder.svg?height=400&width=400",
      description: "Professional corporate wear for offices and businesses",
      fabrics: ["Micro Fabric 180GSM", "Dry-Fit 180GSM"],
    },
    {
      id: 2,
      title: "Hotel Uniforms",
      category: "Hospitality",
      image: "/placeholder.svg?height=400&width=400",
      description: "Elegant uniforms for hotel staff and hospitality industry",
      fabrics: ["Honey Comb 180-200GSM", "Spun Matty 200-220GSM"],
    },
    {
      id: 3,
      title: "Hospital Uniforms",
      category: "Healthcare",
      image: "/placeholder.svg?height=400&width=400",
      description: "Comfortable and hygienic uniforms for medical professionals",
      fabrics: ["PC Cotton 200-220GSM", "Cotton Dry-Fit 240GSM"],
    },
    {
      id: 4,
      title: "School Uniforms",
      category: "Education",
      image: "/placeholder.svg?height=400&width=400",
      description: "Durable and comfortable uniforms for students",
      fabrics: ["Polo Knit 200GSM", "Cotton Polo Tipping 240GSM"],
    },
    {
      id: 5,
      title: "Security Uniforms",
      category: "Security",
      image: "/placeholder.svg?height=400&width=400",
      description: "Professional security uniforms with durability",
      fabrics: ["Spun Matty 200-220GSM", "PC Cotton 200-220GSM"],
    },
    {
      id: 6,
      title: "Housekeeping Uniforms",
      category: "Service",
      image: "/placeholder.svg?height=400&width=400",
      description: "Practical uniforms for housekeeping and maintenance staff",
      fabrics: ["Micro Fabric 180GSM", "Dry-Fit 180GSM"],
    },
  ]

  return (
    <section id="showcase" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Catalog</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of custom t-shirt designs across various styles and categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uniforms.map((uniform) => (
            <div key={uniform.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4">
                <img
                  src={uniform.image || "/placeholder.svg"}
                  alt={uniform.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{uniform.title}</h3>
                  <span className="text-sm text-blue-600 font-medium">{uniform.category}</span>
                </div>
                <p className="text-gray-600">{uniform.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {uniform.fabrics.map((fabric, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {fabric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
