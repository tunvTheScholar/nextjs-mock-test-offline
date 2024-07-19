import { ISearchParams } from "@/types/i-search-params";
import { END_POINTS } from "../endPoints";
import { IPost } from "./types/i-post";

export const getPosts = async (searchParams?: ISearchParams) => {
  const url = new URL(END_POINTS.POSTS);
  url.searchParams.set("_limit", searchParams?.m || "10");
  url.searchParams.set("_page", searchParams?.p || "1");

  try {
    const res = await fetch(url);
    if (res.ok) {
      return (await res.json()) as IPost[];
    }
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};
