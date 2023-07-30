import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "@/components/Header";
import FilterContextProvider from "@/context/FilterContext";
import ProductContextProvider from "@/context/ProductContext";
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
        <FilterContextProvider>
          <ProductContextProvider>
            <Header />
            {children}
          </ProductContextProvider>
        </FilterContextProvider>
      </body>
    </html>
  );
}
