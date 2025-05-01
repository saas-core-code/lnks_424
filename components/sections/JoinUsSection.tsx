"use client";

import React from "react";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";

const timelineItems = [
  { time: "20:30", label: "出勤", labelEn: "ARRIVAL", image: "/images/join-us/test2.jpg", description: "『Live Chat Cafe』は店長さんをはじめ全員経験者の女性！ 出勤すると元気な挨拶が飛び交って、職場というより『もうひとつのおうち』みたいな温かさです♪" },
  { time: "20:40", label: "準備", labelEn: "PREPARATION", image: "/images/join-us/test3.jpg", description: "訪問美容師による無料ヘアメイクで女子力UP♪ 衣装部屋には300着以上の衣装と豊富なウィッグ完備。身バレ対策もバッチリです♡" },
  { time: "21:00", label: "配信開始", labelEn: "START STREAM", image: "/images/join-us/test6.jpg", description: "防音バッチリの個室でリラックス配信♡ 会話時間に応じて報酬が発生！アバター配信もOKだから身バレも安心です♪" },
  { time: "22:30", label: "休憩", labelEn: "BREAK TIME", image: "/images/join-us/test9.jpg", description: "配信が一区切りついたら休憩タイム。ドリンクやおやつ、ご飯まで完備♡スタッフさんとおしゃべりしながらリラックス♪" },
  { time: "23:00", label: "配信＆休憩", labelEn: "STREAM & REST", image: "/images/join-us/test11.jpg", description: "休憩を挟みながら退勤時間まで配信！24時間OKだから深夜や早朝も安心♡自分のペースで働けるのが魅力♪" },
  { time: "5:00", label: "配信終了", labelEn: "END STREAM", image: "/images/join-us/test13.jpg", description: "退勤時間が来たら配信終了！部屋をピカピカに清掃して次の子へバトンタッチ♪『きれいな部屋で配信できるって嬉しい！』と好評です♪" },
  { time: "5:10", label: "着替え＆日報記入", labelEn: "CHANGE & REPORT", image: "/images/join-us/test15.jpg", description: "私服に着替えたら日報を記入。『今日はアドバイスで盛り上がった！』など振り返りもバッチリ♪バスルーム完備だから深夜勤務後もさっぱりして帰れます♡" },
  { time: "5:30", label: "退勤", labelEn: "CLOCK OUT", image: "/images/join-us/test18.jpg", description: "『お疲れさまでした！』と元気に挨拶して退勤。お給料は口座振込で安心。『次のお給料日までまた頑張ろう！』とやる気満タンの締めです♪" }
];

export default function JoinUsSection() {
  const srOnlyStyle: React.CSSProperties = {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0px, 0px, 0px, 0px)",
    whiteSpace: "nowrap",
    borderWidth: "0"
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Live Chat Cafeでの1日の流れ",
    "description": "Live Chat Cafeで働く際の1日のスケジュールと流れを説明します。",
    "step": timelineItems.map((item, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": item.label,
      "text": item.description,
      "image": item.image
    }))
  };

  return (
    <>
      <Head>
        <title>Live Chat Cafe｜女性ライバー1日の流れ | 未経験からでも安心して働ける環境</title>
        <meta name="description" content="Live Chat Cafeで働く女性ライバーの1日をご紹介。出勤から退勤まで充実の環境とサポート体制で、未経験からでも安心して始められます。衣装・メイク完備で身バレ対策も万全。" />
        <meta property="og:type" content="website" />
      </Head>

      <section className="w-full pt-8" style={{ background: `repeating-linear-gradient(to bottom, #FFF5F9 0px, #FFF5F9 20px, #FCDDE4 20px, #FCDDE4 40px)` }}>
        <h1 id="page-title" style={srOnlyStyle}>Live Chat Cafeで働く1日の流れ - 未経験からでも安心のサポート体制</h1>

        <div className="container mx-auto px-2 sm:px-4">
          <div className="relative flex justify-center mb-16">
            <img src="/images/join-us/test1.jpg" alt="Live Chat Cafeライバーの1日の流れ紹介" className="w-full max-w-2xl rounded-2xl shadow-md" aria-labelledby="page-title" />
          </div>

          <article className="relative flex flex-col items-center pt-24 pb-24 space-y-12">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            
            {/* メインのタイムライン - 一本の縦線で実装 */}
            <div
              className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1"
              style={{
                background: "linear-gradient(180deg, transparent 0%, rgba(244, 114, 182, 0.6) 10%, rgba(244, 114, 182, 0.8) 20%, rgba(244, 114, 182, 1) 30%, rgba(244, 114, 182, 1) 70%, rgba(244, 114, 182, 0.8) 80%, rgba(244, 114, 182, 0.6) 90%, transparent 100%)"
              }}
              aria-hidden="true"
            />

            {timelineItems.map((item, idx) => (
              <motion.section
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center w-full max-w-4xl"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white border-2 border-pink-200 rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-md z-10">
                  <Clock className="text-pink-300 w-4 h-4 mb-1" aria-hidden="true" />
                  <time className="text-[#FF6B81] text-sm font-bold">{item.time}</time>
                </div>

                <div className="relative bg-white rounded-2xl shadow-md p-2 w-full">
                  <div className="absolute top-0 right-0 w-32 h-32">
                    <div className="triangle-stripe-accent w-full h-full" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-32 h-32">
                    <div className="triangle-stripe-accent triangle-stripe-accent--bottom-left w-full h-full" />
                  </div>

                  <div className={`relative rounded-2xl p-6 ${item.label === '配信＆休憩' ? 'border border-pink-200' : 'border-2 border-dashed border-pink-300'}`}>
                    <div className="flex flex-col items-center mt-4">
                      <h2 className="text-2xl font-bold leading-tight tracking-wide text-center fancy-title">
                        {item.label}
                      </h2>
                      <span className="mt-2 mb-2 fancy-en-title">
                        {item.labelEn}
                      </span>
                    </div>
                    <div className="border-t border-pink-200 mt-2 mb-4" aria-hidden="true" />

                    <div className="flex flex-col md:flex-row gap-6">
                      <figure className="flex-1">
                        <img src={item.image} alt={`${item.label}の様子`} className="rounded-lg w-full shadow-md" loading="lazy" />
                      </figure>
                      <motion.div 
                        className="flex-1"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.8,
                          ease: [0.34, 1.56, 0.64, 1],
                          delay: 0.2
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-white rounded-lg p-4 shadow-lg border border-pink-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                          <motion.p
                            className="text-sm text-gray-700 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                              duration: 0.6,
                              ease: "easeOut",
                              delay: 0.4
                            }}
                            viewport={{ once: true }}
                          >
                            {item.description}
                          </motion.p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}