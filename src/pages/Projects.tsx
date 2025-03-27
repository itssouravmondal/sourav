import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: "ResumePro Interview Insights",
      description: "An AI-powered tool designed to revolutionize interview preparation by automatically generating personalized interview questions based on a candidate’s resume. Leveraging advanced resume analysis, ResumePro Interview Insights creates contextually relevant questions tailored to a candidate’s experience, skills, and cultural fit. This tool streamlines the hiring process, ensuring consistency, efficiency, and deeper candidate assessments while reducing the time recruiters spend on manual question creation.",
      links: {
        web: "https://example.com/project1",
        doc: "https://example.com/project1/doc",
        ppt: "https://example.com/project1/ppt"
      }
    },
    {
      title: "Image Generator: VectorGen Spectrum",
      description: "An AI-powered image generation tool built on VectorShift’s Generative AI technology, enabling users to create high-quality, realistic, and artistic images from text, blogs, and articles. Designed for seamless content enhancement, VectorGen Spectrum transforms written concepts into visually compelling visuals, streamlining creative workflows for designers, marketers, and content creators.",
      links: {
        web: "https://example.com/project2",
        doc: "https://example.com/project2/doc",
        ppt: "https://example.com/project2/ppt"
      }
    },
    {
      title: "Descriptive Analysis of Music Distribution",
      description: "Designed interactive dashboards using Google Data Studio for KPI tracking, identifying recurring distribution artists, analyzing distribution volume, and enhancing the music distribution process and management.",
      links: {
        web: "https://example.com/project3",
        doc: "https://example.com/project3/doc",
        ppt: "https://example.com/project3/ppt"
      }
    },
    {
      title: "Product Discovery Using Sentiment Analysis",
      description: "Conducted sentiment analysis for product discovery and market research, helping to identify user needs and improve product offerings.",
      links: {
        web: "https://example.com/project4",
        doc: "https://example.com/project4/doc",
        ppt: "https://example.com/project4/ppt"
      }
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
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Innovative Solutions & Technical Achievements</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card card-gradient p-6"
            >
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {project.description}
              </p>
              <div className="flex space-x-4 mt-auto">
                <a
                  href={project.links.web}
                  className="btn gradient-bg text-sm px-4 py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Web
                </a>
                <a
                  href={project.links.doc}
                  className="btn bg-secondary hover:bg-secondary-dark text-sm px-4 py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Doc
                </a>
                <a
                  href={project.links.ppt}
                  className="btn bg-secondary hover:bg-secondary-dark text-sm px-4 py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View PPT
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;