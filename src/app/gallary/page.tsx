import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProjectsGallery } from "../components/ProjectGallary";

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ProjectsGallery expanded={true} />
      </main>
      <Footer />
    </div>
  );
}