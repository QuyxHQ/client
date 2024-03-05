import { useState, useEffect } from "react";
import { Card, CardLoader } from "../../..";
import { api } from "../../../../utils/class/api.class";
import { DEFAULT_CHAIN } from "../../../../utils/constants";
import { useAppStore } from "../../../context/AppProvider";

const TopCardsByBid = () => {
  const { chainId } = useAppStore();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [topCards, setTopCards] = useState<QuyxCard[]>();

  useEffect(() => {
    (async function () {
      setIsLoading(true);

      const resp = await api.getTopCardsByVersion({
        limit: 12,
        chainId: String(chainId ? chainId : DEFAULT_CHAIN.chainId),
      });

      if (resp) setTopCards(resp.data ?? []);
      setIsLoading(false);
    })();
  }, []);

  return topCards?.length == 0 ? null : (
    <section className="marketplace-section py-4">
      <div className="header mb-4 d-flex align-items-center justify-content-between">
        <h2 className="title">
          Top Cards <span>(by bids)</span>
        </h2>
      </div>

      <div className="col-12">
        <div className="row g-4">
          {isLoading ? (
            <CardLoader />
          ) : (
            topCards?.map((card, index) => (
              <div key={`top-cards-bid-${index}`} className="col-12 col-md-6 col-lg-4">
                <Card data={card} displayOwner />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TopCardsByBid;
