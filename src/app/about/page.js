'use client';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import seoData from '@/data/seoData';

const AboutPage = () => {
  const { title, description, url, image, keywords } = seoData.about;

  // Animation Variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

      {/* About Hero Section */}
      <motion.section
        className="bg-gray-50 py-16 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
          About <span className="text-yellow-500">Me</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          I'm Sathish, a dedicated and passionate MERN Stack Developer with a
          strong focus on delivering efficient and scalable web applications.
          My mission is to help businesses and individuals bring their ideas to
          life with modern, high-performance solutions.
        </p>
      </motion.section>

      {/* Personal Journey Section */}
      <motion.section
        className="bg-white py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            My Journey
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            My journey into development began with a curiosity about how
            websites work. Over the years, I’ve honed my skills in the MERN
            Stack and Next.js, building projects that solve real-world
            problems. From freelancing to working on collaborative teams, every
            experience has deepened my expertise and fueled my passion for
            technology.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When I'm not coding, you'll find me exploring new tools, learning
            robotics, or sharing knowledge through blogging. I believe in the
            power of learning and innovation to drive meaningful change.
          </p>
        </div>
      </motion.section>

      {/* Skills and Expertise Section */}
      <motion.section
        className="bg-gray-50 py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            My Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Here’s what I bring to the table as a professional MERN Stack
            Developer:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Full-Stack Development',
                description:
                  'Building scalable web applications using MongoDB, Express, React, and Node.js.',
              },
              {
                title: 'Next.js Specialization',
                description:
                  'Creating SEO-optimized and high-performance web solutions.',
              },
              {
                title: 'Client Collaboration',
                description:
                  'Collaborating with clients to deliver tailored solutions for their unique needs.',
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-semibold text-green-600 mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-700">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        className="bg-white py-12 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          My Values
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          I strongly believe in delivering quality, transparency, and solutions
          that truly make a difference. These values guide every project I take
          on.
        </p>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="bg-gray-50 py-12 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        id="contact"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Want to Work Together?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Let’s discuss your ideas and create something amazing together. Feel
          free to reach out and get started!
        </p>
        <a
          href="mailto:your-email@example.com"
          className="px-6 py-3 bg-green-500 text-white text-lg font-medium rounded-full shadow-lg hover:bg-green-600 transition"
        >
          Contact Me
        </a>
      </motion.section>
    </>
  );
};

export default AboutPage;
