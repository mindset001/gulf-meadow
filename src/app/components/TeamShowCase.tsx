import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TeamShowcase() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Engineer",
      expertise: "Power Systems",
      avatar: "/team/sarah.jpg",
      initials: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Automation Director",
      expertise: "Industrial Controls",
      avatar: "/team/michael.jpg",
      initials: "MR"
    },
    {
      name: "Emma Johnson",
      role: "Renewables Lead",
      expertise: "Solar/Wind Integration",
      avatar: "/team/emma.jpg",
      initials: "EJ"
    },
    {
      name: "David Park",
      role: "Safety Manager",
      expertise: "Electrical Safety",
      avatar: "/team/david.jpg",
      initials: "DP"
    }
  ];

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Meet Our Leadership</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        Our team of certified electrical engineers brings decades of combined experience
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
            <Avatar className="h-24 w-24 mx-auto mb-4">
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback className="text-2xl font-bold bg-red-100 text-red-600">
                {member.initials}
              </AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-red-600 mb-2">{member.role}</p>
            <p className="text-sm text-gray-600">{member.expertise}</p>
          </div>
        ))}
      </div>
    </div>
  );
}