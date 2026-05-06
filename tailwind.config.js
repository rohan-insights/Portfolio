/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00d9ff", // Cyan - vibrant accent
        accent: "#ff006e", // Magenta
        secondary: "#b537f2", // Electric Purple
        neon: "#00ff88", // Neon Green
        dark: "#0a0a0a",
        "dark-secondary": "#1a1a2e",
        "dark-tertiary": "#16213e",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
        heading: ["Plus Jakarta Sans", "Poppins", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "magnetic": "magnetic 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(0, 217, 255, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 217, 255, 0.8)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", textShadow: "0 0 5px rgba(0, 217, 255, 0.5)" },
          "50%": { opacity: "0.8", textShadow: "0 0 20px rgba(0, 217, 255, 0.8)" },
        },
        magnetic: {
          "0%": { transform: "translate(0)" },
          "100%": { transform: "translate(10px, -5px)" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 10px rgba(0, 217, 255, 0.3)",
        "glow-md": "0 0 20px rgba(0, 217, 255, 0.5)",
        "glow-lg": "0 0 30px rgba(0, 217, 255, 0.7)",
        "neon": "0 0 10px rgba(255, 0, 110, 0.5)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
