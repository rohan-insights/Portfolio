"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/resume-data";
import { useState } from "react";

const CertificateCard = ({
  certificate,
  index,
  onSelect,
}: {
  certificate: (typeof resumeData.certifications)[0];
  index: number;
  onSelect: (cert: (typeof resumeData.certifications)[0]) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={() => onSelect(certificate)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-300 aspect-[9/12]">
        {/* Certificate Image */}
        <img
          src={certificate.imageUrl}
          alt={certificate.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Info on hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-lg font-bold text-white mb-2">{certificate.name}</h3>
          <p className="text-sm text-blue-300 font-semibold mb-1">{certificate.issuer}</p>
          <p className="text-xs text-gray-400">{certificate.duration}</p>
        </div>

        {/* View Indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-white text-4xl"
          >
            🔍
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<(typeof resumeData.certifications)[0] | null>(null);

  return (
    <>
      <section id="certifications" className="py-20 bg-gradient-to-b from-black to-gray-950 dark:from-gray-950 dark:to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full mb-4"
            >
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                🏆 Certifications
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Industry-recognized credentials and professional development achievements
            </p>
          </motion.div>

          {/* Certificate Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {resumeData.certifications.map((cert, idx) => (
              <CertificateCard
                key={idx}
                certificate={cert}
                index={idx}
                onSelect={setSelectedCert}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Fullscreen Modal */}
      {selectedCert && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            className="relative bg-gray-900 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-gray-700"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors"
            >
              ✕
            </motion.button>

            {/* Certificate Image */}
            {selectedCert.imageUrl && (
              <div className="w-full">
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.name}
                  className="w-full h-auto rounded-t-2xl"
                />
              </div>
            )}

            {/* Certificate Details */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                {selectedCert.name}
              </h2>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">
                    Issuing Organization
                  </p>
                  <p className="text-lg text-blue-400 font-semibold">
                    {selectedCert.issuer}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">
                    Completion Date
                  </p>
                  <p className="text-lg text-gray-300">{selectedCert.duration}</p>
                </div>
              </div>

              {/* Skills */}
              {selectedCert.skills && selectedCert.skills.length > 0 && (
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-3">
                    Skills Gained
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-semibold hover:border-blue-400 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              {/* Download Button */}
              {selectedCert.certificateUrl && (
                <motion.a
                  href={selectedCert.certificateUrl}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-8 w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all text-center"
                >
                  📥 Download Certificate PDF
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
