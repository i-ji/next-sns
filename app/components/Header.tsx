"use client";

import React from "react";
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
    <div className="flex items-center justify-between text-2xl pt-3">
      <Dialog>
        <DialogTrigger>
          <FaUser className="cursor-pointer" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="flex items-center gap-5 mb-5">
              <FaUser className="text-2xl" />
              <DialogTitle className="text-2xl">User0</DialogTitle>
            </div>

            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <FaTwitter className="cursor-pointer" onClick={returnTop} />
      <GoGear />
    </div>
  );
};

export default Header;
