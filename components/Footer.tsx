import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Award, ShieldCheck, Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-emerald-950">
      {/* Trust Badges Bar */}
      <div className="bg-emerald-950 border-b border-emerald-900 py-6 text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
              <div className="p-3 bg-emerald-900 rounded-full text-amber-400">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">১০০% ফরমালিন মুক্ত</h4>
                <p className="text-xs text-emerald-200">রাসায়নিক ও ফরমালিন ছাড়া সরাসরি গাছপাকা আম।</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
              <div className="p-3 bg-emerald-900 rounded-full text-amber-400">
                <Truck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">দ্রুততম কুরিয়ার ডেলিভারি</h4>
                <p className="text-xs text-emerald-200">আম পাড়ার পর সর্বোচ্চ ৪৮ ঘণ্টার মধ্যে ডেলিভারি।</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
              <div className="p-3 bg-emerald-900 rounded-full text-amber-400">
                <Award size={24} />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">সেরা স্বাদের গ্যারান্টি</h4>
                <p className="text-xs text-emerald-200">রাজশাহী ও চাঁপাইনবাবগঞ্জের আসল বাগানের আম।</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl">🥭</span>
              <span className="text-2xl font-bold tracking-tight text-white">
             অর্গ্যানিক ভিলেজ
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              আমরা সরাসরি রাজশাহী ও চাঁপাইনবাবগঞ্জের বিশ্বস্ত আম বাগান থেকে কীটনাশক ও ফরমালিন মুক্ত পাকা আম সংগ্রহ করে সমগ্র বাংলাদেশে পৌঁছে দিই। গুণগত মানে আমরা আপসহীন।
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/profile.php?id=61568265947012" className="hover:text-amber-400 transition-colors duration-200" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 border-l-4 border-emerald-500 pl-3">প্রয়োজনীয় লিংক</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors duration-200">
                  হোম পেজ
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors duration-200">
                  আমাদের সকল পণ্য
                </Link>
              </li>
              <li>
                <Link href="/how-to-order" className="hover:text-amber-400 transition-colors duration-200">
                  অর্ডার করার নিয়ম
                </Link>
              </li>
              <li>
                <Link href="/products#reviews" className="hover:text-amber-400 transition-colors duration-200">
                  ক্রেতাদের মতামত
                </Link>
              </li>
            </ul>
          </div>

          {/* Special Categories */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 border-l-4 border-emerald-500 pl-3">জনপ্রিয় আমসমূহ</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products/himsagar" className="hover:text-amber-400 transition-colors duration-200">
                  রাজশাহীর হিমসাগর
                </Link>
              </li>
              <li>
                <Link href="/products/langra" className="hover:text-amber-400 transition-colors duration-200">
                  সুগন্ধি ল্যাংড়া আম
                </Link>
              </li>
              <li>
                <Link href="/products/amrapali" className="hover:text-amber-400 transition-colors duration-200">
                  নওগাঁর সুমিষ্ট আম্রপালি
                </Link>
              </li>
              <li>
                <Link href="/products/khirsapat" className="hover:text-amber-400 transition-colors duration-200">
                  জিআই পণ্য ক্ষীরশাপাত
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 border-l-4 border-emerald-500 pl-3">যোগাযোগের ঠিকানা</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="text-emerald-500 shrink-0 mt-1" size={16} />
                <span>বাঘা, রাজশাহী, বাংলাদেশ </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="text-emerald-500 shrink-0" size={16} />
                <a href="tel:+8801302243428" className="hover:text-amber-400 transition-colors duration-200">
                  01302243428
                </a>
                <a href="tel:+8801796734426" className="hover:text-amber-400 transition-colors duration-200">
                  01796734426
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="text-emerald-500 shrink-0" size={16} />
                <a href="mailto: shezanmahmud650@gmail.com" className="hover:text-amber-400 transition-colors duration-200">
                  shezanmahmud650@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} আম বাজার। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="mt-2 md:mt-0 flex space-x-4">
            <span className="hover:text-slate-400 transition-colors">ডিজাইন ও ডেভেলপমেন্ট: **সোহাগ**</span>
            <span className="text-slate-700">|</span>
            <span className="hover:text-slate-400 transition-colors">১০০% অর্গানিক আমের বিশ্বস্ত প্রতিষ্ঠান</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
