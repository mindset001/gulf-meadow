import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectsGallery } from "./components/ProjectGallary";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <ProjectsGallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}