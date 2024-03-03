import useCustomSlider from "../../../hooks/useSlider";
import { Card } from "../../..";
import cards from "../../../../utils/json/cards.demo.json";

const FeaturedCards = () => {
  const { slider, slideLeft, slideRight } = useCustomSlider(500);

  return (
    <section className="marketplace-section mb-5 featured py-5">
      <div className="container-fluid container-xl">
        <div className="row">
          <div className="col-12">
            <div className="header mb-4 d-flex align-items-center justify-content-between">
              <h2 className="title">Featured Cards</h2>

              <div className="search position-relative">
                <i className="position-absolute h h-lens" />
                <input type="text" placeholder="Search.." />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="featured-slider position-relative">
        <div className="slider-btn position-absolute left" onClick={slideLeft}>
          <i className="h h-chevron-left" />
        </div>

        <div className="slider row g-0" ref={slider}>
          {cards.map((card, index) => (
            <div className="col-11 col-sm-8 col-md-5 col-lg-4 col-xl-3">
              <Card
                data={card}
                key={`hot-cards-${index}`}
                className="gradient-border"
                displayOwner
              />
            </div>
          ))}
        </div>

        <div className="slider-btn position-absolute right" onClick={slideRight}>
          <i className="h h-chevron-right" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;
