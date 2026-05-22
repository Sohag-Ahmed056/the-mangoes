import React from "react";
import type { Metadata } from "next";
import { Search, MessageSquare, MapPin, Truck, Wallet, ShieldCheck, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "অর্ডার করার সহজ নিয়ম ও শর্তাবলী | আম বাজার",
  description: "খুব সহজেই আমাদের ওয়েবসাইট থেকে সরাসরি বাগান থেকে পেড়ে নেওয়া আমের অর্ডার করতে পারবেন। হোয়াটসঅ্যাপ, ফোন বা ফেসবুকের মাধ্যমে ঠিকানা দিয়ে কুরিয়ারে ডেলিভারি পান।",
  keywords: ["আম অর্ডার নিয়ম", "কুরিয়ার ডেলিভারি", "ক্যাশ অন ডেলিভারি আম", "আম পেমেন্ট পদ্ধতি"],
};

export default function HowToOrderPage() {
  const steps = [
    {
      icon: <Search className="text-white" size={24} />,
      title: "১. পছন্দের আম ও ওজন নির্বাচন",
      desc: "আমাদের 'পণ্যসমূহ' পেজ থেকে আপনার পছন্দের সুস্বাদু আমটি খুঁজুন। আমের বিবরণ থেকে আপনার পছন্দমতো ওজন (৫ কেজি, ১০ কেজি বা মন) ও ক্যারেটের সংখ্যা সিলেক্ট করুন।"
    },
    {
      icon: <MessageSquare className="text-white" size={24} />,
      title: "২. আমাদের সাথে যোগাযোগ",
      desc: "ডিটেইলস পেজের 'হোয়াটসঅ্যাপে সরাসরি অর্ডার করুন' বাটনে ক্লিক করে আমাদের চ্যাটে যান। সেখানে আপনার সিলেক্ট করা আমের তথ্য স্বয়ংক্রিয়ভাবে রেডি থাকবে। অথবা সরাসরি কল করতে পারেন: +৮৮০ ১৭০০-০০০০০০ নম্বরে।"
    },
    {
      icon: <MapPin className="text-white" size={24} />,
      title: "৩. নাম, মোবাইল ও ঠিকানা প্রদান",
      desc: "অর্ডার কনফার্ম করার জন্য আপনার নাম, সক্রিয় মোবাইল নম্বর এবং সঠিক কুরিয়ার ডেলিভারি ঠিকানাটি আমাদের হোয়াটসঅ্যাপ চ্যাটে অথবা কল করে প্রদান করুন।"
    },
    {
      icon: <Truck className="text-white" size={24} />,
      title: "৪. দ্রুততম কুরিয়ার ডেলিভারি",
      desc: "আপনার অর্ডার পাওয়ার পর আমরা তাজা আম পেড়ে ডাবল-প্যাকিং করি। ২৪ থেকে ৪৮ ঘণ্টার মধ্যে সুন্দরবন কুরিয়ার, এসএ পরিবহন অথবা করতোয়া কুরিয়ারের মাধ্যমে আপনার ঠিকানায় আম পাঠিয়ে দেওয়া হবে।"
    },
    {
      icon: <Wallet className="text-white" size={24} />,
      title: "৫. আম গ্রহণ ও মূল্য পরিশোধ",
      desc: "কুরিয়ার পয়েন্ট বা হোম ডেলিভারিতে আম বুঝে পেয়ে মান যাচাই করে কুরিয়ারের মাধ্যমে ক্যাশ অন ডেলিভারিতে সম্পূর্ণ টাকা পরিশোধ করুন। চাইলে বিকাশ বা নগদ এর মাধ্যমেও এডভান্স পেমেন্ট করতে পারেন।"
    }
  ];

  return (
    <div className="bg-[#fbfdfb] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200/50 shadow-xs">
            📋 সহজ ৫টি ধাপে অর্ডার করুন
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-none">
            অর্ডার করার সহজ নিয়মাবলী
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            আম বাজার থেকে প্রিমিয়াম আমের অর্ডার করা একদম সহজ ও ঝামেলাহীন। কোনো জটিল সাইন-আপ বা কার্ড ছাড়াই সরাসরি হোয়াটসঅ্যাপ বা কলে আপনার অর্ডার বুক করুন।
          </p>
        </div>

        {/* Timeline Grid layout */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          {/* Vertical connecting line for desktop timeline */}
          <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-emerald-100 hidden md:block" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 relative flex flex-col md:flex-row gap-6 items-start"
            >
              {/* Step Number Circle Icon wrapper */}
              <div className="p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shrink-0 z-10 shadow-lg shadow-emerald-600/10">
                {step.icon}
              </div>

              {/* Text content */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pro-Tips For Unboxing section */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-3xl p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-amber-500/10 pb-4">
            <span className="text-3xl">💡</span>
            <h2 className="text-xl font-black text-slate-900">
              আম হাতে পাওয়ার পর জরুরি করণীয় টিপস:
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <div className="p-1 bg-amber-500 text-white rounded-full shrink-0 text-xs mt-0.5">✓</div>
                <p>
                  <strong>প্যাকেট অবিলম্বে খুলুন:</strong> কুরিয়ার থেকে আম নিয়ে কার্টন বা ক্যারেটের মুখ সাথে সাথে খুলে ফেলুন। আমগুলোকে কার্টন বা প্লাস্টিকের ভেতর বেশি সময় বন্ধ রাখবেন না।
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-1 bg-amber-500 text-white rounded-full shrink-0 text-xs mt-0.5">✓</div>
                <p>
                  <strong>ছড়িয়ে রাখুন:</strong> কার্টন থেকে বের করে মেঝেতে খবরের কাগজ বিছিয়ে আমগুলো একটু ফাক ফাক করে সাজিয়ে রাখুন। এতে আমের ভেতরের গরম ভাব বের হয়ে যাবে।
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <div className="p-1 bg-amber-500 text-white rounded-full shrink-0 text-xs mt-0.5">✓</div>
                <p>
                  <strong>পাকার সময় দিন:</strong> কিছু আম যদি হালকা সবুজ দেখায় বা কাঁচা কাঁচা ভাব থাকে, তবে ঘাবড়াবেন না। ১-২ দিন ফ্যানের বাতাসের নিচে খোলা অবস্থায় রাখলে সুন্দর পেকে যাবে।
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-1 bg-amber-500 text-white rounded-full shrink-0 text-xs mt-0.5">✓</div>
                <p>
                  <strong>ধুয়ে পরিবেশন করুন:</strong> খাবার ঠিক আগে ভালোমতো ঠাণ্ডা পানিতে কিছুক্ষণ ভিজিয়ে রেখে ধুয়ে আম পরিবেশন করুন। এতে আমের আঠা বা কষ সম্পূর্ণ চলে যাবে ও খেতে দারুণ লাগবে।
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-2 border-t border-amber-500/10 text-xs text-amber-800 font-bold flex items-center justify-center gap-1">
            <Heart size={14} className="fill-amber-700 text-amber-700 animate-pulse" />
            <span>আমরা চাই আপনি ও আপনার পরিবার যেন আসল আমের খাঁটি ও সতেজ স্বাদ উপভোগ করেন।</span>
          </div>
        </div>

      </div>
    </div>
  );
}
