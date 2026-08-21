import Image from "next/image"
import { Star } from "lucide-react"
import type { Review } from "../../types/review.types"
import { Card, CardContent } from "@/components/ui/card"

export function ReviewCard({ review }: { review: Review }) {
  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = []
    const floorRating = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 1; i <= 5; i++) {
      if (i <= floorRating) {
        stars.push(<Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />)
      } else if (i === floorRating + 1 && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="h-4 w-4 text-muted" />
            <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            </div>
          </div>
        )
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-muted" />)
      }
    }
    return stars
  }

  return (
    <Card className="h-full border bg-card flex flex-col justify-between py-6 px-6 relative">
      <CardContent className="p-0 flex flex-col gap-6 h-full justify-between">
        {/* Review Text */}
        <p className="text-sm italic text-muted-foreground leading-relaxed">
          &ldquo;{review.review}&rdquo;
        </p>

        {/* Client details & rating */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border">
              <Image
                src={review.avatar}
                alt={review.name}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground leading-none">{review.name}</h4>
              <p className="text-xs text-muted-foreground mt-1">
                {review.designation}, <span className="font-medium text-foreground/80">{review.company}</span>
              </p>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex items-center gap-1 border-t pt-3">
            {renderStars(review.rating)}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
