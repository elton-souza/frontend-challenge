"use client";

import Image from "next/image";
import Categories from "./Categories";
import Search from "./Search";
import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-[1320px] py-5 mx-auto flex flex-col items-center gap-10">
      <Link href="/">
        <Image
          width={250}
          height={84}
          className="w-[250px] h-auto"
          priority
          src="/sizebay-logo.png"
          alt="Sizebay Logo"
        />
      </Link>
      <nav className="w-full flex items-center justify-between px-4">
        <Categories />
        <Search />
      </nav>
    </header>
  );
}
