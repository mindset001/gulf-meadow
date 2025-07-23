export default function Milestones() {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 w-1 h-full bg-red-600 transform -translate-x-1/2"></div>
        
        {/* Milestones */}
        {[
          {
            year: "2008",
            title: "Company Founded",
            description: "Started as a small electrical consulting firm with 5 engineers"
          },
          {
            year: "2012",
            title: "First Major Project",
            description: "Completed 50MW substation for industrial park"
          },
          {
            year: "2016",
            title: "ISO Certification",
            description: "Achieved ISO 9001:2015 for quality management"
          },
          {
            year: "2020",
            title: "Renewable Expansion",
            description: "Launched dedicated renewable energy division"
          },
          {
            year: "2023",
            title: "100+ Employees",
            description: "Grew to become regional leader in electrical engineering"
          }
        ].map((milestone, index) => (
          <div 
            key={index} 
            className={`relative mb-12 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'}`}
          >
            <div className={`absolute top-0 w-6 h-6 rounded-full bg-red-600 ${index % 2 === 0 ? '-right-3' : '-left-3'}`}></div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-red-600 mb-2">{milestone.year}</h3>
              <h4 className="text-lg font-semibold mb-2">{milestone.title}</h4>
              <p className="text-gray-600">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}