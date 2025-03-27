import { motion } from 'framer-motion';

function Skills() {
  const skillCategories = [
    {
      title: "Product Management",
      skills: [
        "Product Analysis",
        "Product Innovation",
        "Product Specification",
        "Product Planning",
        "Product Road Mapping",
        "Product PRD",
        "Product Lifecycle Management",
        "Product Launch",
        "Product Marketing",
        "Cross-functional Collaborations"
      ]
    },
    {
      title: "Design",
      skills: [
        "UX Research",
        "Figma",
        "Workflow Diagrams",
        "Conversational AI Design"
      ]
    },
    {
      title: "Technical Skills",
      skills: [
        "API Testing & Development (Postman)",
        "Agile Methodology (Kanban & Scrum)",
        "Data Analytics"
      ]
    },
    {
      title: "AI & Automation Tools",
      skills: [
        "Agentic AI Systems Workflow",
        "Voiceflow",
        "Vector Shift",
        "n8n",
        "Business Process Optimization"
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
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle text-gray-700">Professional Capabilities & Technical Proficiencies</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card card-gradient p-8"
            >
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start text-gray-700">
                    <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mr-3"></span>
                    {skill}
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

export default Skills;