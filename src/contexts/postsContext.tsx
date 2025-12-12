import { createContext } from "react";

interface Post {
  id: number;
  title: string;
  desc: string;
}

export const PostsContext = createContext<Post[]>([]);
