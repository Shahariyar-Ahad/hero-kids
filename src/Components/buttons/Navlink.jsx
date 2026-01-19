"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children }) => {
  const pathname = usePathname(); // ✅ string

  const isActive =
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`font-medium ${isActive ? "text-primary" : ""}`}
    >
      {children}
    </Link>
  );
};

export default Navlink;
