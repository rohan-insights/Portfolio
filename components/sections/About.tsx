"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/resume-data";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {resumeData.objective}
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Education</h3>
                  {resumeData.education.map((edu, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-gray-400">
                      <strong>{edu.degree}</strong> • {edu.institution} ({edu.year})
                    </p>
                  ))}
                </div>

                <div>
                  <h3 className="font-semibold text-primary mb-2">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {resumeData.location}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-primary mb-2">Languages</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    English, Marathi, Hindi
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
              <ul className="space-y-4">
                {resumeData.softSkills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent">✓</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
