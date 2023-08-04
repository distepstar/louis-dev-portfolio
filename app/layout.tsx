import { Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Louis Dev 🚀 - Frontend Developer",
  description: "Louis Lei - A frontend developer and game developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-slate-950 to-slate-700">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
