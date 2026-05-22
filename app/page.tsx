import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, ShieldCheck, Truck, Sprout, Package, Star, MessageSquare } from "lucide-react";
import { mangoes } from "@/data/mangoes";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  // Get 3 featured products (Himsagar, Langra, Amrapali)
  const featuredProducts = mangoes.filter(
    (mango) => ["himsagar", "langra", "amrapali"].includes(mango.id)
  );

  const trustFeatures = [
    {
      icon: <ShieldCheck className="text-emerald-600" size={32} />,
      title: "১০০% ফরমালিন ও কেমিক্যাল মুক্ত",
      desc: "আমরা ক্ষতিকারক কার্বাইড বা ফরমালিন ছাড়াই প্রাকৃতিকভাবে গাছপাকা আম সংগ্রহ ও ডেলিভারি নিশ্চিত করি।"
    },
    {
      icon: <Truck className="text-emerald-600" size={32} />,
      title: "দ্রুততম কুরিয়ার ডেলিভারি",
      desc: "আম পাড়ার পর বিশেষ ট্রাকে ও দ্রুততম কুরিয়ারের মাধ্যমে সর্বোচ্চ ২৪-৪৮ ঘণ্টার মধ্যে আপনার ঠিকানায় পৌঁছে দেওয়া হয়।"
    },
    {
      icon: <Sprout className="text-emerald-600" size={32} />,
      title: "সরাসরি রাজশাহীর বাগান থেকে",
      desc: "কোনো মধ্যস্বত্বভোগী বা দালাল ছাড়া সরাসরি রাজশাহী ও চাঁপাইনবাবগঞ্জের আসল আম বাগান থেকে সংগৃহীত।"
    },
    {
      icon: <Package className="text-emerald-600" size={32} />,
      title: "নিরাপদ ডাবল-প্যাকিং ব্যবস্থা",
      desc: "আম যেন গরমে নষ্ট না হয় এবং পরিবহনে থেঁতলে না যায় তার জন্য আমরা প্লাস্টিক ক্যারেট ও কার্টন প্যাকেজিং ব্যবহার করি।"
    }
  ];

  const stats = [
    { value: "৫,০০০+", label: "সন্তুষ্ট ক্রেতা" },
    { value: "৮+", label: "আমের প্রিমিয়াম জাত" },
    { value: "৫০,০০০+", label: "কেজি আম ডেলিভারি" },
    { value: "১০০%", label: "বিশুদ্ধতার গ্যারান্টি" }
  ];

  const testimonials = [
    {
      name: "তানভীর আহমেদ",
      role: "চাকরিজীবী",
      location: "ঢাকা",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      comment: "গত সপ্তাহে ১০ কেজি হিমসাগর নিয়েছিলাম। আমের মিষ্টি আর ঘ্রাণ ছিল অসাধারণ! একটা আমও নষ্ট হয়নি। ধন্যবাদ আম বাজারকে এত নিখুঁত সার্ভিসের জন্য।"
    },
    {
      name: "রাবেয়া চৌধুরী",
      role: "গৃহিণী",
      location: "চট্টগ্রাম",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      comment: "বাচ্চাদের জন্য কেমিক্যাল ছাড়া আমের সন্ধান করছিলাম। আম বাজারের আম পেয়ে খুবই স্বস্তি পেলাম। আম্রপালি আমগুলোর কড়া মিষ্টি স্বাদ আমাদের মুগ্ধ করেছে।"
    },
    {
      name: "সৈয়দ আসিফ",
      role: "ব্যবসায়ী",
      location: "সিলেট",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      comment: "ল্যাংড়া আমগুলো সত্যি অসাধারণ ছিল। প্যাকেজিং খুব ভালো ছিল যার কারণে একটা আমেও কোনো দাগ লাগেনি। কুরিয়ারে দুই দিনের মধ্যে পেয়েছি।"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-emerald-50/30 to-amber-100/40 pt-10 pb-20 md:py-28">
        {/* Background decorative blurry circles */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-amber-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-300/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Left - Texts */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold bg-emerald-50 border border-emerald-200/50 text-emerald-700 shadow-xs">
                🥭 সরাসরি রাজশাহীর আম বাগান থেকে
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight sm:leading-none text-slate-950">
                শতভাগ রাসায়নিক মুক্ত ও <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-emerald-600 bg-clip-text text-transparent">
                  মিষ্টি আসল আমের
                </span>{" "}
                স্বাদ নিন
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                কোনো প্রকার ফরমালিন ও ক্ষতিকারক কেমিক্যাল ছাড়াই সম্পূর্ণ প্রাকৃতিক উপায়ে গাছপাকা আম সংগ্রহ করে আমরা পৌঁছে দিচ্ছি আপনার দোরগোড়ায়। রাজশাহীর সেরা বাগানের আসল স্বাদ এখন আপনার হাতের মুঠোয়।
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-lg shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <ShoppingBag size={20} />
                  <span>এখনই অর্ডার করুন</span>
                </Link>
                <Link
                  href="/how-to-order"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-lg shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span>অর্ডার করার নিয়ম</span>
                  <ArrowRight size={18} className="text-slate-500" />
                </Link>
              </div>

              {/* Minimalist badging */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 text-sm text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span> ফরমালিন মুক্ত
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span> ক্যাশ অন ডেলিভারি
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span> ২৪ ঘণ্টার মধ্যে ডেলিভারি
                </div>
              </div>
            </div>

            {/* Hero Right - Premium Image */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-amber-500">
                <Image
                  src="https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80"
                  alt="সেরা সুস্বাদু আম"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-md border border-amber-200/50 p-4 rounded-2xl shadow-xl flex items-center gap-3 transform -rotate-3 animate-bounce duration-1000">
                <div className="p-2.5 bg-amber-500 rounded-full text-white text-xl">
                  🏆
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-800">সেরা মান</h4>
                  <p className="text-[10px] text-slate-400">১০০% কোয়ালিটি গ্যারান্টি</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md border border-emerald-200/50 p-4 rounded-2xl shadow-xl flex items-center gap-3 transform rotate-3">
                <div className="p-2.5 bg-emerald-500 rounded-full text-white text-xl">
                  🍃
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-800">অর্গানিক আম</h4>
                  <p className="text-[10px] text-slate-400">সরাসরি রাজশাহী থেকে</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar Section */}
      <section className="bg-slate-900 text-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {stats.map((stat, i) => (
              <div key={i} className="pt-6 md:pt-0">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-amber-400">{stat.value}</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Products Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-emerald-600 font-extrabold text-sm uppercase tracking-wider">আমাদের স্পেশাল</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              গ্রাহকদের সবচেয়ে পছন্দের আমসমূহ
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              সারা দেশ থেকে হাজারো ক্রেতার অর্ডারকৃত এবং সেরা রিভিউ পাওয়া আমাদের সেরা ও জনপ্রিয় আমগুলো দেখুন।
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((mango) => (
              <ProductCard key={mango.id} product={mango} />
            ))}
          </div>

          {/* View All Action */}
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-emerald-600 hover:bg-emerald-600 text-emerald-600 hover:text-white font-extrabold text-base transition-all duration-300 group"
            >
              <span>সব আম একসাথে দেখুন</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-emerald-600 font-extrabold text-sm uppercase tracking-wider">আমাদের বৈশিষ্ট্য</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              কেন অন্যান্যদের চেয়ে আম বাজার সেরা?
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              আমরা শুধু ব্যবসাই করি না, গ্রাহকদের শতভাগ স্বাস্থ্যকর ও খাঁটি আম খাওয়ার অধিকার নিশ্চিত করি।
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFeatures.map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="p-4 bg-emerald-50 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 mb-6 text-emerald-700">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Review Section */}
      <section id="reviews" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-emerald-600 font-extrabold text-sm uppercase tracking-wider">রিভিউ ও মতামত</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 flex items-center justify-center gap-2">
              <MessageSquare className="text-amber-500" />
              <span>ক্রেতাদের মূল্যবান প্রতিক্রিয়া</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              সরাসরি আমাদের কাছ থেকে আম নিয়ে ক্রেতারা কেমন অনুভূতি প্রকাশ করেছেন তা নিজ মুখেই শুনুন।
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-100 p-8 rounded-2xl relative shadow-xs flex flex-col justify-between"
              >
                {/* Quotation mark decoration */}
                <span className="absolute top-4 right-6 text-6xl text-amber-200/50 font-serif leading-none pointer-events-none select-none">
                  “
                </span>

                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, index) => (
                      <Star key={index} className="text-amber-400 fill-amber-400" size={16} />
                    ))}
                  </div>
                  {/* Comment */}
                  <p className="text-sm text-slate-600 italic leading-relaxed relative z-10">
                    "{t.comment}"
                  </p>
                </div>

                {/* Profile detail */}
                <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-slate-200/50">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-800">{t.name}</h4>
                    <p className="text-[11px] text-slate-400">
                      {t.role}, <span className="text-emerald-600 font-bold">{t.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call To Action Banner */}
      <section className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-950 text-white py-16 md:py-20 relative overflow-hidden">
        {/* Absolute decorative images/shapes */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-900/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            রাসায়নিক মুক্ত আসল মিষ্টি আমের স্বাদ নিতে চান?
          </h2>
          <p className="text-emerald-100/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            মৌসুম শেষ হওয়ার আগেই আপনার পছন্দের আমের অর্ডারটি বুক করুন। কুরিয়ারে দেশের যেকোনো কোণায় পৌঁছে যাবে সম্পূর্ণ অক্ষত ও সতেজ আম।
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-lg shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <ShoppingBag size={20} />
              <span>আমের কালেকশন দেখুন</span>
            </Link>
            <a
              href="tel:+8801700000000"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-emerald-400/50 font-bold text-lg transition-all duration-200"
            >
              <span>ফোনে অর্ডার করুন: +৮৮০ ১৭০০-০০০০০০</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
