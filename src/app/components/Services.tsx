import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bolt, CircuitBoard, Cog, Factory, Lightbulb, Zap } from "lucide-react";


const services = [
  {
    title: "Electrical System Design",
    description: "Custom electrical system designs for residential, commercial, and industrial applications.",
    icon: <CircuitBoard className="h-8 w-8 text-primary" />,
  },
  {
    title: "Power Distribution",
    description: "Efficient and reliable power distribution solutions tailored to your needs.",
    icon: <Zap className="h-8 w-8 text-primary" />,
  },
  {
    title: "Industrial Automation",
    description: "State-of-the-art automation systems to optimize your industrial processes.",
    icon: <Cog className="h-8 w-8 text-primary" />,
  },
  {
    title: "Lighting Solutions",
    description: "Energy-efficient lighting designs that enhance spaces while reducing costs.",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
  },
  {
    title: "Emergency Power Systems",
    description: "Reliable backup power solutions to keep your operations running smoothly.",
    icon: <Bolt className="h-8 w-8 text-primary" />,
  },
  {
    title: "Manufacturing Support",
    description: "Comprehensive electrical support for manufacturing facilities.",
    icon: <Factory className="h-8 w-8 text-primary" />,
  },
];

export function Services() {
  return (
    <section className="py-16 bg-white px-4 md:px-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive electrical engineering solutions tailored to your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  {service.icon}
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}