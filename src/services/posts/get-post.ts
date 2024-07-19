import { END_POINTS } from "../endPoints";
import { IPost } from "./types/i-post";

export const getPost = async (id: string) => {
  try {
    const res = await fetch(`${END_POINTS.POSTS}/${id}`);
    if (res.ok) {
      return (await res.json()) as IPost;
    }
  } catch (error) {
    throw new Error("Failed to fetch post");
  }
};
