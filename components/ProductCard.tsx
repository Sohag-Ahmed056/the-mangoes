import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, ArrowUpRight, MapPin } from "lucide-react";
import { MangoProduct } from "@/types";

interface ProductCardProps {
  product: MangoProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, name, price, originalPrice, shortDescription, images, rating, reviewsCount, origin, stock } = product;

  // Calculate discount percentage
  const discountPercent = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <article className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 transform hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
      {/* Product Image Wrapper */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        {/* Discount Badge */}
        {discountPercent > 0 && (
          <span className="absolute top-3 left-3 z-10 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-extrabold bg-rose-500 text-white shadow-sm animate-pulse">
            {discountPercent}% ছাড়
          </span>
        )}

        {/* Origin Badge */}
        <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-xs text-slate-800 shadow-sm">
          <MapPin size={12} className="text-emerald-600" />
          <span>{origin}</span>
        </span>

        {/* Next.js Image component */}
        <Image
          src={images[0]}
          alt={name}
          fill
          sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Information */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Rating and Stock */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star className="text-amber-400 fill-amber-400" size={14} />
            <span className="text-xs font-bold text-slate-700">{rating}</span>
            <span className="text-xs text-slate-400">({reviewsCount})</span>
          </div>
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
              stock > 0
                ? "bg-emerald-50 text-emerald-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {stock > 0 ? "স্টকে আছে" : "স্টক শেষ"}
          </span>
        </div>

        {/* Product Title */}
        <h3 className="text-lg font-bold text-slate-800 line-clamp-1 group-hover:text-emerald-600 transition-colors duration-200">
          <Link href={`/products/${id}`}>{name}</Link>
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-500 line-clamp-2 mt-2 flex-grow">
          {shortDescription}
        </p>

        {/* Price Container */}
        <div className="flex items-baseline gap-2 mt-4 pt-3 border-t border-slate-50">
          <span className="text-2xl font-black text-emerald-600">
            ৳{price}
          </span>
          <span className="text-xs text-slate-400">/ প্রতি কেজি</span>
          {originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              ৳{originalPrice}
            </span>
          )}
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <Link
            href={`/products/${id}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 font-bold text-xs transition-all duration-200"
          >
            <span>বিস্তারিত</span>
            <ArrowUpRight size={14} />
          </Link>
          <Link
            href={`/products/${id}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs shadow-md shadow-amber-500/10 hover:shadow-lg transition-all duration-200"
          >
            <ShoppingCart size={14} />
            <span>অর্ডার করুন</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
