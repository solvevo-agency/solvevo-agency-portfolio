"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import type { Review } from "../../types/review.types";

export function ReviewCard({ review }: { review: Review }) {
  // Render glowing stars
  const renderStars = (rating: number) => {
    const stars = [];
    const floorRating = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= floorRating) {
        stars.push(
          <div key={i} className="relative">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
          </div>
        );
      } else if (i === floorRating + 1 && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="h-4 w-4 text-white/20" />
            <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-white/10" />);
      }
    }
    return stars;
  };

  return (
    <div className="group relative h-full flex flex-col justify-between p-8 bg-white/[0.02] border border-white/[0.05] rounded-3xl backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1">
      {/* Subtle top edge highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex flex-col gap-6 h-full justify-between relative z-10">
        {/* Star Rating */}
        <div className="flex items-center gap-1">
          {renderStars(review.rating)}
        </div>

        {/* Review Text */}
        <p className="text-base sm:text-lg italic text-white/70 leading-relaxed font-medium">
          &ldquo;{review.review}&rdquo;
        </p>

        {/* Client details */}
        <div className="flex items-center gap-4 mt-4 pt-6 border-t border-white/5">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10">
            <Image
              src={review.avatar}
              alt={review.name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white leading-none mb-1.5">
              {review.name}
            </h4>
            <p className="text-xs text-white/50">
              {review.designation},{" "}
              <span className="font-semibold text-cyan-200/80">
                {review.company}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
