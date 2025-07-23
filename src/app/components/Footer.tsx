import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Logo from "../../../public/assets/logo.png"
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:px-10 px-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            {/* <h3 className="text-xl font-bold mb-4 text-primary">Gulf-Meadow</h3> */}
            <Image src={Logo} alt=""  className="w-[160px] h-[160px]" width={200} height={200}/>
            <p className="text-gray-400">
              Leading electrical engineering solutions with innovation and expertise.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition">Services</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-primary transition">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition">Electrical Design</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition">Power Systems</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition">Industrial Automation</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition">Lighting Solutions</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition">Energy Management</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>150 Awolowo Road, Ikoyi LAGOS</p>
              {/* <p>Tech City, TC 10101</p> */}
              <div className="flex gap-2">
                <div>Phone:</div>
                <div><p> (+234) 706 680 2640</p>
                <p>(+234) 912 767 1675</p></div>
              </div>
              {/* <p>Email: info@voltedge.com</p> */}
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="text-gray-400 hover:text-primary transition">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary transition">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary transition">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary transition">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Gulf-Meadow Electrical Engineering. All rights reserved.</p>
          <p>Designed by Demlinks Innovation and Technology</p>
        </div>
      </div>
    </footer>
  );
}