import { useLocation } from "react-router-dom";
import { AnchorLink } from "../../..";

const Tabs = ({ username }: { username: string }) => {
  const location = useLocation();

  const tabs = [
    { title: "All", to: `/user/${username}` },
    { title: "Owner Of", to: `/user/owner/${username}` },
    { title: "Created", to: `/user/created/${username}` },
    { title: "Bought", to: `/user/bought/${username}` },
    { title: "Sold", to: `/user/sold/${username}` },
    { title: "For Sale", to: `/user/sale/${username}` },
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
