import { QUERY_KEYS } from "@/constants/queryKeys";
import { getPosts } from "@/services/posts/get-posts";
import { ISearchParams } from "@/types/i-search-params";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import MainContent from "./_components/MainContent";

interface PostPageProps {
  searchParams?: ISearchParams;
}
export default async function PostPage({ searchParams }: PostPageProps) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.POST.LIST, searchParams],
    queryFn: () => getPosts(searchParams),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MainContent searchParams={searchParams} />
    </HydrationBoundary>
  );
}
