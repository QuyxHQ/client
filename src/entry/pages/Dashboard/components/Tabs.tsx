import { useLocation } from "react-router-dom";
import { AnchorLink } from "../../..";

const Tabs = () => {
  const location = useLocation();

  const tabs = [
    { title: "All", to: "/dashboard" },
    { title: "Owner Of", to: "/dashboard/owner" },
    { title: "Created", to: "/dashboard/created" },
    { title: "Bought", to: "/dashboard/bought" },
    { title: "Sold", to: "/dashboard/sold" },
    { title: "For Sale", to: "/dashboard/sale" },
  ];

  return (
    <div className="tabs-dashboard px-2 mb-4 pb-2">
      <ul>
        {tabs.find((tab) => tab.to == location.pathname) ? (
          <li className="active gradient-border">
            <span>{tabs.find((tab) => tab.to === location.pathname)?.title}</span>
          </li>
        ) : null}

        {tabs.map((tab, index) =>
          location.pathname === tab.to ? null : (
            <AnchorLink key={`dash-tab-${index}`} to={tab.to}>
              <li key={`tab-${index}`}>
                <span>{tab.title}</span>
              </li>
            </AnchorLink>
          )
        )}
      </ul>
    </div>
  );
};

export default Tabs;
