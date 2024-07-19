import { QUERY_KEYS } from "@/constants/queryKeys";
import { getPost } from "@/services/posts/get-post";
import { QueryClient } from "@tanstack/react-query";

interface PostDetailProps {
  params: {
    postId?: string;
  };
}
export default async function PostDetail({ params }: PostDetailProps) {
  const queryClient = new QueryClient();
  const res = await queryClient.fetchQuery({
    queryKey: [QUERY_KEYS.POST.DETAIL, params.postId],
    queryFn: () => getPost(params.postId || ""),
  });

  return (
    <>
      <h3 className="text-bold">{res?.title}</h3>
      <p className="text-sm">{res?.body}</p>
    </>
  );
}
