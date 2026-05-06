"use client";

import { ReactNode } from "react";

interface ModernCardProps {
  children: ReactNode;
  className?: string;
  hoverlift?: boolean;
}

/**
 * Modern Card with glass effect
 */
export function ModernCard({
  children,
  className = "",
  hoverlift = true,
}: ModernCardProps) {
  return (
    <div
      className={`glass rounded-2xl p-6 ${hoverlift ? "hover-lift" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Gradient Button Component
 */
export function GradientButton({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold btn-modern hover-lift transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * Neon Border component
 */
export function NeonBorder({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`neon-border rounded-xl p-6 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Animated Section Title
 */
export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-4xl md:text-5xl font-bold font-heading mb-4 gradient-text ${className}`}>
      {children}
    </h2>
  );
}

/**
 * Badge Component
 */
export function Badge({
  children,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}) {
  const variants = {
    primary: "bg-primary/10 text-primary border-primary/30",
    secondary: "bg-secondary/10 text-secondary border-secondary/30",
    accent: "bg-accent/10 text-accent border-accent/30",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
