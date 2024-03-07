import { useParams } from "react-router-dom";
import { CardLoader, Card, EmptyIcon } from "../..";
import { api } from "../../../utils/class/api.class";
import { DEFAULT_CHAIN, MOCK_EMPTY_API_RESPONSE } from "../../../utils/constants";
import useQuery from "../../hooks/useQuery";
import { useAppStore } from "../../context/AppProvider";

const CardsUnderTag = () => {
  const { chainId } = useAppStore();
  const { tag } = useParams() as { tag: string };

  const { isLoading, isFetchingNextPage, data, ref, total } = useQuery({
    queryFn: async function (page) {
      const resp = await api.getCardsByTag(
        { tag, chainId: String(chainId ? chainId : DEFAULT_CHAIN.chainId) },
        { page, limit: 12 }
      );

      return resp ? resp : MOCK_EMPTY_API_RESPONSE;
    },
  });

  return (
    <section className="mb-5">
      <div className="container-fluid container-xl">
        <div className="row">
          <div className="col-12 mb-4">
            <div className="px-2">
              <div className="page mb-4 pb-3">
                <h1 className="page-title">
                  Tag: <span>({tag})</span>
                </h1>

                <p>{isLoading ? "--" : total} card/s</p>
              </div>

              <div className="col-12">
                <div className="row g-4">
                  {isLoading ? (
                    <CardLoader />
                  ) : data.length > 0 ? (
                    <>
                      {data.map((card, i) =>
                        card ? (
                          <div
                            key={`card-index-${i}`}
                            ref={i === data.length - 1 ? ref : undefined}
                            className="col-12 col-md-6 col-lg-4"
                          >
                            <Card data={card} displayOwner />
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

                        <h3>Empty result</h3>
                        <p>No card found under tag; that's weird tho!</p>
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

export default CardsUnderTag;
