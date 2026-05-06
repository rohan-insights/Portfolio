"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/resume-data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {resumeData.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg border-l-4 border-primary"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {cert.name}
              </h3>
              <p className="text-accent font-semibold mb-2">{cert.issuer}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {cert.duration}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
