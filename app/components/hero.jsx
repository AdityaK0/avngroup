export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Custom T-Shirt
            <span className="text-blue-600"> Designs</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Bringing your ideas to life through unique, high-quality custom t-shirt designs. From concept to creation,
            we craft wearable art that tells your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#showcase"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
