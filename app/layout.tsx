import "./globals.css";
import { Space_Grotesk, Inter } from "next/font/google";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";

const space = Space_Grotesk({ subsets: ["latin"], variable: '--font-space' });
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Nanobanana Repair OS",
  description: "Advanced Workshop Interface",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Set the base body to white */}
      <body className={`${space.variable} ${inter.variable} font-sans bg-white text-black h-screen p-4 overflow-hidden`}>
        {/* Updated Frame: Removed ring-slate-200 and changed to a subtle border */}
        <div className="h-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          <Sidebar />
          {/* Removed bg-[#E5E7EB] here */}
          <main className="flex-1 overflow-y-auto bg-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}