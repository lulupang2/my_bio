import React, { Fragment } from "react";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

const Carousel = ({ imgs, thumb }: { thumb: string; imgs: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const handleSwiper = (swiper: SwiperType) => {
    setThumbsSwiper(swiper as any);
  };
  return (
    <Fragment>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mainSwiper"
      >
        <SwiperSlide>
          <img src={thumb} alt={"work images"} />
        </SwiperSlide>
        {imgs.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={"work images"} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={handleSwiper}
        loop={true}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbSwiper"
      >
        <SwiperSlide>
          <img src={thumb} alt={"work thumbnail images"} />
        </SwiperSlide>
        {imgs.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={"work thumbnail images"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default Carousel;
