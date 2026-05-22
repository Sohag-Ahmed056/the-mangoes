import React from "react";

export default function Loading() {
  return (
    <div className="bg-[#fbfdfb] min-h-[75vh] flex flex-col items-center justify-center py-20 px-4 space-y-4">
      {/* Premium Pulsating Mango Loader */}
      <div className="relative flex items-center justify-center">
        {/* Blurry glow rings */}
        <span className="absolute inline-flex h-20 w-20 rounded-full bg-amber-400/20 animate-ping" />
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-emerald-400/10 animate-pulse" />
        
        {/* Pulsating core */}
        <div className="relative text-5xl bg-white border border-slate-100 p-4 rounded-full shadow-lg transform scale-110 animate-bounce duration-1000">
          🥭
        </div>
      </div>
      
      {/* Loading textual description in Bengali */}
      <div className="text-center space-y-2">
        <h3 className="font-extrabold text-slate-800 text-lg sm:text-xl tracking-tight">
          লোডিং হচ্ছে...
        </h3>
        <p className="text-xs text-slate-400 font-medium">
       অর্গ্যানিক ভিলেজ থেকে সেরা ও তাজা আমের বিবরণ লোড করা হচ্ছে।
        </p>
      </div>
    </div>
  );
}
