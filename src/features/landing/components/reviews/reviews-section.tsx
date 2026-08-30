"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "motion/react";
import { reviews } from "../../static-data/reviews.data";
import { ReviewCard } from "./review-card";

// Import Swiper styles
import "swiper/css";

export function ReviewsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 dark:from-white dark:to-white/60 bg-clip-text text-transparent drop-shadow-sm"
          >
            What Our Partners Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground/80 leading-relaxed"
          >
            Read reviews from founders and product leads who worked with Solvevo to build their core software.
          </motion.p>
        </div>

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            className="pb-12 pt-4 !px-4 -mx-4" // padding for shadows
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="!h-auto">
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Left/Right Fade Edges */}
          <div className="absolute inset-y-0 left-0 w-8 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
