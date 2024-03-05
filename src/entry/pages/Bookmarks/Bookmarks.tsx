import { Card, EmptyIcon } from "../..";
import { api } from "../../../utils/class/api.class";
import useQuery from "../../hooks/useQuery";
import { MOCK_EMPTY_API_RESPONSE } from "../../../utils/constants";

const Bookmarks = () => {
  const { isLoading, isFetchingNextPage, data, ref, total } = useQuery({
    queryFn: async function (page) {
      const resp = await api.getBookmarks({ page, limit: 12 });
      return resp ? resp : MOCK_EMPTY_API_RESPONSE;
    },
  });

  return (
    <section className="mb-5">
      <div className="container-fluid container-xl">
        <div className="row">
          <div className="col-12 mb-4">
            <div className="px-2">
              <div className="page mb-4 pb-2">
                <h1 className="page-title">Bookmarks</h1>
                <p>{isLoading ? "--" : total} saved item/s</p>
              </div>

              <div className="col-12">
                <div className="row g-4">
                  {isLoading ? (
                    <div className="col-12">
                      <div className="d-flex align-items-center justify-content-center loader-box">
                        <span className="loader-span" />
                      </div>
                    </div>
                  ) : data.length > 0 ? (
                    <>
                      {data.map((bookmark, i) =>
                        bookmark ? (
                          <div
                            key={`bookmark-index-${i}`}
                            ref={i === data.length - 1 ? ref : undefined}
                            className="col-12 col-md-6 col-lg-4"
                          >
                            <Card key={bookmark._id} data={bookmark.card} displayOwner />
                          </div>
                        ) : null
                      )}

                      {isFetchingNextPage ? (
                        <div className="col-12">
                          <div className="d-flex align-items-center justify-content-center py-3">
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
