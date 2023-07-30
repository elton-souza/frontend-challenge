"use client";

import useFilter from "@/hooks/useFilter";
import useProducts from "@/hooks/useProducts";
import clsx from "clsx";

export default function Categories() {
  const { filterType, setFilterType } = useFilter();
  const { categories } = useProducts();

  return (
    <ul className="flex items-center gap-4">
      {categories.map((category) => (
        <li
          key={category}
          className={clsx(
            "font-normal tracking-widest uppercase cursor-pointer",
            {
              "font-bold": filterType === category,
            }
          )}
          onClick={() => setFilterType(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
