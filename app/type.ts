export type RecommendedOrFollow = "recommended" | "follow";

export type Contents = {
  // setContent: Dispatch<SetStateAction<RecommendedOrFollow>>;
  setContent: any;
};

// postの型
export type PostsItem = {
  userId: number;
  id: string;
  title: string;
  body: string;
  isFollow: boolean;
};
