import { motion } from 'framer-motion';

function Education() {
  const education = [
    {
      degree: "B.Sc. Computer Science",
      institution: "Vidyasagar University",
      location: "West Bengal",
      duration: "2015 - 2018",
      description: "Focused on core computer science concepts, data structures, and software development principles.",
      achievements: [
        "Graduated with Honours",
        "Served as President of the Student Union",
        "Developed final-year project on Cold Storage Management"
      ]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Jhakra High School",
      location: "West Bengal",
      duration: "2012 - 2014",
      description: "Completed Higher Secondary education with focus on Science and Mathematics.",
      achievements: [
        "Achieved distinction in Mathematics and Computer Science",
        "Active participant in school's technical club",
        "Organized technical workshops for juniors"
      ]
    }
  ];

  return (
    <div className="section overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic Background & Achievements</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card card-gradient p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-600 mt-1">{edu.institution}</p>
                </div>
                <span className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 font-medium">
                  {edu.duration}
                </span>
              </div>

              <p className="text-gray-600 mb-4">{edu.description}</p>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Key Achievements:</h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mr-3"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
