import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "麻雀スコア管理アプリ",
  description: "麻雀の対局スコアを簡単に記録・管理できます。",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon",
      url: "/apple-icon.png",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
