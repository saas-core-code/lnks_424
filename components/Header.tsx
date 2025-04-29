"use client";

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'room-gallery', name: 'ルームギャラリー' },
    { id: 'pain-points', name: '課題解決' },
    { id: 'join-us', name: '参加のご案内' },
    { id: 'reasons', name: '選ばれる理由' },
    { id: 'earnings', name: '収入例' },
    { id: 'income-stats', name: '収入統計' },
    { id: 'user-voices', name: 'ユーザーの声' },
    { id: 'choice-reasons', name: '選択の理由' },
    { id: 'benefits', name: '特典比較' },
    { id: 'studio-tour', name: 'スタジオツアー' },
    { id: 'faq', name: 'よくある質問' },
    { id: 'application', name: '申し込みの流れ' },
  ];

  return (
    <>
      <header className={`w-full py-2 bg-white shadow-sm fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-opacity-90 backdrop-blur-sm' : ''}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-sm font-medium tracking-wide">LIVE LINKS</div>
          <button 
            className="block" 
            aria-label="メニュー"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* モバイルナビゲーション - オーバーレイ */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* モバイルナビゲーション - メニュー */}
      <nav 
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="mb-4">
            <h2 className="text-sm font-medium text-gray-900">セクション一覧</h2>
          </div>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id} className="border-b border-gray-100">
                <a
                  href={`#${section.id}`}
                  className="block py-1.5 text-xs text-gray-800 hover:text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}