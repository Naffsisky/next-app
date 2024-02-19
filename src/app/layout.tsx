import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layout/header";
import Footer from "./layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nap Next App",
  description: "Belajar Next JS",
  icons: {
    icon: { url: "/favicon.ico" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-base-100 wrapper">
          <div>
            <Header />
          </div>
          <div className="content container mx-auto">{children}</div>
          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
