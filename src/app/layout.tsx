import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "데레",
  description: "해보고 싶은 거 해보는 기술 블로그",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSansKr.className}>
      <body>
        <Header />
        <main className="pt-16 pb-32 px-4 md:max-w-7xl mx-auto min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
