import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="section-title text-center mb-8">Contact</h2>
          
          <div className="card card-gradient p-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                  Get in Touch
                </h3>
                <p className="text-gray-700">
                  I'm always open to discussing product work or partnership opportunities.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Contact Information</h4>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mr-3"></span>
                    Location: Gurgaon, India
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mr-3"></span>
                    Phone: <a href="tel:+919315041645" className="text-blue-600 hover:text-blue-700 ml-1">+91-9315041645</a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mr-3"></span>
                    Email: <a href="mailto:contactsourav96@gmail.com" className="text-blue-600 hover:text-blue-700 ml-1">contactsourav96@gmail.com</a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mr-3"></span>
                    LinkedIn: <a href="https://www.linkedin.com/in/itssouravmondal/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 ml-1">itssouravmondal</a>
                  </li>
                   <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mr-3"></span>
                    Github: <a href="https://github.com/itssouravmondal/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 ml-1">itssouravmondal</a>
                  </li>
                </ul>
              </div>

              <div className="text-center pt-4">
                <a 
                  href="mailto:contactsourav96@gmail.com"
                  className="btn gradient-bg inline-flex items-center px-6 py-3"
                >
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
