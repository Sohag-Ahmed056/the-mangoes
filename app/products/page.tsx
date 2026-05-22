import React from "react";
import type { Metadata } from "next";
import ProductsList from "@/components/ProductsList";

export const metadata: Metadata = {
  title: "আমাদের সব আমের জাতসমূহ | আম বাজার",
  description: "রাজশাহীর মিষ্টি হিমসাগর, ল্যাংড়া, আম্রপালি, ফজলি ও হরিভাঙ্গাসহ সকল ধরণের ফরমালিন ও কেমিক্যাল মুক্ত আম কিনতে ভিজিট করুন পণ্যসমূহ পাতায়। সরাসরি বাগান থেকে সংগৃহীত।",
  keywords: ["আমের জাত", "অনলাইন আম বিক্রয়", "হিমসাগর আম কিনুন", "ল্যাংড়া আম", "আম্রপালি আম", "খাঁটি আম"],
};

export default function ProductsPage() {
  return (
    <div className="bg-[#fbfdfb] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header Header banner */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200/50 shadow-xs">
            🌿 ১০০% প্রাকৃতিকভাবে পাকা আম
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-none">
            আমাদের সব তাজা আমসমূহ
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            রাজশাহী, চাঁপাইনবাবগঞ্জ ও নওগাঁর বিশ্বস্ত বাগান থেকে ফরমালিন মুক্ত তাজা আম আজই অর্ডার করুন। নিচে আপনার পছন্দের জাতটি নির্বাচন করে বিস্তারিত বিবরণ দেখুন।
          </p>
        </div>

        {/* Client Side Filter & Grid component */}
        <ProductsList />
        
      </div>
    </div>
  );
}
