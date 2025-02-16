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
            対局を開始し、スコアを記録しましょう
          </div>
          <div className="flex gap-4 mt-8">
            <Link href="/games/new">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full text-lg">
                対局開始
              </button>
            </Link>
            <Link href="/history">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full text-lg">
                対局履歴
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
