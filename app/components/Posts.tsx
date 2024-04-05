"use client";

import React from "react";
import Post from "../components/Post";
import { PostsItem } from "../type";

import {
  editPosts,
  deletePosts,
  addFollowPosts,
  deleteFollowPosts,
} from "../api";

interface PostsType {
  posts: PostsItem[];
}

const Posts: React.FC<PostsType> = ({ posts }) => {
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
      if (_post.isFollow) {
        // フォローしたユーザーの追加
        await addFollowPosts(_post);
      } else if (!_post.isFollow) {
        // フォローしたユーザーの削除
        await deleteFollowPosts(_post);
      }
    }
    window.location.reload();
  };

  return (
    <div className="pt-24 max-w-[640px] mx-auto">
      {posts.map((post) => {
        return <Post key={post.id} post={post} toggleFollow={toggleFollow} />;
      })}
    </div>
  );
};

export default Posts;
