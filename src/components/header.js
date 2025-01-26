'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Header = () => {
  const pathname = usePathname();

  // Active link checker
  const isActive = (path) => pathname === path;

  return (
    <motion.header
      className="flex items-center justify-between px-8 py-4 shadow-md bg-white"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <motion.div
        className="text-xl font-semibold text-gray-800 cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <Link href="/">Sathish Diaries</Link>
      </motion.div>

      {/* Navigation Links */}
      <nav className="flex gap-6">
        {[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
          { name: 'Blog', href: '/blog' },
          { name: 'Contact', href: '/contact' },
        ].map((link) => (
          <Link key={link.href} href={link.href}>
            <div className="relative group">
              {/* Link Text */}
              <span
                className={`text-base font-medium ${
                  isActive(link.href)
                    ? 'text-green-600'
                    : 'text-gray-600 group-hover:text-green-600'
                }`}
              >
                {link.name}
              </span>
              {/* Active Indicator */}
              {isActive(link.href) && (
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-green-600 rounded-full"
                  layoutId="underline"
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                />
              )}
            </div>
          </Link>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;
