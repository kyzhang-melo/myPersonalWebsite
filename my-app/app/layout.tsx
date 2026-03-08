import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "个人网站",
  description: "Kaiyuan Zhang 的个人网站 - AI 创作者",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
