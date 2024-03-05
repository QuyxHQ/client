import { useState, useEffect, useRef, useCallback } from "react";
import { useIntersection } from "@mantine/hooks";

function useQuery<T>({ queryFn, options }: useQueryProps<T>) {
  const [data, setData] = useState<T[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [hasReachedEndOfDoc, setHasReachedEndOfDoc] = useState<boolean>(false);

  const lastCardRef = useRef<HTMLElement | null>(null);
  const { ref, entry } = useIntersection({ root: lastCardRef.current, threshold: 1 });

  useEffect(() => {
    (async function () {
      setIsLoading(true);

      const { data: initialData, pagination, status, message } = await queryFn(1, options);
      if (!status) setError(message);
      setIsError(!status);
      setData(initialData);
      setTotal(pagination.total);
      setHasReachedEndOfDoc(initialData.length === 0 || pagination.total === initialData.length);
      setIsLoading(false);
    })();
  }, []);

  const fetchNextPage = useCallback(async () => {
    if (isFetchingNextPage || hasReachedEndOfDoc) return;
    setIsFetchingNextPage(true);

    const nextPage = page + 1;

    const { data: newData, pagination, status, message } = await queryFn(nextPage, options);
    if (!status) setError(message);
    setIsError(!status);
    setData((prev) => [...prev, ...newData]);
    setTotal(pagination.total);
    setHasReachedEndOfDoc(newData.length == 0 || pagination.total == data.length + newData.length);
    setPage(nextPage);
    setIsFetchingNextPage(false);
  }, [queryFn, page, hasReachedEndOfDoc, isFetchingNextPage, data, options]);

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage();
  }, [entry, fetchNextPage]);

  return {
    data,
    isLoading,
    isFetchingNextPage,
    total,
    hasReachedEndOfDoc,
    ref,
    error,
    isError,
  };
}

export default useQuery;
