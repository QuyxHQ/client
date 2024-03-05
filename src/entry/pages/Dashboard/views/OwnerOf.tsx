import { DashboardTop, Tabs, RenderCards } from "../components";

const OwnerOf = () => {
  return (
    <div className="container-fluid container-xl mt-1">
      <div className="row">
        <div className="col-12">
          <DashboardTop />
          <Tabs />
          <RenderCards mode="owner" />
        </div>
      </div>
    </div>
  );
};

export default OwnerOf;
