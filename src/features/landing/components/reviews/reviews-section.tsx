"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { reviews } from "../../static-data/reviews.data";
import { ReviewCard } from "./review-card";

// Import Swiper styles
import "swiper/css";

export function ReviewsSection() {
  return (
    <section className="section-padding-x section-padding-y border-t bg-muted/5">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
          What Our Clients Say
        </h2>
        <p className="text-muted-foreground mt-4">
          Read reviews from founders and product leads who worked with Solvevo
          to build their core software.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="pb-4"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="!h-auto">
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
