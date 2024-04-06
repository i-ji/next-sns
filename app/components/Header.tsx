"use client";

import React from "react";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { GoGear } from "react-icons/go";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Header = () => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center justify-between text-2xl pt-3 px-5">
      <Link href={`/users/0`}>
        <FaUser className="cursor-pointer" />
      </Link>

      <FaTwitter className="cursor-pointer " onClick={returnTop} />
      <GoGear />
    </div>
  );
};

export default Header;
