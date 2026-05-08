"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/resume-data";
import { useState } from "react";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof resumeData.certifications[0] | null>(null);

  return (
    <>
      <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Certifications & Achievements
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {resumeData.certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg border-l-4 border-primary hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-accent font-semibold mb-2">{cert.issuer}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {cert.duration}
                </p>

                {cert.description && (
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {cert.description}
                  </p>
                )}

                {cert.skills && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
                      SKILLS GAINED
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex-1 px-4 py-2 bg-primary text-white rounded text-sm font-semibold hover:bg-accent transition-colors"
                  >
                    View Certificate
                  </button>
                  {cert.certificateUrl && (
                    <a
                      href={cert.certificateUrl}
                      download
                      className="flex-1 px-4 py-2 border-2 border-primary text-primary rounded text-sm font-semibold hover:bg-primary hover:text-white transition-colors text-center"
                    >
                      Download
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-900">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedCert.name}
              </h2>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              {selectedCert.imageUrl && (
                <div className="mb-6">
                  <img
                    src={selectedCert.imageUrl}
                    alt={selectedCert.name}
                    className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
                  />
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Issuing Organization</h3>
                  <p className="text-gray-700 dark:text-gray-300">{selectedCert.issuer}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Duration</h3>
                  <p className="text-gray-700 dark:text-gray-300">{selectedCert.duration}</p>
                </div>

                {selectedCert.description && (
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
                    <p className="text-gray-700 dark:text-gray-300">{selectedCert.description}</p>
                  </div>
                )}

                {selectedCert.skills && (
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Skills Gained</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedCert.certificateUrl && (
                  <div className="pt-4">
                    <a
                      href={selectedCert.certificateUrl}
                      download
                      className="inline-block w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-red-300 rounded-lg font-semibold hover:shadow-lg transition-all text-center"
                    >
                      Download Certificate PDF
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
