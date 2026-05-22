import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "আম বাজার | প্রিমিয়াম ও ফরমালিন মুক্ত রাজশাহীর আম",
  description: "সরাসরি রাজশাহীর আম বাগান থেকে কেমিক্যাল ও ফরমালিন মুক্ত সুস্বাদু আম কিনুন। হিমসাগর, ল্যাংড়া, আম্রপালি, হরিভাঙ্গাসহ বিভিন্ন জাতের আম দ্রুততম সময়ে কুরিয়ারে দেশব্যাপী ডেলিভারি!",
  keywords: ["আম বাজার", "রাজশাহীর আম", "ফরমালিন মুক্ত আম", "হিমসাগর", "ল্যাংড়া", "আম্রপালি", "হরিভাঙ্গা আম", "অনলাইন আম বিক্রয়"],
  openGraph: {
    title: "আম বাজার | প্রিমিয়াম ও ফরমালিন মুক্ত রাজশাহীর আম",
    description: "সেরা স্বাদের এবং সরাসরি বাগান থেকে সংগৃহীত ১০০% নিরাপদ ও ফরমালিন মুক্ত আম।",
    type: "website",
    locale: "bn_BD",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${hindSiliguri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fbfdfb] text-slate-800 font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
