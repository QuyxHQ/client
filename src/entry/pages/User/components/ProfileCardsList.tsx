import { Address } from "ton-core";
import { AnchorLink, Card, CardLoader, EmptyIcon } from "../../..";
import { useQuery } from "@tanstack/react-query";
import { apiSdk } from "../../../../utils/api.utils";

const ProfileCardsList = ({ address }: { address: Address }) => {
  const { isPending, data: cards } = useQuery({
    queryKey: [`${address.toString()}-cards`],
    queryFn: () => apiSdk.getCards(address.toString(), 20),
  });

  return (
    <div>
      <div className="px-2">
        {isPending ? (
          <div className="col-12 mt-3">
            <div className="row g-5">
              {Array.from({ length: 1 }).map((_, i) => (
                <CardLoader key={`card-${i}`} />
              ))}
            </div>
          </div>
        ) : cards == null || cards == undefined ? (
          "Something is wrong somewhere...."
        ) : cards.data.content.length > 0 ? (
          <div className="row g-4">
            {cards.data.content.map((item, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={`item-${index}`}>
                <Card data={JSON.parse(item.metadata_json)} />
              </div>
            ))}

            {/* <div className="col-12">
              <div className="d-flex align-items-center justify-content-center py-3 mt-2">
                <span className="loader-span-sm" />
              </div>
            </div> */}
          </div>
        ) : (
          <div className="col-12">
            <div className="empty-res my-4">
              <EmptyIcon width={130} height={130} className="mb-3" />

              <h3>Empty result</h3>
              <p className="mb-4">Once you mint profile card(s), it's going to appear here</p>

              <AnchorLink to="/mint">
                <button>
                  <span>Mint Card</span>
                  <i className="h h-plus" />
                </button>
              </AnchorLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCardsList;
