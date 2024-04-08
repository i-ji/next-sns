"use client";

import React from "react";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { GoGear } from "react-icons/go";

const Header = () => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="flex items-center justify-between text-2xl pt-3 px-6">
      <Link href={`/users/0`}>
        <FaUser className="cursor-pointer" />
      </Link>

      <FaTwitter className="cursor-pointer " onClick={returnTop} />
      <GoGear />
    </header>
  );
};

export default Header;
