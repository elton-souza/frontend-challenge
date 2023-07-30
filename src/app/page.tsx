"use client";
import useProducts from "@/hooks/useProducts";
import ImageWrapper from "@/components/ImageWrapper";

export default function Home() {
  const { products } = useProducts();

  if (!products) return <></>;

  return (
    <main className="py-5 px-4 min-h-screen max-w-[1320px] mx-auto">
      {products.length ? (
        <section className=" grid grid-cols-5 gap-10">
          {products.map(({ image, title }) => {
            return (
              <div
                key={title}
                className="flex flex-col w-auto gap-3 cursor-pointer"
              >
                <ImageWrapper
                  src={image}
                  className="w-full h-[250px] object-contain"
                />
                <h3 className="text-base font-normal">{title}</h3>
              </div>
            );
          })}
        </section>
      ) : (
        <div className="flex flex-col justify-center items-center mt-10">
          <h3 className="text-2xl mb-2">No products found!</h3>
          <span className="text-xl">Clear your search and try again.</span>
        </div>
      )}
    </main>
  );
}
