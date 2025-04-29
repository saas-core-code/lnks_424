export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">会社情報</h3>
            <p>会社名</p>
            <p>住所</p>
            <p>連絡先</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>サービス</li>
              <li>会社情報</li>
              <li>お問い合わせ</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">SNS</h3>
            <div className="flex space-x-4">
              {/* SNSアイコンのプレースホルダー */}
              <span>X</span>
              <span>Instagram</span>
              <span>YouTube</span>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} 会社名. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}