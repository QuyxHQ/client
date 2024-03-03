import {
  AllCards,
  FeaturedCards,
  HotInTag,
  TopCardsByBid,
  TopCardsByVersion,
  TopSellers,
} from "./components";

const Marketplace = () => {
  return (
    <div>
      <div className="px-1">
        <FeaturedCards />

        <div className="container-fluid container-xl">
          <div className="row">
            <div className="col-12">
              <TopSellers />
            </div>
          </div>
        </div>

        <div className="container-fluid container-xl">
          <div className="row">
            <div className="col-12">
              <TopCardsByVersion />
            </div>
          </div>
        </div>

        <div className="container-fluid container-xl">
          <div className="row">
            <div className="col-12">
              <TopCardsByBid />
            </div>
          </div>
        </div>

        <div className="container-fluid container-xl">
          <div className="row">
            <div className="col-12">
              <HotInTag tag="AI" />
            </div>
          </div>
        </div>

        <div className="container-fluid container-xl">
          <div className="row">
            <div className="col-12">
              <HotInTag tag="personalities" />
            </div>
          </div>
        </div>

        <div className="container-fluid container-xl">
          <div className="row">
            <div className="col-12">
              <HotInTag tag="lifestyle" />
            </div>
          </div>
        </div>

        <div className="container-fluid container-xl">
          <div className="row">
            <div className="col-12">
              <HotInTag tag="west life" />
            </div>
          </div>
        </div>

        <div className="container-fluid container-xl">
          <div className="row">
            <div className="col-12">
              <AllCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
