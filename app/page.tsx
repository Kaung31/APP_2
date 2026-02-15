"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="p-8 max-w-[1400px] mx-auto space-y-20"
    >
      {/* Hero Section */}
      <motion.section 
        className="text-center space-y-6 pt-20 pb-10"
        variants={fadeInUp}
      >
        <motion.h1 
          className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Discover Amazing Apps
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          Explore curated collections of the best applications for your needs
        </motion.p>
        
        {/* Search Bar */}
        <motion.div 
          className="max-w-2xl mx-auto mt-8"
          variants={fadeInUp}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search apps..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 text-lg"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </motion.div>
      </motion.section>

      {/* Featured Apps Grid */}
      <motion.section 
        className="space-y-8"
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-4xl font-bold text-center"
          variants={fadeInUp}
        >
          Featured Apps
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">App {item}</h3>
                <p className="text-gray-600">
                  Amazing application that helps you achieve your goals with ease and efficiency.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">★★★★★ 4.8</span>
                  <motion.button
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Categories Section */}
      <motion.section 
        className="space-y-8"
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-4xl font-bold text-center"
          variants={fadeInUp}
        >
          Browse by Category
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={staggerContainer}
        >
          {["Productivity", "Entertainment", "Education", "Health", "Finance", "Social", "Tools", "Games"].map((category) => (
            <motion.div
              key={category}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 text-center cursor-pointer hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold text-lg">{category}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        variants={fadeInUp}
      >
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          variants={staggerContainer}
        >
          {[
            { number: "10,000+", label: "Apps Listed" },
            { number: "50,000+", label: "Active Users" },
            { number: "4.9", label: "Average Rating" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
            >
              <motion.div 
                className="text-5xl font-bold mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              >
                {stat.number}
              </motion.div>
              <div className="text-blue-100 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="text-center space-y-6 py-20"
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join thousands of users who discover amazing apps every day
        </p>
        <motion.button
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Now
        </motion.button>
      </motion.section>
    </motion.div>
  );
}
