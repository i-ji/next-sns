import { getAllPosts } from "./api";
import Posts from "./components/Posts";

export default async function Home() {
  // postsの全取得
  const posts = (await getAllPosts()).reverse();

  return (
    <main className="">
      <Posts posts={posts} />
    </main>
  );
}
