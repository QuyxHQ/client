import { Card } from "../../..";
import cards from "../../../../utils/json/cards.demo.json";

const AllCards = () => {
  return (
    <section className="marketplace-section mb-5">
      <div className="header mb-4 d-flex align-items-center justify-content-between">
        <h2 className="title">Cards</h2>

        <div className="search position-relative">
          <i className="position-absolute h h-lens" />
          <input type="text" placeholder="Search.." />
        </div>
      </div>

      <div className="col-12">
        <div className="row g-4">
          {cards.map((card, index) => (
            <div key={`all-cards-${index}`} className="col-12 col-md-6 col-lg-4">
              <Card data={card} displayOwner />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCards;
