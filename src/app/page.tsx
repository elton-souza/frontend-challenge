"use client";
import useProducts from "@/hooks/useProducts";
import ImageWrapper from "@/components/ImageWrapper";

export default function Home() {
  const { products } = useProducts();
  return (
    <main className="py-5 px-4 max-w-[1320px] mx-auto grid grid-cols-5 gap-3">
      {products.map(({ image, title }) => {
        return (
          <div key={title} className="flex flex-col w-auto gap-3">
            <ImageWrapper
              src={image}
              className="w-full h-[250px] object-contain"
            />
            <h3>{title}</h3>
          </div>
        );
      })}
    </main>
  );
}
