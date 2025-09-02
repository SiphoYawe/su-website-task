'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const ImageSlider = () => {
  const swiperImages = [
    {
      id: 1,
      src: '/images/swiper01_01.png',
      alt: 'Student activities 1',
      width: { mobile: 250, tablet: 320, desktop: 400 }
    },
    {
      id: 2,
      src: '/images/swiper01_02.png',
      alt: 'Student activities 2',
      width: { mobile: 250, tablet: 320, desktop: 400 }
    },
    {
      id: 3,
      src: '/images/swiper01_03.png',
      alt: 'Student activities 3',
      width: { mobile: 250, tablet: 320, desktop: 400 }
    },
    {
      id: 4,
      src: '/images/swiper02_03.png',
      alt: 'Student activities 4',
      width: { mobile: 250, tablet: 320, desktop: 400 }
    },
    {
      id: 5,
      src: '/images/swiper03_02.png',
      alt: 'Student activities 5',
      width: { mobile: 250, tablet: 320, desktop: 400 }
    }
  ];

  return (
    <section className="relative w-full bg-white py-16 lg:py-20 overflow-hidden">
      <div className="relative w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView="auto"
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
            pauseOnMouseEnter: false,
          }}
          speed={6000}
          allowTouchMove={false}
          freeMode={true}
          breakpoints={{
            320: {
              spaceBetween: 15,
            },
            768: {
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 25,
            },
          }}
          className="w-full h-auto"
          style={{
            '--swiper-wrapper-transition-timing-function': 'linear',
          } as React.CSSProperties}
        >
          {/* Duplicate the images multiple times to create seamless loop */}
          {[...swiperImages, ...swiperImages, ...swiperImages, ...swiperImages].map((image, index) => (
            <SwiperSlide key={`${image.id}-${index}`} className="!w-auto">
              <div className="relative rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden w-[250px] md:w-[320px] lg:w-[400px] max-w-[90vw]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={0}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 250px, (max-width: 1024px) 320px, 400px"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ImageSlider;