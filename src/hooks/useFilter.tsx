"use client";
import { FilterContext } from "@/context/FilterContext";
import { useContext } from "react";

export default function useFilter() {
  return useContext(FilterContext);
}
