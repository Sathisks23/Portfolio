'use client';
import {motion}  from 'framer-motion';
const TestPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center min-h-screen bg-white"
    >
      <motion.h1
        className="text-4xl font-bold text-green-600"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Framer Motion Test
      </motion.h1>
    </motion.div>
  );
};

export default TestPage;
