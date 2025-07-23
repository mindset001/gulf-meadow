import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import ServicesGrid from '../components/ServicesGrid'
import Link from 'next/link'

function page() {
  return (
   <div className="min-h-screen flex flex-col">
         <Header />
         <Hero/>
         <section className="relative  text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[red]">Our Electrical Engineering Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-black">
            Cutting-edge solutions for power systems, industrial automation, and sustainable energy
          </p>
        </div>
      </section>
       <section className="py-16 container mx-auto px-8">
        <ServicesGrid />
      </section>
       {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Power Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team of certified electrical engineers is ready to deliver exceptional results for your most complex challenges.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            <Link href='/contact'> Get a Free Consultation</Link>
          </button>
        </div>
      </section>
         <Footer />
       </div>
  )
}

export default page