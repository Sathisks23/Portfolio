'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const BlogPageClient = ({ posts, currentPage, totalPages }) => {
  const [postData, setPostData] = useState(posts);

  useEffect(() => {
    // Update data if posts change when navigating back to this page
    setPostData(posts);
  }, [posts]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const postVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3, duration: 0.8 } },
  };

  return (
    <motion.div
      className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8"
      initial="false"
      animate="visible"
      variants={containerVariants}
    >
      <AnimatePresence>
        {postData?.map((post) => (
          <motion.div
            key={post.slug}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.03 }}
            variants={postVariants}
            initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
            exit={{ opacity: 0 }} // ensures exit animation when unmounting
          >
            <Link href={`/blog/${post.slug}`}>
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover mb-4"
                />
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-green-600 mb-2 hover:text-green-800 transition">{post.title}</h2>
                <p className="text-gray-600 text-sm">{post.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="flex justify-center items-center mt-12 space-x-6">
        {currentPage > 1 && (
          <Link
            href={`/blog?page=${currentPage - 1}`}
            className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            Previous
          </Link>
        )}
        <span className="text-gray-700 font-medium text-lg">
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && (
          <Link
            href={`/blog?page=${currentPage + 1}`}
            className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            Next
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default BlogPageClient;
