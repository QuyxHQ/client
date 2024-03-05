import useCustomSlider from "../../../hooks/useSlider";
import { AnchorLink, Card, CardLoader } from "../../..";
import { useEffect, useState } from "react";
import { api } from "../../../../utils/class/api.class";
import { DEFAULT_CHAIN } from "../../../../utils/constants";
import { useAppStore } from "../../../context/AppProvider";

const JustInCards = () => {
  const { chainId } = useAppStore();
  const { slider, slideLeft, slideRight } = useCustomSlider(500);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [jusInCards, setJustInCards] = useState<QuyxCard[]>();

  useEffect(() => {
    (async function () {
      setIsLoading(true);

      const resp = await api.getCards(
        { chainId: String(chainId ? chainId : DEFAULT_CHAIN.chainId) },
        { limit: 12, page: 1 }
      );

      if (resp) setJustInCards(resp.data);
      setIsLoading(false);
    })();
  }, []);

  return jusInCards?.length == 0 ? null : (
    <section className="marketplace-section mb-5 featured py-5" style={{ marginTop: "-1rem" }}>
      <div className="container-fluid container-xl">
        <div className="row">
          <div className="col-12">
            <div className="header mb-4 d-flex align-items-center justify-content-between">
              <h2 className="title">Just In</h2>

              <AnchorLink to="/cards">
                <button className="d-flex align-items-center">
                  <span>See more</span>
                  <i className="h h-chevron-right" />
                </button>
              </AnchorLink>
            </div>
          </div>
        </div>
      </div>

      <div className="featured-slider position-relative">
        <div className="slider-btn position-absolute left" onClick={slideLeft}>
          <i className="h h-chevron-left" />
        </div>

        <div className="slider row g-0" ref={slider}>
          {isLoading ? (
            <CardLoader />
          ) : (
            jusInCards?.map((card, index) => (
              <div
                key={`featured-cards-${index}`}
                className="col-11 col-sm-8 col-md-5 col-lg-4 col-xl-3"
              >
                <Card data={card} className="gradient-border" displayOwner />
              </div>
            ))
          )}
        </div>

        <div className="slider-btn position-absolute right" onClick={slideRight}>
          <i className="h h-chevron-right" />
        </div>
      </div>
    </section>
  );
};

export default JustInCards;
