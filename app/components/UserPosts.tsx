"use client";

import React from "react";
import { PostsItem } from "../type";
import { editPosts } from "@/app/api";
import Post from "@/app/components/Post";

interface UserPosts {
  posts: PostsItem[];
}

const UserPosts: React.FC<UserPosts> = ({ posts }) => {
  // フォローボタンを押した時の処理
  const toggleFollow = async (post: PostsItem) => {
    const newPost = posts.filter((_post) => {
      return _post.userId === post.userId;
    });
    newPost.forEach((_post) => {
      _post.isFollow = !_post.isFollow;
    });
    for (const _post of newPost) {
      // フォローのつけ外し
      await editPosts(_post);
    }
    window.location.reload();
  };
  return (
    <main className="pt-24 mx-auto max-w-[638px]">
      {posts.length === 0 && (
        <div className="text-2xl font-bold text-center mt-60">
          <p>まだ投稿はありません。</p>
        </div>
      )}
      {posts.map((post) => {
        return <Post key={post.id} post={post} toggleFollow={toggleFollow} />;
      })}
    </main>
  );
};

export default UserPosts;
