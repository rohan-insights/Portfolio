"use client";

import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ThemeToggle from "./ThemeToggle";
import ScrollToTop from "./ScrollToTop";

export function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldBeDark = theme === "dark" || (!theme && prefersDark);
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
    if (newIsDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-dark transition-colors">
      <Navigation />
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
}
