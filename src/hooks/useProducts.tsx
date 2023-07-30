"use client";
import { ProductContext } from "@/context/ProductContext";
import { useContext } from "react";

export default function useProducts() {
  return useContext(ProductContext);
}
