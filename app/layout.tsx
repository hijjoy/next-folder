import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./_components/sidebar";

export const metadata: Metadata = {
  title: "notion",
  description: "hyewon folder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="w-full h-screen flex">
        <Sidebar />
        <main className="w-4/5 h-full flex">{children}</main>
      </body>
    </html>
  );
}
