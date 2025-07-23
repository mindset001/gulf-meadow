import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">About VoltEdge</h1>
            
            <div className="prose prose-lg mx-auto">
              <p className="text-lg mb-6">
                Founded in 2005, VoltEdge has grown from a small electrical consultancy to a leading engineering firm serving clients across multiple industries.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Our Mission</h2>
              <p className="mb-6">
                To deliver innovative, reliable, and sustainable electrical engineering solutions that power progress and improve lives.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Our Team</h2>
              <p className="mb-6">
                Our team of certified engineers and technicians brings together decades of experience across all aspects of electrical systems design, implementation, and maintenance.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Our Values</h2>
              <ul className="mb-6 space-y-2">
                <li><strong>Excellence:</strong> We never compromise on quality or safety</li>
                <li><strong>Innovation:</strong> We embrace new technologies to solve complex challenges</li>
                <li><strong>Integrity:</strong> We do what's right, even when no one is watching</li>
                <li><strong>Sustainability:</strong> We design with the future in mind</li>
                <li><strong>Collaboration:</strong> We work closely with clients to understand their unique needs</li>
              </ul>
              
              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Safety First</h3>
                <p>
                  At VoltEdge, safety isn't just a priority—it's a core value that guides every decision we make. Our impeccable safety record speaks for itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}