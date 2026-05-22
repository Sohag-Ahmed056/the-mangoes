"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, ShoppingBag } from "lucide-react";
import { mangoes } from "@/data/mangoes";
import ProductCard from "@/components/ProductCard";

const CATEGORIES = ["সব আম", "মিষ্টি আম", "রসালো আম", "আঁশহীন আম", "আচারি আম"];

export default function ProductsList() {
  const [selectedCategory, setSelectedCategory] = useState("সব আম");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return mangoes.filter((product) => {
      const matchesCategory =
        selectedCategory === "সব আম" || product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Filters and Search Panel */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
          {/* Search bar */}
          <div className="relative flex-grow max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="পছন্দের আম খুঁজুন (যেমন: হিমসাগর, ল্যাংড়া)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-3 border border-slate-200 rounded-2xl bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition-all duration-200"
            />
          </div>

          {/* Label of count */}
          <div className="text-sm font-bold text-slate-500 flex items-center gap-1.5 shrink-0 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100">
            <ShoppingBag size={15} className="text-emerald-600" />
            <span>মোট পণ্য: {filteredProducts.length} টি</span>
          </div>
        </div>

        {/* Category Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          <span className="text-xs font-black text-slate-400 uppercase tracking-wider mr-2 shrink-0 flex items-center gap-1">
            <Filter size={12} className="text-slate-400" /> ফিল্টার:
          </span>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 shrink-0 ${
                selectedCategory === category
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/15"
                  : "bg-slate-50 text-slate-600 border border-slate-100 hover:bg-slate-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Product Cards */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-slate-100 rounded-3xl py-20 px-4 text-center max-w-md mx-auto shadow-xs space-y-4">
          <div className="text-5xl">🔍</div>
          <h3 className="text-xl font-bold text-slate-800">দুঃখিত, কোনো আম পাওয়া যায়নি!</h3>
          <p className="text-sm text-slate-500">
            আপনার অনুসন্ধান বা ফিল্টার পরিবর্তন করে পুনরায় চেষ্টা করুন।
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("সব আম");
            }}
            className="inline-flex items-center px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-sm transition-all duration-200"
          >
            ফিল্টার রিসেট করুন
          </button>
        </div>
      )}
    </div>
  );
}
