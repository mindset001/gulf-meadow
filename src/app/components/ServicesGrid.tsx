import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bolt, CircuitBoard, Cog, Factory, Lightbulb, Zap } from "lucide-react";

const services = [
  {
    title: "Power System Design",
    description: "Complete design of electrical power systems for industrial and commercial facilities",
    icon: <Zap className="h-8 w-8 text-red-600" />,
    highlights: [
      "Load analysis",
      "Short circuit studies",
      "Protection coordination"
    ]
  },
  {
    title: "Industrial Automation",
    description: "State-of-the-art control systems for manufacturing processes",
    icon: <Cog className="h-8 w-8 text-red-600" />,
    highlights: [
      "PLC programming",
      "SCADA systems",
      "Process optimization"
    ]
  },
  {
    title: "HV/MV Substations",
    description: "Design and implementation of high/medium voltage substations",
    icon: <Bolt className="h-8 w-8 text-red-600" />,
    highlights: [
      "GIS/AIS substations",
      "Protection systems",
      "Commissioning"
    ]
  },
  {
    title: "Renewable Energy Systems",
    description: "Solar, wind, and hybrid power solutions",
    icon: <Lightbulb className="h-8 w-8 text-red-600" />,
    highlights: [
      "Solar farm design",
      "Energy storage",
      "Grid integration"
    ]
  },
  {
    title: "Electrical Safety Audits",
    description: "Comprehensive facility electrical safety assessments",
    icon: <CircuitBoard className="h-8 w-8 text-red-600" />,
    highlights: [
      "NFPA 70E compliance",
      "Arc flash analysis",
      "Mitigation solutions"
    ]
  },
  {
    title: "Industrial Lighting",
    description: "Energy-efficient lighting solutions for manufacturing",
    icon: <Factory className="h-8 w-8 text-red-600" />,
    highlights: [
      "LED retrofits",
      "Hazardous location lighting",
      "Smart controls"
    ]
  }
];

export default function ServicesGrid() {
  return (
    <div className="text-center mb-12">
      {/* <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        Specialized electrical engineering solutions tailored to your industry needs
      </p> */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow hover:border-red-100">
            <CardHeader className="flex flex-row items-start space-y-0 space-x-4">
              <div className="bg-red-50 p-3 rounded-full">
                {service.icon}
              </div>
              <div className="text-left">
                <CardTitle>{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-left">
              <p className="mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}