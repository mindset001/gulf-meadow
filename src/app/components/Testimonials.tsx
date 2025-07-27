import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";


const testimonials = [
  {
    name: "Carol Eve",
    role: "C.E.O ALateef Media",
    content: "Gulf-Meadow's electrical redesign of our manufacturing plant reduced our energy costs by 30% while improving reliability. Their team was professional and delivered ahead of schedule.",
    avatar: "/images/avatar1.jpg",
    initials: "AK",
  },
  {
    name: "Sarah Jane",
    role: "C.T.O Acme Innovations",
    content: "The emergency power system Gulf-Meadow designed for our work space has been flawless through several outages. Their attention to detail gave us complete confidence in their work.",
    avatar: "/images/avatar2.jpg",
    initials: "SM",
  },
  {
    name: "John Doe",
    role: "CEO, Zeeq Fashion",
    content: "We trusted Gulf-Meadow with our data center's critical power infrastructure, and they exceeded our expectations at every turn. Truly experts in their field.",
    avatar: "/images/avatar3.jpg",
    initials: "ZB",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our clients say about our work and service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <p className="italic mb-6">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    {/* <p className="text-sm text-gray-600">{testimonial.role}</p> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}