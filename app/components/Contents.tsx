"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Contents: React.FC = () => {
  const router = usePathname();

  let initialBool: boolean;
  if (router === "/") {
    initialBool = true;
  } else {
    initialBool = false;
  }

  // おすすめorフォロー中
  const [isRecommended, setIsRecommended] = useState(initialBool);
  return (
    <div className="flex justify-between pt-2">
      <Link
        href="/"
        className={`w-1/2 text-center cursor-pointer py-2 hover:bg-gray-100 ${
          isRecommended ? "text-gray-400 border-b-2 border-gray-300" : ""
        }`}
        onClick={() => setIsRecommended(true)}
      >
        おすすめ
      </Link>
      <Link
        href="/follow"
        className={`w-1/2 text-center cursor-pointer py-2 hover:bg-gray-100 ${
          !isRecommended ? "text-gray-400 border-b-2 border-gray-300" : ""
        }`}
        onClick={() => setIsRecommended(false)}
      >
        フォロー中
      </Link>
    </div>
  );
};

export default Contents;
