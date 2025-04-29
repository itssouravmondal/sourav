import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    {
      company: "Streamlloom Micro Enterprise",
      website: "https://www.streamlloom.com",
      role: "Founder",
      duration: "Jan 2025 - Present",
      points: [
        "Built and scaled Streamlloom, providing music, audio, and entertainment video distribution consultancy services",
        "Offering strategic music video release planning and consultancy",
        "Developing an Agentic AI model for AI content creation automation"
      ]
    },
    {
      company: "Songdew Media Private Limited",
      website: "https://www.songdew.com",
      role: "Product Executive",
      duration: "July 2023 - Dec 2024",
      points: [
        "Led Scrum meetings with the Product Owner and Scrum team for the music distribution module",
        "Focused on enhancing user retention and optimizing the distribution page",
        "Improved distribution process and increased retention by 20%",
        "Coordinated with other departments for seamless feature implementation"
      ]
    },
    {
      company: "Songdew Media Private Limited",
      website: "https://www.songdew.com",
      role: "Operation Executive",
      duration: "May 2022 - June 2023",
      points: [
        "Led weekly Distribution Meetings to align department goals",
        "Conducted content quality checks on music metadata",
        "Trained 1000+ artists and 150+ label partners on metadata optimization",
        "Developed process documentation for music release workflows"
      ]
    },
    {
      company: "Mitha Interior Design & Construction Pvt. Ltd.",
      website: "https://www.mithainterior.com",
      role: "Digital Marketing Specialist",
      duration: "Nov 2021 - May 2022",
      points: [
        "Managed the CMS website, including Google My Business, Google Analytics, and Social Media Pages",
        "Executed targeted advertising campaigns on Google Search, Facebook, and Instagram",
        "Collaborated with AiHouse head office on the setup of AiHouse India project",
        "Oversaw product design to product launch phases of the AiHouse India initiative"
      ]
    }
  ];

  return (
    <div className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle text-gray-700">Professional Journey & Achievements</p>
        </motion.div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card card-gradient p-8"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    {exp.company}
                  </h3>
                  <a 
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    Visit Website →
                  </a>
                </div>
                <span className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 font-medium">
                  {exp.duration}
                </span>
              </div>
              <p className="text-xl text-gray-700 mb-4">{exp.role}</p>
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mr-3"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
