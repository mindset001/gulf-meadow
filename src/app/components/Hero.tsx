import { Button } from "@/components/ui/button";
import Image from "next/image";
import One from '../../../public/trans1.jpg';
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-10">
        <Image
          src={One}
          alt="Electrical engineering background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/40 z-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20" />
      
      <div className="container relative z-30 h-full flex flex-col justify-center items-start text-white px-4 sm:px-6 md:px-10">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold max-w-1xl mb-6 lg:leading-20">
          A COMPLETE ENGINEERING, PROCUREMENT & CONSTRUCTION COMPANY(EPC)
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Expert solutions for complex electrical systems with cutting-edge technology and decades of experience.
        </p>
        <div className="flex sm:flex-row gap-4">
          
          <Button 
            size="lg" 
            variant="outline" 
            className="text-[red] hover:text-gray-900 border-white hover:border-gray-900 cursor-pointer"
          >
            <Link href='/services'>Our Services</Link>
          </Button>
          <Button size="lg" className="bg-primary hover:bg-primary/90 cursor-pointer">
          <Link href='/contact'> Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}