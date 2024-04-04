import { PostsItem } from "./type";

// postsを全取得する
export const getAllPosts = async (): Promise<PostsItem[]> => {
  const res = await fetch("http://localhost:3002/posts", {
    cache: "no-store",
  });
  const posts = res.json();
  return posts;
};

// postsに追加
export const addPosts = async (post: PostsItem) => {
  const res = await fetch(`http://localhost:3002/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  const newPost = res.json();
  return newPost;
};

// postの編集(isFollow)
export const editPosts = async (post: PostsItem): Promise<PostsItem[]> => {
  const res = await fetch(`http://localhost:3002/posts/${post.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isFollow: post.isFollow }),
  });
  const updatedPost = res.json();

  return updatedPost;
};

// followPostsの全取得
export const getAllFollowPosts = async (): Promise<PostsItem[]> => {
  const res = await fetch("http://localhost:3003/followPosts", {
    cache: "no-store",
  });
  const posts = res.json();
  return posts;
};

// followPostsに追加
export const addFollowPosts = async (post: PostsItem) => {
  const res = await fetch(`http://localhost:3003/followPosts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  const newPost = res.json();
  return newPost;
};

// followPostの編集(isFollow)
export const editFollowPosts = async (
  post: PostsItem
): Promise<PostsItem[]> => {
  const res = await fetch(`http://localhost:3003/followPosts/${post.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isFollow: post.isFollow }),
  });
  const updatedPost = res.json();

  return updatedPost;
};

// followPostの削除
export const deleteFollowPosts = async (
  post: PostsItem
): Promise<PostsItem[]> => {
  const res = await fetch(`http://localhost:3003/followPosts/${post.id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const deletePost = res.json();

  return deletePost;
};