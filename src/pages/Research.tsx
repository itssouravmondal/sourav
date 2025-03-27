import { motion } from 'framer-motion';

function Research() {
  const researchProjects = [
    {
      title: "Opportunity Identification: Music Distribution in India ",
      description: "A strategic analysis of the evolving Indian music distribution landscape, highlighting key opportunities for a new entrant. This report examines industry trends, competitive dynamics, and growth potential, offering actionable insights to establish a strong market presence. With digital platforms driving music consumption, the report explores how a modern distribution organization can leverage emerging opportunities, cater to regional markets, and differentiate through specialized services.",
      links: {
        web: "https://example.com/research1",
        doc: "https://example.com/research1/doc",
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
        doc: "https://example.com/research3/doc",
        ppt: "https://example.com/research3/ppt"
      }
    },
    {
      title: "AI-Driven Music Artwork Generation: System Architecture",
      description: "An advanced AI-powered system that transforms musical elements into visually compelling album artwork. Using GPT-4o for sentiment analysis, VectorShift for prompt optimization, and DALL-E 3 for image generation, the system creates high-resolution visuals aligned with lyrics, mood, and genre.

While the architecture is robust, enhancing sentiment interpretation and user feedback can further improve output quality. Business opportunities through API integration and subscription models offer potential for commercialization.",
      links: {
        web: "https://example.com/research4",
        doc: "https://example.com/research4/doc",
        ppt: "https://example.com/research4/ppt"
      }
    },
    {
      title: "Digital Transformation in Music Distribution",
      description: "Analysis of digital transformation trends in music distribution, including streaming platforms, blockchain technology, and automated royalty systems.",
      links: {
        web: "https://example.com/research5",
        doc: "https://example.com/research5/doc",
        ppt: "https://example.com/research5/ppt"
      }
    },
    {
      title: "Future of Music Marketing",
      description: "Comprehensive study on emerging trends and technologies in music marketing, including social media strategies, AI-driven promotion, and audience engagement techniques.",
      links: {
        web: "https://example.com/research6",
        doc: "https://example.com/research6/doc",
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
