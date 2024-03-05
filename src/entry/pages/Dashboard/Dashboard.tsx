import { DashboardTop, RenderCards, Tabs } from "./components";

const Dashboard = () => {
  return (
    <div className="container-fluid container-xl mt-1">
      <div className="row">
        <div className="col-12">
          <DashboardTop />
          <Tabs />
          <RenderCards />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
