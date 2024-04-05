"use client";

import React from "react";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { addPosts, addFollowPosts } from "../api";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

const PostBtn = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [randomNum, setRandomNum] = useState(Math.random() * 1e5);

  const postMyForm = async () => {
    if (
      inputTitle === "" ||
      inputBody === "" ||
      inputTitle.length >= 50 ||
      inputBody.length >= 250
    )
      return;

    await addPosts({
      userId: 0,
      id: String(randomNum),
      title: inputTitle,
      body: inputBody,
      isFollow: true,
    });

    await addFollowPosts({
      userId: 0,
      id: String(randomNum),
      title: inputTitle,
      body: inputBody,
      isFollow: true,
    });

    setInputTitle("");
    setInputBody("");
    setRandomNum(Math.random() * 1e5);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <AiFillPlusCircle className="text-6xl cursor-pointer fixed bottom-14 right-5 sm:absolute sm:left-[542px] sm:top-[660px]" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <form className="flex flex-col w-11/12" onSubmit={postMyForm}>
            <input
              type="text"
              className="border border-black px-2 py-1 rounded mb-3"
              placeholder="タイトル"
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
            />
            <textarea
              className="border border-black px-2 py-1 rounded h-40"
              placeholder="本文"
              value={inputBody}
              onChange={(e) => setInputBody(e.target.value)}
            ></textarea>
            <button className="text-white bg-black rounded-xl w-1/6 py-1 ml-auto mt-3">
              POST
            </button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PostBtn;
