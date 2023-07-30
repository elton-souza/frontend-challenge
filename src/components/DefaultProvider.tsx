import FilterContextProvider from "@/context/FilterContext";
import ProductContextProvider from "@/context/ProductContext";
import { ReactNode } from "react";

interface DefaultProviderProps {
  children: ReactNode;
}
export default function DefaultProvider({ children }: DefaultProviderProps) {
  return (
    <FilterContextProvider>
      <ProductContextProvider>{children}</ProductContextProvider>
    </FilterContextProvider>
  );
}
