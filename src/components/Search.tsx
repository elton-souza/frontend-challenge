"use client";
import useFilter from "@/hooks/useFilter";
import { ChangeEvent, memo } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

function Search() {
  const { search, setSearch } = useFilter();

  const handleChangeTextSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClearSearch = () => setSearch("");

  return (
    <div className="flex items-center gap-2 px-2 py-1 relative">
      <FaSearch />
      <div className="relative">
        <input
          value={search}
          className="border-b-2 border-slate-400 focus-visible:outline-none focus-visible:border-black w-[90%]"
          type="text"
          placeholder="Search product"
          onChange={handleChangeTextSearch}
        />
        {search && (
          <FaTimes
            className="cursor-pointer absolute top-1 right-1"
            onClick={handleClearSearch}
          />
        )}
      </div>
    </div>
  );
}

export default memo(Search);
