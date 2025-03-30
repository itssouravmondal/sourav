import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: "Interview Insights: ResumePro ",
      description: "An AI-powered tool designed to revolutionize interview preparation by automatically generating personalized interview questions based on a candidate’s resume. Leveraging advanced resume analysis, ResumePro Interview Insights creates contextually relevant questions tailored to a candidate’s experience, skills, and cultural fit. This tool streamlines the hiring process, ensuring consistency, efficiency, and deeper candidate assessments while reducing the time recruiters spend on manual question creation.",
      links: {
        web: "https://docs.google.com/document/d/e/2PACX-1vTFBgrJLsE_KqqRTZJXZ2eohrtpWUeBSq0fcxGUyjuvgc1ay_jv8mgkjYk40d5w2VN8JJ-uXbK2xG7q/pub",
        doc: "https://docs.google.com/document/d/e/2PACX-1vQp14igr-UqvlgiHyskxnOrcQCu0UrZtIEsPjEYuuGc8QJ4qufREYhB7WJ6mpGKAQ/pub",
        ppt: "https://docs.google.com/presentation/d/e/2PACX-1vRJUEKu2Agrz_tIMCUUgvpJL-WvlzR8ldDHtRhMAAWOzhSm48sjSIjb1YgifOlYxw/pub?start=true&loop=true&delayms=3000"
      }
    },
    {
      title: "Image Generator: VectorGen Spectrum",
      description: "An AI-powered image generation tool built on VectorShift’s Generative AI technology, enabling users to create high-quality, realistic, and artistic images from text, blogs, and articles. Designed for seamless content enhancement, VectorGen Spectrum transforms written concepts into visually compelling visuals, streamlining creative workflows for designers, marketers, and content creators.",
      links: {
        web: "https://docs.google.com/document/d/e/2PACX-1vTFBgrJLsE_KqqRTZJXZ2eohrtpWUeBSq0fcxGUyjuvgc1ay_jv8mgkjYk40d5w2VN8JJ-uXbK2xG7q/pub",
        doc: "https://docs.google.com/document/d/e/2PACX-1vRie7d21CnXD-KpHiCPTy7nA7465zxjQIwiA_rcH5L2PXPQPnu128AFypV8s0k_eQ/pub",
        ppt: "https://docs.google.com/presentation/d/e/2PACX-1vR7pJjP_PrhoQNKEazoP4pfdv5uChTU68zxCCGYfpb57p3ELhtP8tcBjNhjplPYUw/pub?start=true&loop=true&delayms=3000"
      }
    },
    {
      title: "GenAI Powered Customer Support Chatbot",
      description: "An intelligent AI assistant designed to provide instant, accurate guidance on music metadata best practices, service offerings, and licensing agreements. By streamlining information delivery and reducing support ticket volume, the chatbot will enhance user experience while ensuring consistency in responses.",
      links: {
        web: "https://docs.google.com/document/d/e/2PACX-1vTFBgrJLsE_KqqRTZJXZ2eohrtpWUeBSq0fcxGUyjuvgc1ay_jv8mgkjYk40d5w2VN8JJ-uXbK2xG7q/pub",
        doc: "https://docs.google.com/document/d/e/2PACX-1vR4Cp2Ks2PsYIZX7ObmdttO0bWpsOTnDa-iVHKglxXvyxAnVZB8uq9lSEHiLI_TZA/pub",
        ppt: "https://docs.google.com/presentation/d/e/2PACX-1vSQMf-cdUOMuuxTounh3Ppuo_5RrZ0haX98u5UX4IK3RyG1PSigbn099oEqcmZ0gg/pub?start=true&loop=true&delayms=3000"
      }
    },
    {
      title: "AI AudioBox: Exploring the World of AI Audio",
      description: "AI AudioBox is a YouTube channel dedicated to showcasing diverse AI-generated and enhanced audio content. From immersive soundscapes to AI-driven narrations, the channel explores the limitless possibilities of artificial intelligence in audio production. Whether it’s voice synthesis, sound design, or AI-powered storytelling, AI AudioBox delivers unique and engaging auditory experiences for listeners and creators alike.",
      links: {
        web: "https://www.youtube.com/channel/UCLXoept_dMOYcAMiTxj9h7A",
        doc: "https://docs.google.com/document/d/e/2PACX-1vSQrEGT5EnLiVLDQqI20bJST-xMNGNjl1WAPLLDZn1Fm6xUwHAsAZVt6xTRyAhdgz7XhqV1itjNKSGa/pub",
        ppt: "https://www.youtube.com/channel/UCLXoept_dMOYcAMiTxj9h7A"
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
