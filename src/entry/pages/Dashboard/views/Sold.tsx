import { DashboardTop, Tabs, RenderCards } from "../components";

const Sold = () => {
  return (
    <div className="container-fluid container-xl mt-1">
      <div className="row">
        <div className="col-12">
          <DashboardTop />
          <Tabs />
          <RenderCards mode="sold" />
        </div>
      </div>
    </div>
  );
};

export default Sold;
