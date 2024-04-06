"use client";

import React from "react";
import { SlUserUnfollow } from "react-icons/sl";

import { PostsItem } from "../type";
import { editFollowPosts, deleteFollowPosts, editPosts } from "../api";
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
      await editFollowPosts(_post);
      // posts側での処理
      if (!_post.isFollow) {
        await editPosts(_post);
      }
    }

    // フォローしたユーザーの削除
    for (const _post of newPost) {
      if (!_post.isFollow) {
        await deleteFollowPosts(_post);
      }
    }
    window.location.reload();
  };

  return (
    <div className="pt-24 max-w-[640px] mx-auto">
      {posts.length === 0 && (
        <div className="text-2xl font-bold text-center mt-60">
          <p>フォロー中のユーザーはいません。</p>
        </div>
      )}
      {posts.map((post) => {
        return (
          //   <FollowPost key={post.id} post={post} toggleFollow={toggleFollow} />
          <Post key={post.id} post={post} toggleFollow={toggleFollow} />
        );
      })}
    </div>
  );
};

export default Posts;
