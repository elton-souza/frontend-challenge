"use client";

import { memo } from "react";
import useFilter from "@/hooks/useFilter";
import useProducts from "@/hooks/useProducts";
import clsx from "clsx";

function Categories() {
  const { filterType, setFilterType } = useFilter();
  const { categories } = useProducts();

  return (
    <ul className="flex items-center gap-4">
      {categories.map((category) => {
        const isActive = category === filterType;
        return (
          <li
            key={category}
            className={clsx("tracking-widest uppercase cursor-pointer", {
              "font-normal": !isActive,
              "font-bold": isActive,
            })}
            onClick={() => setFilterType(category)}
          >
            {category}
          </li>
        );
      })}
    </ul>
  );
}

export default memo(Categories);
