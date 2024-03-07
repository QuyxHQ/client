import { Card, CardLoader, EmptyIcon } from "../..";
import { api } from "../../../utils/class/api.class";
import { DEFAULT_CHAIN, MOCK_EMPTY_API_RESPONSE } from "../../../utils/constants";
import { useAppStore } from "../../context/AppProvider";
import useQuery from "../../hooks/useQuery";

const Cards = () => {
  const { chainId } = useAppStore();

  const { isLoading, isFetchingNextPage, data, ref } = useQuery({
    queryFn: async function (page) {
      const resp = await api.getCards(
        { chainId: String(chainId ? chainId : DEFAULT_CHAIN.chainId) },
        { page, limit: 12 }
      );

      return resp ? resp : MOCK_EMPTY_API_RESPONSE;
    },
  });

  return (
    <section className="mb-5">
      <div className="container-fluid container-xl">
        <div className="row">
          <div className="col-12 mb-1">
            <div className="px-2">
              <div className="page mb-4 pb-3">
                <h1 className="page-title">Cards</h1>
                <p>Explore all listed card/s</p>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="row g-4">
              {isLoading ? (
                <CardLoader />
              ) : data.length == 0 ? (
                <div className="col-12">
                  <div className="empty-res py-4">
                    <EmptyIcon />

                    <h3>Empty result</h3>
                    <p>Cards will appear here as soon as they get created</p>
                  </div>
                </div>
              ) : (
                <>
                  {data.map((card, i) => (
                    <div
                      key={`all-cards-${i}`}
                      ref={i === data.length - 1 ? ref : undefined}
                      className="col-12 col-md-6 col-lg-4"
                    >
                      <Card data={card} displayOwner />
                    </div>
                  ))}

                  {isFetchingNextPage ? (
                    <div className="col-12">
                      <div className="d-flex align-items-center justify-content-center py-3">
                        <span className="loader-span-sm" />
                      </div>
                    </div>
                  ) : null}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
