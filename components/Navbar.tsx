"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "হোম", path: "/" },
    { name: "পণ্যসমূহ", path: "/products" },
    { name: "অর্ডার করার নিয়ম", path: "/how-to-order" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-emerald-500/10 py-3"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-3xl filter drop-shadow-sm transition-transform duration-300 group-hover:rotate-12">🥭</span>
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              আম বাজার
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-base font-semibold transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-emerald-600 font-bold"
                      : "text-slate-600 hover:text-emerald-500"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 rounded-full transition-transform duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold text-sm shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <ShoppingBag size={16} />
              <span>আম কিনুন</span>
            </Link>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-emerald-600 hover:bg-slate-50 focus:outline-none transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">প্রধান মেনু</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-slate-100 ${
          isOpen ? "max-h-72 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-base font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-50 text-emerald-600 font-bold border-l-4 border-emerald-500"
                    : "text-slate-600 hover:bg-slate-50 hover:text-emerald-500"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-slate-100">
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold text-center shadow-md transition-all duration-200"
            >
              <ShoppingBag size={18} />
              <span>আজই অর্ডার করুন</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
