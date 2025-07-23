"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import One from "../../../public/trans1.jpg"
import Two from "../../../public/trans2.jpg"
import Three from "../../../public/trans3.jpg"
import Four from "../../../public/trans4.jpg"

const projects = [
  {
    id: 1,
    title: "Industrial Power Upgrade",
    description: "Complete power system overhaul for manufacturing facility",
    image: One,
  },
  {
    id: 2,
    title: "Commercial Lighting Retrofit",
    description: "LED lighting upgrade for 50,000 sq ft office building",
    image: Two,
  },
  {
    id: 3,
    title: "Data Center Power Distribution",
    description: "Redundant power systems for Tier 3 data center",
    image: Three,
  },
  {
    id: 4,
    title: "Hospital Emergency Power",
    description: "Backup power system for critical healthcare facility",
    image: Four,
  },
  {
    id: 5,
    title: "Renewable Energy Integration",
    description: "Solar power integration with existing electrical infrastructure",
    image: One,
  },
  {
    id: 6,
    title: "Smart Building Automation",
    description: "IoT-enabled electrical systems for energy efficiency",
    image: Four,
  },
];

interface ProjectsGalleryProps {
  expanded?: boolean; // Make it optional with ?
}
export function ProjectsGallery({ expanded = false }: ProjectsGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedProject(index);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const navigate = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section className="py-16 bg-gray-50 px-10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful electrical engineering projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-[200px] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div>
                  <h3 className="text-white font-bold text-lg">{project.title}</h3>
                  <p className="text-white/90">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-primary"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={() => navigate("prev")}
              className="absolute left-4 text-white hover:text-primary"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <div className="max-w-4xl w-full">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <Image
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  width={1200}
                  height={800}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">{projects[currentIndex].title}</h3>
                <p>{projects[currentIndex].description}</p>
              </div>
            </div>
            
            <button
              onClick={() => navigate("next")}
              className="absolute right-4 text-white hover:text-primary"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}