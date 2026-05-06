import type { Metadata } from "next";
import "./globals.css";
import { RootLayoutClient } from "@/components/RootLayoutClient";

export const metadata: Metadata = {
  title: "Rohan Ghodke | Data Analyst & Power BI Developer",
  description:
    "Portfolio of Rohan Ghodke - Data Analyst with expertise in Power BI, SQL, Python, Machine Learning, and Generative AI.",
  keywords: [
    "Data Analyst",
    "Power BI",
    "SQL",
    "Python",
    "Machine Learning",
    "Dashboard",
  ],
  openGraph: {
    title: "Rohan Ghodke | Data Analyst & Power BI Developer",
    description: "Explore my portfolio, projects, and professional experience.",
    url: "https://rohan-portfolio.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
