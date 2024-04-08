import { getAllPosts } from "./api";
import Posts from "./components/Posts";

import Header from "@/app/components/Header";
import Contents from "@/app/components/Contents";
import PostBtn from "@/app/components/PostBtn";

export default async function Home() {
  // postsの全取得
  const posts = (await getAllPosts()).reverse();

  return (
    <main>
      <div className="fixed w-full max-w-[638px] bg-white h-[86px] left-0 sm:left-[calc(50%_-_319px)]">
        <Header />
        <Contents />
        <PostBtn />
      </div>
      <Posts posts={posts} />
    </main>
  );
}
