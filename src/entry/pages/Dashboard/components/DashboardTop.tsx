import { VerifiedIcon } from "../../..";
import { getCountForDashboard, truncateAddress } from "../../../../utils/helper";
import { useAppStore } from "../../../context/AppProvider";

const DashboardTop = () => {
  const { userInfo, address, chainId } = useAppStore();

  return (
    <div className="dash-top px-2 mb-5">
      <div className="col-12">
        <div className="row g-3">
          <div className="col-12 col-md-5 col-xl-7 mb-4 mb-md-0">
            <div className="user d-flex align-items-end justify-content-between">
              <div className="inner d-flex align-items-center">
                <div className="image">
                  <img
                    src={userInfo && userInfo.pfp ? userInfo.pfp : "/images/default-user.png"}
                    alt={userInfo?.username}
                  />
                </div>

                <div>
                  <h4 className="name">
                    <span>{userInfo?.username}</span>
                    {userInfo?.hasBlueTick ? <VerifiedIcon /> : null}
                  </h4>

                  <p className="address">{truncateAddress({ address: address! })}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-7 col-xl-5">
            <div className="stat w-100">
              <div className="and-hr d-flex align-items-center mb-3">
                <span>Stats</span>
                <hr />
              </div>

              <div className="counter">
                <div>
                  <h3>{getCountForDashboard(userInfo?.cardsCreatedCount!, chainId!)}</h3>
                  <p>
                    Card<small>/s</small> Created
                  </p>
                </div>

                <div>
                  <h3>{getCountForDashboard(userInfo?.cardsSoldCount!, chainId!)}</h3>
                  <p>
                    Card<small>/s</small> Sold
                  </p>
                </div>

                <div>
                  <h3>{getCountForDashboard(userInfo?.cardsBoughtCount!, chainId!)}</h3>
                  <p>
                    Card<small>/s</small> Bought
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTop;
