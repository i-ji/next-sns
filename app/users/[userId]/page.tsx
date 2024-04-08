import React from "react";

import { getAllPosts } from "@/app/api";
import UserPosts from "@/app/components/UserPosts";
import UserHeader from "@/app/components/UserHeader";

interface Users {
  params: { userId: string };
}

const Users: React.FC<Users> = async (props) => {
  const posts = (await getAllPosts()).filter((post) => {
    return String(post.userId) === props.params.userId;
  });
  const reversePosts = posts.reverse();

  return (
    <div>
      <UserHeader params={props.params} />
      <UserPosts posts={reversePosts} />
    </div>
  );
};

export default Users;
