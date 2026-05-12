"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/resume-data";
import { useEffect, useState } from "react";

const StatCard = ({
  icon,
  value,
  label,
  index,
}: {
  icon: string;
  value: string;
  label: string;
  index: number;
}) => {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const numericValue = parseInt(value);
    if (!isNaN(numericValue)) {
      let current = 0;
      const increment = Math.ceil(numericValue / 30);
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(current.toString());
        }
      }, 30);
      return () => clearInterval(timer);
    } else {
      setDisplayValue(value);
    }
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 p-8 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        {/* Gradient background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10">
          <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>

          <div className="space-y-2">
            <motion.div
              key={displayValue}
              className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              {displayValue}
            </motion.div>

            <p className="text-gray-600 dark:text-gray-400 font-medium">
              {label}
            </p>
          </div>
        </div>

        {/* Border animation on hover */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

export default function ProfessionalStats() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Key metrics that demonstrate my expertise in data analytics and business intelligence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resumeData.stats.map((stat, idx) => (
            <StatCard
              key={idx}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
