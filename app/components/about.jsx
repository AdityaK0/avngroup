import { Palette, Users, Award, Clock } from "lucide-react"

export default function About() {
  const skills = [
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: "Custom Manufacturing",
      description: "Tailored uniform solutions for various industries and requirements",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Wholesale Supply",
      description: "Bulk orders and wholesale distribution across different sectors",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Quality Fabrics",
      description: "Premium fabric options from 180GSM to 240GSM for durability",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Timely Delivery",
      description: "Efficient production and delivery for bulk uniform orders",
    },
  ]

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About AVN Uniforms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a distinguished manufacturer and wholesaler of a wide collection of Corporate Uniforms, Customized
              T-shirt Uniforms, Hotel Uniforms, Hospital Uniforms, School Uniforms, Housekeeping Uniforms and Security
              Uniforms. With years of experience in the uniform industry, we provide high-quality apparels that meet
              professional standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Consultation</h4>
                      <p className="text-gray-600">We discuss your vision, requirements, and preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Design Creation</h4>
                      <p className="text-gray-600">Our team creates custom designs based on your brief</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Review & Refine</h4>
                      <p className="text-gray-600">We refine the design until it perfectly matches your vision</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Final Delivery</h4>
                      <p className="text-gray-600">High-quality prints delivered on premium t-shirts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Design process illustration"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
