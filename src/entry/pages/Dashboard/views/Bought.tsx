import { DashboardTop, Tabs, RenderCards } from "../components";

const Bought = () => {
  return (
    <div className="container-fluid container-xl mt-1">
      <div className="row">
        <div className="col-12">
          <DashboardTop />
          <Tabs />
          <RenderCards mode="bought" />
        </div>
      </div>
    </div>
  );
};

export default Bought;
