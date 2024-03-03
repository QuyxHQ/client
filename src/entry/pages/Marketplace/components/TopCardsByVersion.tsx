import { Card } from "../../..";
import cards from "../../../../utils/json/cards.demo.json";

const TopCardsByVersion = () => {
  return (
    <section className="marketplace-section mb-5">
      <div className="header mb-4 d-flex align-items-center justify-content-between">
        <h2 className="title">Hot Cards 🔥</h2>

        <button className="d-flex align-items-center">
          <span>See more</span>
          <i className="h h-chevron-right" />
        </button>
      </div>

      <div className="col-12">
        <div className="row g-4">
          {cards.map((card, index) => (
            <div key={`top-cards-version-${index}`} className="col-12 col-md-6 col-lg-4">
              <Card data={card} displayOwner />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCardsByVersion;
