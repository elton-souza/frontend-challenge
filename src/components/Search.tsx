"use client";
import useFilter from "@/hooks/useFilter";
import { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const { setSearch } = useFilter();

  const handleChangeTextSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex items-center gap-2 px-2 py-1">
      <FaSearch />
      <input
        className="border-b-2 border-slate-400 focus-visible:outline-none focus-visible:border-black"
        type="text"
        placeholder="Search product"
        onChange={handleChangeTextSearch}
      />
    </div>
  );
}
