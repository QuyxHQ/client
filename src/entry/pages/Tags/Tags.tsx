import { api } from "../../../utils/class/api.class";
import useQuery from "../../hooks/useQuery";
import { DEFAULT_CHAIN, MOCK_EMPTY_API_RESPONSE } from "../../../utils/constants";
import { useAppStore } from "../../context/AppProvider";
import { AnchorLink, EmptyIcon } from "../..";

const Tags = () => {
  const { chainId } = useAppStore();

  const { isLoading, isFetchingNextPage, data, ref } = useQuery({
    queryFn: async function (page) {
      const resp = await api.getTags(
        { chainId: String(chainId ? chainId : DEFAULT_CHAIN.chainId) },
        { page, limit: 12 }
      );

      return resp ? resp : MOCK_EMPTY_API_RESPONSE;
    },
  });

  return (
    <div className="container-fluid container-xl mb-5">
      <div className="row">
        <div className="col-12">
          <div className="px-2">
            <div className="page">
              <h1 className="page-title mb-4">
                Tags <span>(~#)</span>
              </h1>

              {isLoading ? (
                <div className="col-12">
                  <div className="d-flex justify-content-center py-5 my-5">
                    <span className="loader-span mt-5"></span>
                  </div>
                </div>
              ) : data.length > 0 ? (
                <div className="col-12">
                  <div className="row g-4">
                    {data.map((tag, i) =>
                      tag ? (
                        <div
                          className="col-12 col-md-6 col-lg-4"
                          key={`tag-index-${i}`}
                          ref={i === data.length - 1 ? ref : undefined}
                        >
                          <AnchorLink to={`/tag/${tag._id}`}>
                            <div className="tag-box">
                              <h3>{tag._id}</h3>
                              <p>
                                <i className="h h-wind" />
                                <span>{tag.count.toLocaleString()} card/s</span>
                              </p>
                            </div>
                          </AnchorLink>
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
                  </div>
                </div>
              ) : (
                <div className="col-12">
                  <div className="empty-res">
                    <EmptyIcon />

                    <h3>Empty result</h3>
                    <p>Oops! no tags found yet, once they are found they will appear here</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
