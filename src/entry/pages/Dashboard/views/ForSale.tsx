import { DashboardTop, RenderCards, Tabs } from "../components";

const ForSale = () => {
  return (
    <div className="container-fluid container-xl mt-1">
      <div className="row">
        <div className="col-12">
          <DashboardTop />
          <Tabs />
          <RenderCards mode="sale" />
        </div>
      </div>
    </div>
  );
};

export default ForSale;
