"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { resumeData } from "@/lib/resume-data";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden pt-20 flex items-center justify-center"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left side - Text Content */}
          <motion.div
            className="order-2 md:order-1"
            variants={containerVariants}
          >
            {/* Animated "Welcome" badge */}
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-block"
            >
              <div className="px-4 py-2 rounded-full border border-primary/50 dark:border-primary/30 bg-primary/10 dark:bg-primary/5 backdrop-blur">
                <p className="text-sm font-semibold text-primary dark:text-primary animate-pulse">
                  ✨ Welcome to my portfolio
                </p>
              </div>
            </motion.div>

            {/* Main heading with gradient text */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-6 font-heading"
            >
              <span className="gradient-text animate">Rohan Ghodke</span>
            </motion.h1>

            {/* Animated subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            >
              Data Analyst | Power BI Developer | ML Enthusiast
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            >
              Transforming raw data into actionable insights through interactive dashboards,
              advanced analytics, and machine learning. Passionate about building data-driven
              solutions that drive business growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 flex-wrap mb-8"
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-gray-300 dark:bg-gray-600 text-black dark:text-black rounded-xl font-semibold btn-modern hover-lift shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
              </motion.a>
              <motion.a
                href={resumeData.resumeUrl}
                download
                className="px-8 py-4 border-2 border-primary text-primary dark:text-primary rounded-xl font-semibold hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-dark transition-all btn-modern hover-lift"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6"
            >
              {[
                {
                  icon: "linkedin",
                  href: resumeData.linkedin,
                  label: "LinkedIn",
                  path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                },
                {
                  icon: "github",
                  href: resumeData.github,
                  label: "GitHub",
                  path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                },
                {
                  icon: "email",
                  href: `mailto:${resumeData.email}`,
                  label: "Email",
                  path: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  target={social.icon !== "email" ? "_blank" : undefined}
                  rel={social.icon !== "email" ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-full border border-primary/50 text-primary hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-dark transition-all hover-lift"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.path} />
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Profile Photo */}
          <motion.div
            className="order-1 md:order-2 flex justify-center md:justify-end"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Glow background circles */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Photo container with neon border */}
              <div className="absolute inset-0 rounded-3xl neon-border overflow-hidden">
                <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 dark:from-dark-secondary dark:to-dark-tertiary flex items-center justify-center">
                  {/* Replace with your actual image */}
                  <Image
                    src="/profile.jpeg"
                    alt="Rohan Ghodke"
                    fill
                    className="object-cover"
                    priority
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  
                  {/* Placeholder icon if no image */}
                  <div className="text-6xl text-primary/50">👨‍💼</div>
                </div>
              </div>

              {/* Floating accent circles */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-2 border-primary opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border-2 border-secondary opacity-30"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex justify-center"
        >
          <div className="p-2 rounded-full border border-primary/30 text-primary">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
