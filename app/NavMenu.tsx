import Image from "next/image";
import Link from "next/link";
import React from "react";

export const NavMenu = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "blue",
        padding: "20px",
      }}
    >
      <Link href="/">
        <Image src="/next.svg" width={216} height={20} alt="alt" />
      </Link>
      <ul style={{ display: "flex", gap: "40px" }}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};
