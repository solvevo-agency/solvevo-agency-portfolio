"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { reviews } from "../../static-data/reviews.data"
import { ReviewCard } from "./review-card"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export function ReviewsSection() {
  return (
    <section className="section-padding-x section-padding-y border-t bg-muted/5">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
          What Our Clients Say
        </h2>
        <p className="text-muted-foreground mt-4">
          Read reviews from founders and product leads who worked with Solvevo to build their core software.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="h-auto">
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
