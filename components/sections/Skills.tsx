"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/resume-data";

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
  <motion.div
    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow"
    whileHover={{ y: -5 }}
  >
    <h3 className="text-lg font-semibold text-primary mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span
          key={idx}
          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-white dark:text-white rounded-full text-sm font-medium"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  const skillCategories = [
    { title: "Programming", skills: resumeData.skills.programming },
    { title: "BI & Analysis", skills: resumeData.skills.biAnalysis },
    { title: "Visualization", skills: resumeData.skills.visualization },
    { title: "Databases", skills: resumeData.skills.databases },
    { title: "Machine Learning", skills: resumeData.skills.ml },
    { title: "Deep Learning", skills: resumeData.skills.deepLearning },
    { title: "Libraries", skills: resumeData.skills.libraries },
    { title: "Tools", skills: resumeData.skills.tools },
    { title: "AI & Modern", skills: resumeData.skills.ai },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <SkillCard title={category.title} skills={category.skills} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
