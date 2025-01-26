'use client';
import SEO from '@/components/SEO';
import seoData from '@/data/seoData';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const { title, description, url, image, keywords } = seoData.contact;

  // Variants for Framer Motion animations
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.4 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: '#38A169', transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <SEO
        title={title}
        description={description}
        url={url}
        image={image}
        keywords={keywords}
      />
      <motion.section
        className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
       
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto flex flex-col justify-start space-y-6">
          <motion.h1
            className="text-4xl font-extrabold text-green-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Contact Me
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Need a skilled MERN Stack developer? I specialize in building scalable web applications and providing freelance consulting services to help you bring your ideas to life. Whether you need a full-stack web app, API integrations, or project consultation, I am here to help.
          </motion.p>
          
          <motion.p
            className="text-lg text-gray-700"
            initial={false} // Prevents resetting on remount
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            Fill out the form below or send me an email at{' '}
            <a
              href="mailto:your-email@example.com"
              className="text-green-600 hover:text-green-800"
            >
              your-email@example.com
            </a>{' '}
            to discuss your requirements. Let's start building something amazing together!
          </motion.p>

          <motion.form
            action="mailto:your-email@example.com"
            method="POST"
            className="space-y-4"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <motion.div
              className="flex justify-center"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              <button
                type="submit"
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
              >
                Send Message
              </button>
            </motion.div>
          </motion.form>
        </div>
      </motion.section>

      {/* Why Work With Me Section */}
      <motion.section
        className="bg-green-600 text-white py-16 px-4 sm:px-6 lg:px-8"
        initial="false"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold mb-4">Why Work With Me?</h2>
          <p className="text-lg mb-6">
            I bring deep expertise in the MERN stack (MongoDB, Express, React, Node.js) and a passion for delivering high-quality, scalable web solutions. Whether you need a custom-built solution or a team extension, I work closely with you to bring your vision to life.
          </p>
          <ul className="list-disc text-left mx-auto space-y-3 text-gray-200 max-w-3xl">
            <li>✔ Custom MERN stack development tailored to your needs</li>
            <li>✔ Full-stack web development and deployment</li>
            <li>✔ Scalable, secure, and high-performance web apps</li>
            <li>✔ Agile project management and rapid delivery</li>
            <li>✔ Consultation and collaboration with your team</li>
          </ul>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8"
        initial="false"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Let’s Get In Touch!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Ready to take your project to the next level? Don’t hesitate to reach out! Fill out the form above or drop me an email to discuss how we can collaborate and create something impactful together.
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default ContactPage;
