"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type ImageCarouselProps = {
  images: string[];
  auto?: boolean;
  interval?: number;
};

const ImageCarousel = ({
  images,
  auto = false,
  interval = 5000,
}: ImageCarouselProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  useEffect(() => {
    if (auto) {
      const intervalImage = setInterval(showNextImage, interval);
      return () => clearInterval(intervalImage);
    }
  }, []);

  return (
    <div className="relative mt-[11vh] h-full w-full pt-16 lg:mt-0">
      <div className="flex h-[60vh] w-full overflow-hidden lg:h-[95vh]">
        {images.map((url, index) => (
          <Image
            width={800}
            height={600}
            key={url}
            src={url}
            priority
            alt="carousel"
            className="absolute left-0 top-0 block h-full w-full shrink-0 grow-0 object-cover"
            style={{
              transition: "opacity 1s ease-in-out",
              opacity: index === imageIndex ? 1 : 0,
            }}
          />
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            className={`
            relative mx-[6px] inline-block h-[0.65rem] w-[0.65rem] cursor-pointer rounded-full border [transition:color_0.2s_ease-in-out]
              ${
                index === imageIndex
                  ? "border-[#333232] bg-[#333232]"
                  : "border-[#333232] bg-transparent"
              }
            `}
            onClick={() => setImageIndex(index)}
          >
            <span aria-hidden="true"></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
