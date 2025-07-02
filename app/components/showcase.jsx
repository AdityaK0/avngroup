export default function Showcase() {
  const tshirts = [
    {
      id: 1,
      title: "Vintage Band Tee",
      category: "Music",
      image: "/placeholder.svg?height=400&width=400",
      description: "Retro-inspired design with distressed graphics",
    },
    {
      id: 2,
      title: "Minimalist Logo",
      category: "Corporate",
      image: "/placeholder.svg?height=400&width=400",
      description: "Clean, professional branding solution",
    },
    {
      id: 3,
      title: "Street Art Design",
      category: "Urban",
      image: "/placeholder.svg?height=400&width=400",
      description: "Bold graffiti-style artwork",
    },
    {
      id: 4,
      title: "Nature Collection",
      category: "Lifestyle",
      image: "/placeholder.svg?height=400&width=400",
      description: "Eco-friendly designs inspired by nature",
    },
    {
      id: 5,
      title: "Sports Team Jersey",
      category: "Sports",
      image: "/placeholder.svg?height=400&width=400",
      description: "Custom team uniforms and fan merchandise",
    },
    {
      id: 6,
      title: "Event Merchandise",
      category: "Events",
      image: "/placeholder.svg?height=400&width=400",
      description: "Memorable designs for special occasions",
    },
  ]

  return (
    <section id="showcase" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Showcase</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of custom t-shirt designs across various styles and categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tshirts.map((tshirt) => (
            <div key={tshirt.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4">
                <img
                  src={tshirt.image || "/placeholder.svg"}
                  alt={tshirt.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{tshirt.title}</h3>
                  <span className="text-sm text-blue-600 font-medium">{tshirt.category}</span>
                </div>
                <p className="text-gray-600">{tshirt.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
