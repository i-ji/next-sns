"use client";

import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { GoGear } from "react-icons/go";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Header = () => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center justify-between text-2xl pt-3">
      <HoverCard>
        <HoverCardTrigger>
          <FaUser className="cursor-pointer" />
        </HoverCardTrigger>
        <HoverCardContent className="text-sm">User0</HoverCardContent>
      </HoverCard>

      {/* <FaUser className="cursor-pointer" /> */}
      <FaTwitter className="cursor-pointer" onClick={returnTop} />
      <GoGear />
    </div>
  );
};

export default Header;
