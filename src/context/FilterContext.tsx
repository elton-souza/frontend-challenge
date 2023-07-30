"use client";

import { createContext, ReactNode, useDeferredValue, useState } from "react";

export const FilterContext = createContext({
  filterType: "",
  search: "",
  setFilterType: (data: string) => {},
  setSearch: (data: string) => {},
});

export default function FilterContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [filterType, setFilterType] = useState("");
  const [search, setSearch] = useState("");

  const dSearch = useDeferredValue(search);

  const handleChangeFilterType = (nextFilter: string) => {
    setFilterType((oldState) => (nextFilter === oldState ? "" : nextFilter));
  };

  return (
    <FilterContext.Provider
      value={{
        filterType,
        search: dSearch,
        setFilterType: handleChangeFilterType,
        setSearch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
