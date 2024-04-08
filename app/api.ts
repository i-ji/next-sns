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
    body: JSON.stringify({
      isFollow: post.isFollow,
      title: post.title,
      body: post.body,
    }),
  });
  const updatedPost = res.json();

  return updatedPost;
};

// postの削除
export const deletePosts = async (post: PostsItem): Promise<PostsItem[]> => {
  const res = await fetch(`http://localhost:3002/posts/${post.id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const deletePost = res.json();
  return deletePost;
};
