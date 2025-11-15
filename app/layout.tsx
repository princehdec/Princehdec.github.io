import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Prince Sharma - 3D Environment Artist",
  description: "Portfolio of Prince Sharma (Princezoid), a 3D artist specializing in environments, props, and AR/VR assets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body bg-gradient-to-br from-dark-bg via-purple-900 to-dark-bg text-dark-text min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}