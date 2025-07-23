import React from 'react'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Header } from '../components/Header'
import { ContactForm } from '../components/ContactForm'

function page() {
  return (
    <div className="min-h-screen flex flex-col">
          <Header />
          <Hero/>
          <div className='px-20'>
            <ContactForm/>
          </div>
          <Footer />
        </div>
  )
}

export default page