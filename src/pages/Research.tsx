import { motion } from 'framer-motion';

function Research() {
  const researchProjects = [
    {
      title: "Opportunity Identification: Music Distribution in India ",
      description: "A strategic analysis of the evolving Indian music distribution landscape, highlighting key opportunities for a new entrant. This report examines industry trends, competitive dynamics, and growth potential, offering actionable insights to establish a strong market presence. With digital platforms driving music consumption, the report explores how a modern distribution organization can leverage emerging opportunities, cater to regional markets, and differentiate through specialized services.",
      links: {
        web: "https://example.com/research1",
        doc: "https://docs.google.com/document/d/e/2PACX-1vRV3VR4jRICY6NR1lyT3BmKP-x8n2hFwJVGxIbb676SnXnLJhrk-caAWEvn3GqvMQ/pub",
        ppt: "https://example.com/research1/ppt"
      }
    },
    {
      title: "Descriptive Analysis of Music Distribution (Songdew)",
      description: "Designed and implemented interactive dashboards in Google Data Studio to provide real-time insights into key performance indicators (KPIs) for music distribution. By visualizing data effectively, this solution enhances the efficiency of the distribution process, optimizes resource allocation, and supports data-driven decision-making for improved artist reach and revenue growth.",
      links: {
        web: "https://example.com/research2",
        doc: "https://example.com/research2/doc",
        ppt: "https://example.com/research2/ppt"
      }
    },
    {
      title: "Product Discovery Using Sentiment (Qualitative Analysis): Netflix",
      description: "A qualitative analysis of user feedback on Netflix, highlighting key strengths and improvement areas. While users appreciate offline viewing, personalized recommendations, and high-quality streaming, they report challenges with app stability, interface navigation, and content availability. Addressing these issues and implementing user-requested features like enhanced playback controls and expanded payment options can significantly boost user satisfaction. The insights provide actionable recommendations to refine Netflix’s platform and enhance engagement.",
      links: {
        web: "https://example.com/research3",
        doc: "https://docs.google.com/document/d/e/2PACX-1vTBMlPv5q_TAljZjPwKOTNJMt5OMwl5Hi1eVVdy5OwEh-4oWpuIwqVXLbqOjhqfuw/pub",
        ppt: "https://example.com/research3/ppt"
      }
    },
    {
      title: "AI-Driven Music Artwork Generation: System Architecture & Technical Framework",
      description: "An advanced AI-powered system that transforms musical elements into visually compelling album artwork. Using GPT-4o for sentiment analysis, VectorShift for prompt optimization, and DALL-E 3 for image generation, the system creates high-resolution visuals aligned with lyrics, mood, and genre. While the architecture is robust, enhancing sentiment interpretation and user feedback can further improve output quality. Business opportunities through API integration and subscription models offer potential for commercialization.",
      links: {
        web: "https://example.com/research4",
        doc: "https://docs.google.com/document/d/e/2PACX-1vSuD2CvGzBveXsjjDLIQD1V0-Mafuxs0paEyPEivagHtUbBe-Ao08Hs09EUNexgiA/pub",
        ppt: "https://example.com/research4/ppt"
      }
    },
    {
      title: "ResumePro Interview Insights",
      description: "An AI-powered interview preparation tool that automatically generates personalized interview questions based on a candidate’s resume. By leveraging advanced resume analysis, ResumePro ensures contextually relevant, skill-focused, and role-specific questions, enhancing interview quality while reducing recruiter workload. Built on the VectorShift no-code platform, it streamlines the hiring process, ensuring consistency, efficiency, and deeper candidate assessments.",
      links: {
        web: "https://example.com/research5",
        doc: "https://docs.google.com/document/d/e/2PACX-1vRncLG51WQQScK7RZMtRYenhk_sgBCVtwpMuV4zclEhDt2RIY9r-bdp8qSw6TfkPg/pub",
        ppt: "https://example.com/research5/ppt"
      }
    },
    {
      title: "Transforming Business Workflows With AI Automation & Agentic AI Systems",
      description: "By 2025, AI-driven workflow automation has become a core driver of business transformation, enhancing efficiency, innovation, and scalability across industries. Organizations leveraging AI automation and agentic AI systems experience higher productivity, smarter decision-making, and streamlined operations. This report explores how AI-powered workflows are redefining business processes, operational strategies, and enterprise agility, providing actionable insights into implementation, benefits, and real-world applications of intelligent automation.",
      links: {
        web: "https://example.com/research6",
        doc: "https://docs.google.com/document/d/e/2PACX-1vTtAHqaX_a_OaTzsxjLP4jt1oGNkdnu_YPqDw4Kh0BivTDNI8QhV4rui7k6oW2wHQ/pub",
        ppt: "https://example.com/research6/ppt"
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
          <h2 className="section-title">Research & Analysis</h2>
          <p className="section-subtitle">Exploring Innovation Through Research</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {researchProjects.map((project, index) => (
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
                  View Project
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

export default Research;
