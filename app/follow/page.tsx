import { getAllFollowPosts } from "../api";
import FollowPosts from "../components/FollowPosts";

export default async function Home() {
  // postsの全取得
  const posts = (await getAllFollowPosts()).reverse();

  return (
    <main className="">
      <FollowPosts posts={posts} />
    </main>
  );
}
