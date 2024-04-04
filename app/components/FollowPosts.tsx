"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaUserCircle } from "react-icons/fa";
import { PostsItem } from "../type";
import { editFollowPosts, deleteFollowPosts, editPosts } from "../api";

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
    <div className="pt-24">
      {posts.map((post) => {
        return (
          <Card key={post.id} className="mb-2 shadow-md">
            <CardHeader>
              <div className="flex items-center">
                <FaUserCircle className="text-xl mr-2" />
                <CardTitle>User{post.userId}</CardTitle>
                {post.isFollow ? (
                  <button
                    className="w-32 text-black text-sm py-1 rounded-2xl ml-auto border border-black"
                    onClick={() => toggleFollow(post)}
                  >
                    フォロー外す
                  </button>
                ) : (
                  <button
                    className="w-32 bg-black text-white text-sm py-1 rounded-2xl ml-auto"
                    onClick={() => toggleFollow(post)}
                  >
                    フォローする
                  </button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg">{post.title}</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm font-extralight">{post.body}</p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default Posts;
