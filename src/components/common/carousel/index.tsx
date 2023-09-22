import Image from "next/image";
import React, { Fragment } from "react";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

const Carousel = ({ imgs, thumb }: { thumb: string; imgs: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const handleSwiper = (swiper: SwiperType) => setThumbsSwiper(swiper as any);

  return (
    <Fragment>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mainSwiper"
      >
        <SwiperSlide>
          <Image
            src={thumb}
            alt={"work images"}
            fill
            className="skeleton"
            onLoadingComplete={(image) => image.classList.remove("skeleton")}
          />
        </SwiperSlide>
        {imgs.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt={"work images"}
              fill
              className="skeleton"
              onLoadingComplete={(image) => image.classList.remove("skeleton")}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={handleSwiper}
        slidesPerView={3.5}
        watchSlidesProgress={true}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbSwiper"
      >
        <SwiperSlide>
          <Image
            src={thumb}
            alt={"work thumbnail images"}
            fill
            className="skeleton"
            onLoadingComplete={(image) => image.classList.remove("skeleton")}
          />
        </SwiperSlide>
        {imgs.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt={"work thumbnail images"}
              fill
              className="skeleton"
              onLoadingComplete={(image) => image.classList.remove("skeleton")}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default Carousel;
