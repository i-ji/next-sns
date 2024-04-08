import { getAllPosts } from "../api";
import FollowPosts from "../components/FollowPosts";

import Header from "@/app/components/Header";
import Contents from "@/app/components/Contents";
import PostBtn from "@/app/components/PostBtn";

export default async function Home() {
  // postsの全取得
  const posts = (await getAllPosts()).filter((post) => {
    return post.isFollow;
  });
  const reversePosts = posts.reverse();

  return (
    <main>
      <div className="fixed w-full max-w-[638px] bg-white h-[86px] left-[calc(50%_-_319px)]">
        <Header />
        <Contents />
        <PostBtn />
      </div>
      <FollowPosts posts={reversePosts} />
    </main>
  );
}
