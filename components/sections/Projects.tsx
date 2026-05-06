"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/resume-data";

const ProjectCard = ({
  title,
  type,
  description,
  tools,
  github,
  demo,
}: {
  title: string;
  type: string;
  description: string;
  tools: string[];
  github: string;
  demo: string;
}) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow h-full flex flex-col"
    whileHover={{ y: -10 }}
  >
    <div className="p-6 flex-1 flex flex-col">
      <p className="text-sm text-accent font-semibold mb-2">{type}</p>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-400 mb-4 flex-1">
        {description}
      </p>

      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
          TOOLS
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
    </div>

    <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 flex gap-3">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 px-4 py-2 bg-primary text-white rounded text-sm font-semibold hover:bg-accent transition-colors text-center"
      >
        GitHub
      </a>
      {demo !== "#" && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 border-2 border-primary text-primary rounded text-sm font-semibold hover:bg-primary hover:text-white transition-colors text-center"
        >
          Demo
        </a>
      )}
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                type={project.type}
                description={project.description}
                tools={project.tools}
                github={project.github}
                demo={project.demo}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
