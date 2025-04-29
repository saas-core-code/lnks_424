"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

export default function RoomGallerySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const items = [
    "/images/room-gallery/carousel/workScene__img_top4.webp",
    "/images/room-gallery/carousel/workScene__img_top6.webp",
    "/images/room-gallery/carousel/workScene__img_bottom3.webp",
    "/images/room-gallery/carousel/workScene__img_bottom4.webp",
    "/images/room-gallery/carousel/workScene__img_bottom5.webp",
    "/images/room-gallery/carousel/workScene__img_bottom6.webp",
  ];

  return (
    <section 
      style={{ 
        backgroundColor: '#F5ADBC',
        backgroundImage: 'radial-gradient(circle, rgba(139, 69, 19, 0.08) 1px, transparent 1px)',
        backgroundSize: '6px 6px'
      }} 
      className="flex flex-col items-center pt-[30px] relative overflow-hidden"
    >
      <div 
        className="w-[80%] transition-all duration-1500 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1) perspective(1000px) rotateX(0deg)' : 'scale(0.6) perspective(1000px) rotateX(-15deg)',
          transformOrigin: 'center center',
          filter: isVisible ? 'drop-shadow(0 25px 25px rgba(0,0,0,0.15))' : 'drop-shadow(0 0 0 rgba(0,0,0,0))',
        }}
      >
        <Image
          src="/images/room-gallery/WorkEnvironment.webp"
          alt="作業環境"
          width={1920}
          height={1080}
          className="w-full mb-8 rounded-xl"
          priority
        />
      </div>

      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isVisible ? 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)' : 'none',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1.5s ease-out',
        }}
      />

      <div className="w-full overflow-hidden mb-8">
        <Marquee gradient={false} speed={50} pauseOnHover direction="left">
          {items.map((src, i) => (
            <div key={i} className="mx-2">
              <div className="w-48 h-32 md:w-56 md:h-36 rounded-2xl overflow-hidden border-[6px] border-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={src}
                  alt={`作業スペース ${i + 1}`}
                  width={224}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="w-full overflow-hidden mb-8">
        <Marquee gradient={false} speed={50} pauseOnHover direction="right">
          {items.map((src, i) => (
            <div key={i} className="mx-2">
              <div className="w-48 h-32 md:w-56 md:h-36 rounded-2xl overflow-hidden border-[6px] border-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={src}
                  alt={`作業スペース ${i + 1}`}
                  width={224}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}