import { DashboardTop, Tabs, RenderCards } from "../components";

const Created = () => {
  return (
    <div className="container-fluid container-xl mt-1">
      <div className="row">
        <div className="col-12">
          <DashboardTop />
          <Tabs />
          <RenderCards mode="created" />
        </div>
      </div>
    </div>
  );
};

export default Created;
