import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import Milestones from "../components/Milestones";
import TeamShowcase from "../components/TeamShowCase";
import { Bolt, CheckCircle, Factory, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero/>
      <section className="relative bg-red-600 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Powering Progress Through Innovation</h1>
          <p className="text-xl max-w-3xl mx-auto">
            For over 15 years, we've been delivering cutting-edge electrical solutions with precision and excellence
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg mb-12">
            To engineer electrical systems that are <span className="text-red-600 font-semibold">safe</span>,{' '}
            <span className="text-red-600 font-semibold">efficient</span>, and <span className="text-red-600 font-semibold">sustainable</span> - 
            pushing the boundaries of what's possible in power distribution and industrial automation.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Bolt className="h-10 w-10 mx-auto" />, value: "250+", label: "Projects Completed" },
              { icon: <CheckCircle className="h-10 w-10 mx-auto" />, value: "100%", label: "Safety Record" },
              { icon: <Factory className="h-10 w-10 mx-auto" />, value: "50+", label: "Industrial Clients" },
              { icon: <Shield className="h-10 w-10 mx-auto" />, value: "24/7", label: "Support" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="text-red-600 mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{item.value}</h3>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-gray-50 py-20">
        <Milestones />
      </section>

      {/* Team Section */}
      <section className="py-20 container mx-auto px-6">
        <TeamShowcase />
      </section>

      {/* Values Section */}
      <section className="bg-red-600 text-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Engineering Excellence",
                description: "We never compromise on technical precision and quality in every solution we deliver."
              },
              {
                title: "Safety First",
                description: "All our designs prioritize personnel safety and equipment protection above all else."
              },
              {
                title: "Sustainable Innovation",
                description: "We develop solutions that reduce environmental impact while improving efficiency."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      <Footer />
    </div>
  );
}