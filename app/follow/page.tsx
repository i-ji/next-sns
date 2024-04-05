import { getAllFollowPosts } from "../api";
import FollowPosts from "../components/FollowPosts";

import Header from "@/app/components/Header";
import Contents from "@/app/components/Contents";
import PostBtn from "@/app/components/PostBtn";

export default async function Home() {
  // postsの全取得
  const posts = (await getAllFollowPosts()).reverse();

  return (
    <main className="">
      <div className="fixed w-full max-w-[638px] bg-white h-[86px] left-[calc(50%_-_319px)]">
        <Header />
        <Contents />
        <PostBtn />
      </div>
      <FollowPosts posts={posts} />
    </main>
  );
}
