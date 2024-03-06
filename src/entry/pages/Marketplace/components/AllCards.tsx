import { useState } from "react";
import { Card, CardLoader, EmptyIcon } from "../../..";
import { api } from "../../../../utils/class/api.class";
import { DEFAULT_CHAIN, MOCK_EMPTY_API_RESPONSE } from "../../../../utils/constants";
import { useAppStore } from "../../../context/AppProvider";
import useQuery from "../../../hooks/useQuery";
import { useNavigate } from "react-router-dom";

const AllCards = () => {
  const { chainId } = useAppStore();
  const [q, setQ] = useState<string>("");

  const navigate = useNavigate();

  const { isLoading, isFetchingNextPage, data, ref } = useQuery({
    queryFn: async function (page) {
      const resp = await api.getCards(
        { chainId: String(chainId ? chainId : DEFAULT_CHAIN.chainId) },
        { page, limit: 12 }
      );

      return resp ? resp : MOCK_EMPTY_API_RESPONSE;
    },
  });

  function submitSearchForm(e: any) {
    e.preventDefault();
    if (q) navigate(`/search?q=${q}`);
  }

  return (
    <section className="marketplace-section py-4">
      <div className="header mb-4 d-flex align-items-center justify-content-between">
        <h2 className="title">All Cards</h2>

        <form
          action="/search"
          method="get"
          onSubmit={submitSearchForm}
          className="search position-relative"
        >
          <i className="position-absolute h h-lens" />
          <input
            type="text"
            placeholder="Search.."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </form>
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
    </section>
  );
};

export default AllCards;
