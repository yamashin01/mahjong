import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url('/images/top-bgImage.jpg')] bg-cover bg-no-repeat min-h-screen">
      <div className="bg-white/80 min-h-screen">
        <div className="relative flex flex-col gap-4 items-center justify-center px-4 min-h-screen">
          <div className="text-3xl md:text-7xl font-bold text-gray text-center mb-8">
            麻雀スコア管理
          </div>
          <div className="font-light text-xl md:text-3xl text-gray-800 py-4 text-center">
            対局したスコアを記録しましょう
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8 justify-center">
            <Link href="/games/new">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full text-lg">
                対局を記録する
              </button>
            </Link>
            <Link href="/history">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full text-lg">
                対局履歴を見る
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
