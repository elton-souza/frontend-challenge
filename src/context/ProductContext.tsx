"use client";

import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import fetcher from "@/api/fetcher";
import useFilter from "@/hooks/useFilter";
import { ProductItem } from "@/types/product";

interface IProductContext {
  products: ProductItem[];
  categories: string[];
}

export const ProductContext = createContext<IProductContext>({
  products: [],
  categories: [],
});

const URL = "https://static.sizebay.technology/assets/storeCollections.json";

export default function ProductContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const { filterType, search } = useFilter();

  const categories = useMemo(
    () => Array.from(new Set(products.map(({ category }) => category))),
    [products]
  );

  const filteredProducts = useMemo(() => {
    const filteredProductsByType = products.filter(
      ({ category }) => category === filterType
    );

    const filteredBySearch = products.filter(({ title }) =>
      title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    const allFilters = products.filter(
      ({ category, title }) =>
        category === filterType &&
        title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    if (!filterType && !search) return products;
    if (filterType && !search) return filteredProductsByType;
    if (!filterType && search) return filteredBySearch;

    return allFilters;
  }, [products, filterType, search]);

  useEffect(() => {
    (async () => {
      const { data } = await fetcher<ProductItem[]>(URL);
      setProducts(data);
    })();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products: filteredProducts,
        categories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
