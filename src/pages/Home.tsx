import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  const sections = [
    {
      title: "Education",
      items: [
        {
          name: "B.Sc. Computer Science",
          description: "Vidyasagar University, West Bengal",
          duration: "2015 - 2018"
        },
        {
          name: "Higher Secondary Education",
          description: "Jhakra High School, West Bengal",
          duration: "2012 - 2014"
        }
      ],
      link: "/education"
    },
    {
      title: "Experience",
      items: [
        {
          name: "Streamlloom Micro Enterprise",
          description: "Founder",
          duration: "Jan 2025 - Present"
        },
        {
          name: "Songdew Media Private Limited",
          description: "Product Executive",
          duration: "July 2023 - Dec 2024"
        },
        {
          name: "Mitha Interior Design & Construction",
          description: "Digital Marketing Specialist",
          duration: "Nov 2021 - May 2022"
        }
      ],
      link: "/experience"
    },
    {
      title: "Projects",
      items: [
        {
          name: "ResumePro",
          description: "For interview preparation",
          link: "/projects"
        },
        {
          name: "VectorGen Spectrum",
          description: "AI Image Generator Tool",
          link: "/projects"
        },
        {
          name: "AI AudioBox: YouTube Channel",
          description: "AI-powered storytelling",
          year: "2025"
        }
      ],
      link: "/projects"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section overflow-hidden">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-8 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-600 to-purple-600">
                <img 
                  src="/profile.png" 
                  alt="Sourav Mondal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
             {/* Social Links */}
<div className="flex space-x-4 justify-center">
   {/* LinkedIn */}
  <a 
    href="https://www.linkedin.com/in/itssouravmondal/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-blue-600 transition duration-300"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect width="4" height="12" x="2" y="9"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  </a>
  {/* GitHub */}
  <a 
    href="https://github.com/itssouravmondal/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-blue-600 transition duration-300"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  </a>

  {/* Email */}
  <a 
    href="mailto:contactsourav96@gmail.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-blue-600 transition duration-300"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="M2 4l10 8 10-8"></path>
    </svg>
  </a>
</div>
            <h1 className="section-title mb-6">
              Sourav Mondal
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              AI-Powered Product Innovation | Business Growth & Automation | Data-Driven Decision Making
            </p>
            <p className="text-lg text-gray-700 mb-8">
              As an aspiring Digital Product Manager, I am passionate about transforming business workflows through product innovation and AI-driven solutions. With a background in product management, operations, digital marketing, and data management, I bring a strategic approach to building impactful digital products.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/projects" className="btn gradient-bg">
                View Projects
              </Link>
              <Link to="/contact" className="btn gradient-bg">
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="card card-gradient"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.items.slice(0, 2).map((item, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                        <h3 className="font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-gray-700 text-sm">
                          {item.description}
                        </p>
                        {'duration' in item ? (
                          <p className="text-sm text-blue-600 mt-1">
                            {item.duration}
                          </p>
                        ) : null}
                        {'link' in item ? (
                          <a 
                            href={item.link} 
                            className="text-sm text-purple-600 hover:text-purple-700 mt-1 inline-block"
                          >
                            View Project →
                          </a>
                        ) : null}
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={section.link}
                    className="mt-4 inline-block text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View All {section.title} →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section gradient-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg mb-8">
              Interested in building something amazing product? Let's discuss how we can work together and make it happen.
            </p>
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
