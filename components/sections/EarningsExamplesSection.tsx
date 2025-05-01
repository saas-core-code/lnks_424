"use client";

export default function EarningsExamplesSection() {
  return (
    <section className="w-full m-0 p-0 bg-black">
      {/* 動画の本来のアスペクト比で全体表示 */}
      <div className="flex justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/videos/EarningsExamples-poster.jpg"
          className="block w-full h-auto object-contain"
          aria-hidden="true"
        >
          {/* iOS向けにMP4を最初に読み込む */}
          <source src="/videos/EarningsExamples.mp4" type="video/mp4" />
          {/* 対応ブラウザではWebM */}
          <source src="/videos/EarningsExamples.webm" type="video/webm" />
          お使いのブラウザは動画の再生に対応していません。
        </video>
      </div>
    </section>
  );
}
