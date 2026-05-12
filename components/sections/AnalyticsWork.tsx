"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/resume-data";

const AnalyticsCard = ({
  title,
  description,
  image,
  technologies,
  kpis,
  projectUrl,
  dashboardUrl,
  index,
}: {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  kpis: string[];
  projectUrl: string;
  dashboardUrl: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>

          <p className="text-gray-400 text-sm mb-4 flex-grow">
            {description}
          </p>

          {/* KPI Tags */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {kpis.map((kpi, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 rounded-full text-xs font-semibold hover:border-blue-400 transition-colors"
                >
                  {kpi}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs border border-gray-600 hover:border-gray-500 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <motion.a
              href={projectUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all text-center"
            >
              View Project
            </motion.a>
            <motion.a
              href={dashboardUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 border-2 border-blue-500 text-blue-400 rounded-lg text-sm font-semibold hover:bg-blue-500/10 transition-all text-center"
            >
              Dashboard
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function AnalyticsWork() {
  return (
    <section id="analytics" className="py-20 bg-black dark:bg-gray-950">
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
              📊 Analytics Expertise
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Analytics{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Work
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional Power BI dashboards and analytics solutions delivering real-time insights and actionable business intelligence
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.analyticsWork.map((work, idx) => (
            <AnalyticsCard
              key={idx}
              title={work.title}
              description={work.description}
              image={work.image}
              technologies={work.technologies}
              kpis={work.kpis}
              projectUrl={work.projectUrl}
              dashboardUrl={work.dashboardUrl}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
