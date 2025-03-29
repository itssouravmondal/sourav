import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: "Interview Insights: ResumePro ",
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
      title: "GenAI Powered Customer Support Chatbot",
      description: "An intelligent AI assistant designed to provide instant, accurate guidance on music metadata best practices, service offerings, and licensing agreements. By streamlining information delivery and reducing support ticket volume, the chatbot will enhance user experience while ensuring consistency in responses.",
      links: {
        web: "https://example.com/project3",
        doc: "https://example.com/project3/doc",
        ppt: "https://example.com/project3/ppt"
      }
    },
    {
      title: "AI AudioBox: Exploring the World of AI Audio",
      description: "AI AudioBox is a YouTube channel dedicated to showcasing diverse AI-generated and enhanced audio content. From immersive soundscapes to AI-driven narrations, the channel explores the limitless possibilities of artificial intelligence in audio production. Whether it’s voice synthesis, sound design, or AI-powered storytelling, AI AudioBox delivers unique and engaging auditory experiences for listeners and creators alike.",
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
                  className="btn gradient-bg text-sm px-4 py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Doc
                </a>
                <a
                  href={project.links.ppt}
                  className="btn gradient-bg text-sm px-4 py-2"
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
