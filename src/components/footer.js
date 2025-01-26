'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="flex flex-col items-center justify-center gap-4 p-4 bg-green-500 text-white border-t-2"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Social Media Links */}
      <motion.div className="flex gap-6">
        {[
          { name: 'Facebook', link: 'https://facebook.com' },
          { name: 'Twitter', link: 'https://twitter.com' },
          { name: 'Instagram', link: 'https://instagram.com' },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors font-medium"
            whileHover={{ scale: 1.1, color: '#FFEB3B' }}
            whileTap={{ scale: 0.9 }}
          >
            {item.name}
          </motion.a>
        ))}
      </motion.div>

      {/* Copyright Section */}
      <motion.p
        className="text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        © {new Date().getFullYear()} Sathish Diaries. All rights reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
