import { useState } from "react";
import { ProfileCardsList } from ".";
import UsernameList from "./UsernameList";

const Items = () => {
  const [selectedTab, setSelectedTab] = useState<0 | 1>(0);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="user-profile-tab">
            <div className={selectedTab == 0 ? "active" : ""} onClick={() => setSelectedTab(0)}>
              <i className="h h-user" />
              <span>Usernames</span>
            </div>

            <div className={selectedTab == 1 ? "active" : ""} onClick={() => setSelectedTab(1)}>
              <i className="h h-zap-on" />
              <span>Cards</span>
            </div>
          </div>
        </div>

        <div className="col-12 mb-5">
          <div className={selectedTab == 0 ? "d-block" : "d-none"}>
            <UsernameList />
          </div>

          <div className={selectedTab == 1 ? "d-block" : "d-none"}>
            <ProfileCardsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
