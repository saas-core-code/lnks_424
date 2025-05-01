export default function EarningsExamplesSection() {
  return (
    <section className="w-full m-0 p-0 bg-black">
      {/* アスペクト比を16:9で固定 */}
      <div className="w-full aspect-video overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/EarningsExamples-poster.jpg"  // あらかじめ動画の最初のフレームなどで作成しておく
          className="w-full h-full object-cover"
        >
          {/* iOS系はまずMP4で再生 */}
          <source src="/videos/EarningsExamples.mp4" type="video/mp4" />
          {/* 可能なブラウザではWebM */}
          <source src="/videos/EarningsExamples.webm" type="video/webm" />
          お使いのブラウザは動画の再生に対応していません。
        </video>
      </div>
    </section>
  );
}