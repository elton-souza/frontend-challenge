import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "@/components/Header";
import DefaultProvider from "@/components/DefaultProvider";
import "./globals.css";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SizeFashion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <DefaultProvider>
          <Header />
          {children}
        </DefaultProvider>
      </body>
    </html>
  );
}
