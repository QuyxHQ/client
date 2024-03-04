import { AnchorLink, Card, EmptyIcon } from "../..";
import cards from "../../../utils/json/cards.demo.json";

const Bookmarks = () => {
  return (
    <section className="mb-5">
      <div className="container-fluid container-xl">
        <div className="row">
          <div className="col-12">
            <div className="px-2">
              <div className="page">
                <h1 className="page-title">Bookmarks</h1>
                <p>0 saved item/s</p>
              </div>

              <div className="col-12">
                <div className="empty-res">
                  <EmptyIcon />

                  <h3>It's so empty over here</h3>
                  <p>
                    Check out our marketplace, you might see a thing or ten you will be interested
                    in
                  </p>
                  <AnchorLink to="/marketplace">
                    <button>Explore marketplace</button>
                  </AnchorLink>
                </div>

                {/* <div className="row g-4">
                  {cards.map((card, index) => (
                    <div key={`all-cards-${index}`} className="col-12 col-md-6 col-lg-4">
                      <Card data={card} displayOwner />
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookmarks;
