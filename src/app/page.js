'use client';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import seoData from '../data/seoData';

const HomePage = () => {
  const { title, description, url, image, keywords } = seoData.homepage;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.4, duration: 0.8 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
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

      {/* Hero Section */}
      <motion.div
        className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-green-600 mb-4"
          variants={textVariants}
        >
          Welcome to <span className="text-yellow-500">Sathish Diaries</span>!
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-6"
          variants={textVariants}
        >
          Your one-stop solution for MERN stack development, freelancing, and Next.js expertise.
        </motion.p>

        <motion.a
          href="#contact"
          className="px-6 py-3 bg-green-500 text-white text-lg font-medium rounded-full shadow-lg hover:bg-green-600 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Work with Me
        </motion.a>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="bg-gray-50 py-12 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          What I Offer
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore my range of services tailored to meet your project needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'MERN Stack Development',
              description:
                'Full-stack web applications with MongoDB, Express, React, and Node.js.',
            },
            {
              title: 'Next.js Expertise',
              description:
                'Build performant and scalable applications using Next.js and modern tools.',
            },
            {
              title: 'Freelancing Projects',
              description:
                'Delivering high-quality projects tailored to your specific requirements.',
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-green-600 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="bg-white py-12 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          What My Clients Say
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {[
            {
              name: 'John Doe',
              feedback:
                'Sathish exceeded expectations by delivering a top-notch Next.js project!',
            },
            {
              name: 'Jane Smith',
              feedback:
                'Highly professional and skilled in MERN stack development. Highly recommend!',
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 shadow-md rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <p className="italic text-gray-700 mb-4">"{testimonial.feedback}"</p>
              <h4 className="text-lg font-medium text-green-600">
                - {testimonial.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="bg-gray-50 py-12 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        id="contact"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Let's Work Together
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Got a project in mind? Reach out, and let's make it happen.
        </p>
        <a
          href="mailto:your-email@example.com"
          className="px-6 py-3 bg-green-500 text-white text-lg font-medium rounded-full shadow-lg hover:bg-green-600 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </>
  );
};

export default HomePage;
