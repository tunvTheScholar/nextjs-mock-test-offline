"use client";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { getPosts } from "@/services/posts/get-posts";
import { ISearchParams } from "@/types/i-search-params";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface MainContentProps {
  searchParams?: ISearchParams;
}
export default function MainContent({ searchParams }: MainContentProps) {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.POST.LIST, searchParams],
    queryFn: () => getPosts(searchParams),
  });

  return (
    <>
      <ul>
        {data?.map(({ body, id, title, userId }) => (
          <li key={id} data-user-id={userId} className="p-2">
            <Link href={`/posts/${id}`} prefetch>
              <h3 className="h3">{title}</h3>
            </Link>
            <p className="text-sm">{body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
