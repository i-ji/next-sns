"use client";

import React from "react";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";

interface UserHeader {
  params: {
    userId: string;
  };
}

const UserHeader: React.FC<UserHeader> = ({ params }) => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bg-white w-full max-w-[638px] h-[86px] px-5 sm:left-[calc(50%_-_319px)] border-b-2 border-gray-300">
      <header className="flex items-center justify-between pt-3 text-2xl px-1">
        <Link href={"/"} scroll={false}>
          <IoMdArrowBack />
        </Link>
        <FaTwitter className="cursor-pointer" onClick={returnTop} />
        <GoGear className="cursor-pointer" />
      </header>

      <div className="mt-2 flex items-center gap-3">
        {params.userId === "0" ? (
          <FaUser className="text-2xl ml-[6px]" />
        ) : (
          <FaUserCircle className="text-2xl ml-[6px]" />
        )}

        <p>User{params.userId}</p>
      </div>
    </div>
  );
};

export default UserHeader;
