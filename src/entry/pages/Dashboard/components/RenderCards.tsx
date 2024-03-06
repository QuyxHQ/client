import { Card, CardLoader, EmptyIcon } from "../../..";
import { api } from "../../../../utils/class/api.class";
import { MOCK_EMPTY_API_RESPONSE } from "../../../../utils/constants";
import { useAppStore } from "../../../context/AppProvider";
import useQuery from "../../../hooks/useQuery";

type Mode = "owner" | "created" | "sold" | "bought" | "sale";
const RenderCards = ({ mode }: { mode?: Mode }) => {
  const { address, chainId } = useAppStore();

  const { isLoading, isFetchingNextPage, data, ref } = useQuery({
    options: { address, chainId: String(chainId), mode },
    queryFn: async function (page, options) {
      const resp = await api.getUserCards(options as any, { page, limit: 12 });
      return resp ? resp : MOCK_EMPTY_API_RESPONSE;
    },
  });

  return (
    <div className="col-12">
      <div className="row g-4">
        {isLoading ? (
          <CardLoader />
        ) : data.length > 0 ? (
          <>
            {data.map((card, i) =>
              card ? (
                <div
                  key={`result-page-index-${i}`}
                  ref={i === data.length - 1 ? ref : undefined}
                  className="col-12 col-md-6 col-lg-4"
                >
                  <Card data={card} />
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
            <div className="empty-res my-4">
              <EmptyIcon width={250} height={250} />

              <h3>nothing found</h3>
              <p>Cards will appear here if they exist</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RenderCards;
