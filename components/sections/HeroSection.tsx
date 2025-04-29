"use client";

import { useEffect, useState, useRef } from "react";
import Marquee from "react-fast-marquee";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* マーキー */}
      <div
        className={`fixed top-[28px] left-0 right-0 bg-black/50 overflow-hidden whitespace-nowrap py-1 z-40 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Marquee speed={50} gradient={false}>
          <span className="text-white text-xs px-4">
            ようこそ！最高のサービスと快適な環境をご提供いたします。
          </span>
          <span className="text-white text-xs px-4">
            ようこそ！最高のサービスと快適な環境をご提供いたします。
          </span>
        </Marquee>
      </div>

      {/* ヒーロー動画 */}
      <section className="w-full pt-[60px] pb-0 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-[960px] h-auto object-cover m-0 mx-auto"
        >
          <source src="/videos/hero_427.webm" type="video/webm" />
          <source src="/videos/hero_427.mp4" type="video/mp4" />
          お使いのブラウザは HTML5 ビデオに対応していません。
        </video>
      </section>
    </>
  );
}