"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, MapPin, Truck, Calendar, ShoppingCart, MessageSquare, ArrowLeft, ArrowRight } from "lucide-react";
import { MangoProduct } from "@/types";

interface ProductDetailClientProps {
  product: MangoProduct;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { name, price, originalPrice, shortDescription, fullDescription, images, stock, category, rating, reviewsCount, origin, weightOptions } = product;

  // Gallery state
  const [activeImage, setActiveImage] = useState(images[0]);
  
  // Weight selection
  const [selectedWeight, setSelectedWeight] = useState(weightOptions[0]);
  
  // Quantity selection
  const [quantity, setQuantity] = useState(1);

  // Extract weight multiplier (e.g., "৫ কেজি" -> 5)
  const getWeightNumber = (weightStr: string) => {
    const numbers = {
      "৫": 5,
      "১০": 10,
      "২০": 20,
      "৪০": 40
    };
    const key = weightStr.charAt(0);
    return numbers[key as keyof typeof numbers] || 5;
  };

  const parsedWeight = getWeightNumber(selectedWeight);
  const baseCratePrice = price * parsedWeight;
  const totalPrice = baseCratePrice * quantity;
  
  const discountPercent = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  // Build WhatsApp Order Link
  const buildWhatsAppLink = () => {
    const phoneNumber = "8801302243428"; // Dummy business number
    const message = `আসসালামু আলাইকুম! আমি *আম বাজার* ওয়েবসাইট থেকে আম অর্ডার করতে চাই।
    
*পণ্যের নাম:* ${name}
*ওজন:* ${selectedWeight}
*পরিমাণ:* ${quantity} টি ক্যারেট
*সর্বমোট মূল্য:* ৳${totalPrice} টাকা (ডেলিভারি চার্জ ব্যতীত)

দয়া করে আমার অর্ডারটি কনফার্ম করুন ও পরবর্তী প্রক্রিয়া জানিয়ে দিন। ধন্যবাদ!`;

    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="space-y-12">
      {/* Breadcrumbs / Back button */}
      <div className="flex items-center justify-between">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>পণ্যসমূহ পাতায় ফিরুন</span>
        </Link>
        <span className="text-xs font-bold text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full">
          ক্যাটাগরি: <span className="text-emerald-600">{category}</span>
        </span>
      </div>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Premium Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          {/* Active Large Image Display */}
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-slate-100 bg-slate-100 shadow-sm">
            {discountPercent > 0 && (
              <span className="absolute top-4 left-4 z-10 inline-flex items-center px-3 py-1.5 rounded-full text-xs font-black bg-rose-500 text-white shadow-md animate-pulse">
                {discountPercent}% বিশেষ ছাড়
              </span>
            )}
            
            <Image
              src={activeImage}
              alt={name}
              fill
              priority
              className="object-cover transition-all duration-300"
            />
          </div>

          {/* Gallery Thumbnails List */}
          <div className="grid grid-cols-4 gap-3">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(img)}
                className={`relative aspect-square w-full rounded-2xl overflow-hidden border-2 bg-slate-50 transition-all ${
                  activeImage === img
                    ? "border-emerald-500 shadow-md ring-2 ring-emerald-500/10 scale-95"
                    : "border-slate-100 hover:border-slate-300"
                }`}
              >
                <Image
                  src={img}
                  alt={`${name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Information & checkout widget */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main Info */}
          <div className="space-y-3">
            {/* Origin & Rating Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 border border-emerald-100 text-emerald-700">
                <MapPin size={12} />
                <span>উৎস: {origin}</span>
              </span>
              <div className="flex items-center gap-1 text-slate-700 text-xs sm:text-sm bg-slate-50 border border-slate-100 px-3 py-1 rounded-full">
                <Star className="text-amber-400 fill-amber-400" size={14} />
                <span className="font-bold">{rating}</span>
                <span className="text-slate-400">({reviewsCount} ক্রেতার মতামত)</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
              {name}
            </h1>
            
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              {shortDescription}
            </p>
          </div>

          {/* Pricing & Stock Details Widget */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-6">
            <div className="flex items-baseline justify-between gap-4 border-b border-slate-200/50 pb-4">
              <div>
                <span className="text-xs text-slate-400 block mb-1">প্রতি কেজি আমের দাম:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-emerald-600">৳{price}</span>
                  {originalPrice && (
                    <span className="text-base text-slate-400 line-through">৳{originalPrice}</span>
                  )}
                </div>
              </div>
              <span
                className={`text-xs sm:text-sm font-extrabold px-3 py-1 rounded-full shrink-0 ${
                  stock > 0
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                    : "bg-red-50 text-red-700 border border-red-100"
                }`}
              >
                {stock > 0 ? `স্টক আছে: ${stock} কেজি` : "স্টক শেষ"}
              </span>
            </div>

            {/* Step 1: Weight Selection */}
            <div className="space-y-3">
              <label className="text-sm font-black text-slate-700 block">
                ১. প্যাকেজ বা ওজন নির্বাচন করুন:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {weightOptions.map((weight) => (
                  <button
                    key={weight}
                    onClick={() => setSelectedWeight(weight)}
                    className={`py-3 px-4 rounded-2xl font-bold text-center text-xs sm:text-sm border transition-all duration-200 ${
                      selectedWeight === weight
                        ? "bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-600/10"
                        : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Quantity selector */}
            <div className="flex items-center justify-between gap-4 pt-2">
              <label className="text-sm font-black text-slate-700">
                ২. ক্যারেটের সংখ্যা নির্ধারণ করুন:
              </label>
              <div className="flex items-center gap-1 border border-slate-200 bg-white rounded-xl p-1.5 shadow-2xs">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-700 font-bold text-lg focus:outline-none transition-colors"
                >
                  -
                </button>
                <span className="w-10 text-center font-extrabold text-slate-800 text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-700 font-bold text-lg focus:outline-none transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Price calculation details */}
            <div className="bg-emerald-50/50 border border-emerald-100/50 rounded-2xl p-4 text-sm space-y-2 text-slate-700">
              <div className="flex justify-between">
                <span>১টি ক্যারেটের মূল্য (৳{price} × {parsedWeight} কেজি):</span>
                <span className="font-bold text-slate-800">৳{baseCratePrice}</span>
              </div>
              <div className="flex justify-between">
                <span>ক্যারেটের সংখ্যা:</span>
                <span className="font-bold text-slate-800">{quantity} টি</span>
              </div>
              <div className="flex justify-between border-t border-emerald-200/50 pt-2 text-base font-black text-emerald-800">
                <span>সর্বমোট প্রদেয় মূল্য:</span>
                <span>৳{totalPrice}</span>
              </div>
            </div>

            {/* ORDER BUTTONS Checkout Actions */}
            <div className="space-y-3 pt-2">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base sm:text-lg shadow-lg shadow-emerald-600/15 hover:shadow-xl hover:shadow-emerald-600/25 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageSquare size={20} className="fill-white" />
                <span>হোয়াটসঅ্যাপে সরাসরি অর্ডার করুন</span>
              </a>
              
              <div className="text-center">
                <p className="text-[11px] text-slate-400 leading-normal">
                  বাটনটি ক্লিক করলে আপনার হোয়াটসঅ্যাপ অ্যাপটি খুলবে এবং অর্ডার বিবরণটি প্রাক-লিখিত থাকবে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs / Extra Info Sections (Tabs) */}
      <section className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 border-l-4 border-emerald-600 pl-3">
            বিস্তারিত তথ্য ও গুণাগুণ
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-4">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {fullDescription}
            </p>
          </div>
          
          <div className="md:col-span-4 bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-4">
            <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider flex items-center gap-2 border-b border-slate-200/50 pb-2">
              <ShieldCheck size={16} className="text-emerald-600" />
              আমাদের প্রতিশ্রুতিসমূহ:
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                <span>রাসায়নিক বা কার্বাইড ছাড়া প্রাকৃতিকভাবে পাকানো।</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                <span>অর্ডার কনফার্ম করার পর গাছ থেকে তাজা আম পাড়া হয়।</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                <span>আম থেঁতলে যাওয়া রোধে শক্ত ও বাতাস চলাচলকারী ক্যারেট প্যাকেট।</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                <span>স্বাদ এবং মিষ্টি কম হলে পরিবর্তনের পূর্ণ সুবিধা।</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust Badges Timeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-100 p-6 rounded-2xl flex items-start gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
            <Truck size={20} />
          </div>
          <div>
            <h4 className="font-extrabold text-sm text-slate-800 mb-1">সহজ ও দ্রুত শিপিং</h4>
            <p className="text-xs text-slate-500 leading-normal">
              রাজশাহী থেকে সরাসরি দ্রুত কুরিয়ারে ২৪-৪৮ ঘণ্টার মধ্যে বাড়ি পৌঁছে যাবে।
            </p>
          </div>
        </div>
        <div className="bg-white border border-slate-100 p-6 rounded-2xl flex items-start gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
            <ShieldCheck size={20} />
          </div>
          <div>
            <h4 className="font-extrabold text-sm text-slate-800 mb-1">নিরাপদ পেমেন্ট পদ্বতি</h4>
            <p className="text-xs text-slate-500 leading-normal">
              কুরিয়ারের মাধ্যমে ক্যাশ অন ডেলিভারিতে বা বিকাশে পেমেন্ট করতে পারবেন।
            </p>
          </div>
        </div>
        <div className="bg-white border border-slate-100 p-6 rounded-2xl flex items-start gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
            <Calendar size={20} />
          </div>
          <div>
            <h4 className="font-extrabold text-sm text-slate-800 mb-1">তাজা বাগানের নিশ্চয়তা</h4>
            <p className="text-xs text-slate-500 leading-normal">
              সম্পূর্ণ তাজা আম যাতে পান, সেজন্য অর্ডার ছাড়া আম আগে থেকে পেড়ে রাখা হয় না।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
