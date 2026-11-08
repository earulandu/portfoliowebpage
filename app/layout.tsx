import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Elijah Arulandu", template: "%s · Elijah Arulandu" },
  description:
    "Applied mathematics graduate and Purdue Master of Business and Technology student. Research, projects, awards, skills and contact information.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Nav />
        <main className="fade-up mx-auto w-full max-w-3xl flex-1 px-5 pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
