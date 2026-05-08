"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { resumeData } from "@/lib/resume-data";

const DashboardGalleryItem = ({
  title,
  description,
  category,
  tools,
  keyMetrics,
  insights,
  embedUrl,
  onExpand,
}: {
  title: string;
  description: string;
  category: string;
  tools: string[];
  keyMetrics: string[];
  insights: string;
  embedUrl: string;
  onExpand: () => void;
}) => (
  <motion.div
    className="group cursor-pointer h-full"
    whileHover={{ y: -8 }}
    onClick={onExpand}
  >
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full flex flex-col">
      {/* Embed Preview */}
      {embedUrl && (
        <div className="relative w-full h-64 bg-gray-200 dark:bg-gray-700 overflow-hidden group-hover:scale-105 transition-transform">
          <iframe
            src={embedUrl}
            className="w-full h-full border-0 pointer-events-none"
            title={`${title} Preview`}
          ></iframe>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-white font-semibold">Expand Dashboard</span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-sm text-accent font-semibold mb-2">{category}</p>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm">
          {description}
        </p>

        <div className="mb-3">
          <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
            KEY METRICS
          </p>
          <div className="flex flex-wrap gap-2">
            {keyMetrics.map((metric, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
            TECHNOLOGIES
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded p-3 mt-auto">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Insights:</span> {insights}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function PowerBIDashboards() {
  const [expandedDashboard, setExpandedDashboard] = useState<string | null>(null);

  const selected = resumeData.powerBIDashboards.find(
    (d) => d.title === expandedDashboard
  );

  return (
    <>
      <section id="dashboards" className="py-20 bg-gray-50 dark:bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Power BI Dashboards
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Interactive dashboards delivering real-time insights and actionable
            business intelligence
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {resumeData.powerBIDashboards.map((dashboard, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <DashboardGalleryItem
                  title={dashboard.title}
                  description={dashboard.description}
                  category={dashboard.category}
                  tools={dashboard.tools}
                  keyMetrics={dashboard.keyMetrics}
                  insights={dashboard.insights}
                  embedUrl={dashboard.embedUrl}
                  onExpand={() => setExpandedDashboard(dashboard.title)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal for Dashboard */}
      {selected && selected.embedUrl && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setExpandedDashboard(null)}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-lg w-full max-w-7xl max-h-[90vh] flex flex-col"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selected.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  {selected.description}
                </p>
              </div>
              <button
                onClick={() => setExpandedDashboard(null)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 p-2 text-2xl"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src={selected.embedUrl}
                className="w-full h-full border-0"
                allowFullScreen
                title={selected.title}
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
