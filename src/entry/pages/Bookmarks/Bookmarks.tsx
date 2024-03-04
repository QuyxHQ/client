import { Card, EmptyIcon } from "../..";
import { useInfiniteQuery } from "@tanstack/react-query";
import { api } from "../../../utils/class/api.class";
import { useEffect, useRef } from "react";
import { useIntersection } from "@mantine/hooks";

const Bookmarks = () => {
  const { data, fetchNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["query"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await api.getBookmarks({ page: pageParam });
      return response;
    },
    initialPageParam: 1,
    getNextPageParam: (_, __, lastPageParam) => lastPageParam + 1,
  });

  const lastCardRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({ root: lastCardRef.current, threshold: 1 });

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage();
  }, [entry]);

  const bookmarks = data?.pages.flatMap((item) => item);

  return (
    <section className="mb-5">
      <div className="container-fluid container-xl">
        <div className="row">
          <div className="col-12">
            <div className="px-2">
              <div className="page">
                <h1 className="page-title">Bookmarks</h1>
                <p>-- saved item/s</p>
              </div>

              <div className="col-12">
                <div className="row g-4">
                  {isLoading ? (
                    <div className="col-12">
                      <div className="d-flex align-items-center justify-content-center loader-box">
                        <span className="loader-span" />
                      </div>
                    </div>
                  ) : bookmarks && bookmarks.length > 0 ? (
                    <>
                      {bookmarks.map((bookmark, i) =>
                        bookmark ? (
                          <div
                            key={`result-page-index-${i}`}
                            ref={i === bookmarks.length ? ref : undefined}
                            className="col-12 col-md-6 col-lg-4"
                          >
                            <Card key={bookmark._id} data={bookmark.card} displayOwner />
                          </div>
                        ) : null
                      )}

                      {isFetchingNextPage ? (
                        <div className="col-12">
                          <div className="d-flex align-items-center justify-content-center py-5">
                            <span className="loader-span-sm" />
                          </div>
                        </div>
                      ) : null}
                    </>
                  ) : (
                    <div className="col-12">
                      <div className="empty-res">
                        <EmptyIcon />

                        <h3>Bookmark is empty</h3>
                        <p>Once you bookmark a card, it will appear here</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookmarks;
