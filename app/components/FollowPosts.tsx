"use client";

import React from "react";

import { PostsItem } from "../type";
import { editPosts } from "../api";
import Post from "./Post";

interface PostsType {
  posts: PostsItem[];
}

const Posts: React.FC<PostsType> = ({ posts }) => {
  const toggleFollow = async (post: PostsItem) => {
    const newPost = posts.filter((_post) => {
      return _post.userId === post.userId;
    });

    // フォローのつけ外し
    newPost.forEach((_post) => {
      _post.isFollow = !_post.isFollow;
    });
    for (const _post of newPost) {
      // posts側での処理
      if (!_post.isFollow) {
        await editPosts(_post);
      }
    }

    window.location.reload();
  };

  return (
    <div className="pt-24 max-w-[638px] mx-auto">
      {posts.length === 0 && (
        <div className="text-2xl font-bold text-center mt-60">
          <p>フォロー中のユーザーはいません。</p>
        </div>
      )}
      {posts.map((post) => {
        return <Post key={post.id} post={post} toggleFollow={toggleFollow} />;
      })}
    </div>
  );
};

export default Posts;
