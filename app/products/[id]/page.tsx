import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { mangoes } from "@/data/mangoes";
import ProductDetailClient from "@/components/ProductDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate dynamic metadata for dynamic SEO ranking
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = mangoes.find((m) => m.id === id);
  
  if (!product) {
    return {
      title: "আমের বিবরণ পাওয়া যায়নি | আম বাজার",
      description: "দুঃখিত, আপনার খোঁজা আমটির বিবরণ আমাদের তালিকায় পাওয়া যায়নি।"
    };
  }

  return {
    title: `${product.name} - সরাসরি বাগান থেকে | আম বাজার`,
    description: `${product.shortDescription} রাজশাহীর সেরা বাগান থেকে সম্পূর্ণ প্রাকৃতিকভাবে পাকানো ফরমালিন মুক্ত আম।`,
    keywords: [product.name, `${product.origin} এর আম`, "তাজা আম কিনুন", product.category],
    openGraph: {
      title: `${product.name} - সরাসরি বাগান থেকে | আম বাজার`,
      description: product.shortDescription,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 600,
          alt: product.name,
        }
      ]
    }
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = mangoes.find((m) => m.id === id);

  // If product is not found, render a premium 404 fallback page
  if (!product) {
    return (
      <div className="bg-[#fbfdfb] min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="bg-white border border-slate-100 max-w-md w-full rounded-3xl p-8 text-center shadow-md space-y-6">
          <div className="text-6xl animate-bounce">🥭</div>
          <h2 className="text-2xl font-black text-slate-800">দুঃখিত, আমটি পাওয়া যায়নি!</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            আমরা দুঃখিত যে আপনার খোঁজা আমের বিবরণটি বর্তমানে আমাদের স্টকে অথবা সিস্টেমে নেই। অনুগ্রহ করে অন্য আমগুলো দেখুন।
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-sm shadow-md transition-all duration-200"
          >
            <ArrowLeft size={16} />
            <span>আমাদের আম কালেকশন দেখুন</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fbfdfb] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Render interactive client components */}
        <ProductDetailClient product={product} />

      </div>
    </div>
  );
}
