"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaUserCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { PostsItem } from "../type";
import {
  deletePosts,
  deleteFollowPosts,
  editPosts,
  editFollowPosts,
} from "../api";

interface Post {
  post: PostsItem;
  toggleFollow: (post: PostsItem) => void;
}

const Post: React.FC<Post> = ({ post, toggleFollow }) => {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedBody, setEditedBody] = useState(post.body);

  // 自分の投稿を削除
  const deleteMyPost = async (post: PostsItem) => {
    await deletePosts(post);
    await deleteFollowPosts(post);
    window.location.reload();
  };

  // 自分の投稿を編集
  const editMyPost = () => {
    setEditing(true);
  };

  // 編集した投稿をセーブ
  const saveMyPost = async (post: PostsItem) => {
    if (
      editedTitle === "" ||
      editedBody === "" ||
      editedTitle.length >= 50 ||
      editedBody.length >= 250
    )
      return;

    await editPosts({
      userId: 0,
      id: post.id,
      title: editedTitle,
      body: editedBody,
      isFollow: true,
    });

    await editFollowPosts({
      userId: 0,
      id: post.id,
      title: editedTitle,
      body: editedBody,
      isFollow: true,
    });

    setEditedTitle(editedTitle);
    setEditedBody(editedBody);
    setEditing(false);
    window.location.reload();
  };

  // フォローボタン
  const followBtn = post.isFollow ? (
    <button
      className="w-32 text-black text-sm py-1 rounded-2xl ml-auto border border-black hover:bg-gray-50"
      onClick={() => toggleFollow(post)}
    >
      フォロー中
    </button>
  ) : (
    <button
      className="w-32 bg-black text-white text-sm py-1 rounded-2xl ml-auto hover:bg-black/70"
      onClick={() => toggleFollow(post)}
    >
      フォローする
    </button>
  );

  // 編集ボタン&削除ボタン
  const editOrDelete = (
    <div className="flex items-center text-2xl gap-3 ml-auto">
      {editing ? (
        <CiSaveDown2
          className="cursor-pointer"
          onClick={() => saveMyPost(post)}
        />
      ) : (
        <FaRegEdit className="cursor-pointer" onClick={editMyPost} />
      )}

      <MdDelete className="cursor-pointer" onClick={() => deleteMyPost(post)} />
    </div>
  );

  return (
    <Card className="mb-2 shadow-md">
      <CardHeader>
        <div className="flex items-center">
          <Link href={`/users/${post.userId}`} className="flex items-center">
            <FaUserCircle className="text-2xl mr-2" />
            <CardTitle className="hover:underline">User{post.userId}</CardTitle>
          </Link>

          {post.userId === 0 ? editOrDelete : followBtn}
        </div>
      </CardHeader>
      <CardContent>
        {editing ? (
          <input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full border border-black px-2 py-1 rounded"
          />
        ) : (
          <p className="text-lg">{post.title}</p>
        )}
      </CardContent>
      <CardFooter>
        {editing ? (
          <textarea
            value={editedBody}
            onChange={(e) => setEditedBody(e.target.value)}
            className="w-full border border-black px-2 py-1 rounded"
          ></textarea>
        ) : (
          <p className="text-sm font-extralight">{post.body}</p>
        )}
      </CardFooter>
    </Card>
  );
};

export default Post;
