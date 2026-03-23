import React, { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "~/components/ui/carousel"

const images = [
  "/assets/image/projects/dtc_ss.png",
  "/assets/image/projects/dtc_ss.png",
  "/assets/image/projects/dtc_ss.png",
  "/assets/image/projects/dtc_ss.png",
]

export function ThumbnailCarousel() {
  const [mainApi, setMainApi] = useState<CarouselApi>()
  const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  // Sync the current state when the main carousel settles
  useEffect(() => {
    if (!mainApi) return

    mainApi.on("select", () => {
      setCurrent(mainApi.selectedScrollSnap())
    })
  }, [mainApi])

  // Function to handle clicking a thumbnail
  const onThumbClick = (index: number) => {
    if (!mainApi || !thumbnailApi) return
    mainApi.scrollTo(index)
  }

  return (
    <>
      <div className="mx-auto w-full space-y-4">
        {/* Main Large Carousel */}
        <Carousel setApi={setMainApi} className="w-full">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="aspect-video overflow-hidden rounded-xl border bg-muted">
                  <img
                    src={src}
                    alt={`Slide ${index}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="mx-auto mt-5 w-full max-w-2xl">
        {/* Thumbnail Strip */}
        <Carousel setApi={setThumbnailApi} className="w-full">
          <CarouselContent className="-ml-2 flex-row">
            {images.map((src, index) => (
              <CarouselItem
                key={index}
                className="basis-1/4 cursor-pointer pl-2"
                onClick={() => onThumbClick(index)}
              >
                <div
                  className={`${"aspect-video overflow-hidden rounded-md border-2 transition-all"} ${
                    current === index
                      ? "border-primary opacity-100"
                      : "border-transparent opacity-50"
                  }`}
                >
                  <img src={src} className="h-full w-full object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}
