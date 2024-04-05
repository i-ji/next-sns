"use client";

import React from "react";

import { PostsItem } from "../type";
import { editFollowPosts, deleteFollowPosts, editPosts } from "../api";
import FollowPost from "./FollowPost";

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
      {posts.map((post) => {
        return (
          <FollowPost key={post.id} post={post} toggleFollow={toggleFollow} />
        );
      })}
    </div>
  );
};

export default Posts;
