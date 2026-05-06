"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/resume-data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {resumeData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              className="border-l-4 border-primary pl-6 py-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-accent font-semibold">{exp.company}</p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm md:text-right">
                  {exp.duration}
                </span>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="text-sm">
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
