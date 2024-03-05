import { useEffect, useState } from "react";
import { AnchorLink, VerifiedIcon } from "../../..";
import { api } from "../../../../utils/class/api.class";
import { useAppStore } from "../../../context/AppProvider";
import { DEFAULT_CHAIN } from "../../../../utils/constants";

const TopSellers = () => {
  const { chainId } = useAppStore();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [topSellers, setTopSellers] = useState<QuyxUser[]>();

  useEffect(() => {
    (async function () {
      setIsLoading(true);

      const resp = await api.getTopSellers({
        limit: 10,
        chainId: String(chainId ? chainId : DEFAULT_CHAIN.chainId),
      });

      if (resp) setTopSellers(resp.data ?? []);
      setIsLoading(false);
    })();
  }, []);

  return topSellers?.length == 0 ? null : (
    <section className="marketplace-section py-4">
      <div className="header mb-4 d-flex align-items-center justify-content-between">
        <h2 className="title">Top Sellers</h2>
      </div>

      {isLoading ? (
        <RenderLoader />
      ) : (
        <div className="top-sellers">
          <div className="d-flex flex-column flex-md-row" style={{ gap: "1.8rem" }}>
            <div className="inner-div">
              <div className="row g-4">
                {topSellers?.slice(0, Math.ceil(topSellers.length / 2)).map((item, index) => (
                  <Render key={`top-seller-${index}`} item={item} index={index} />
                ))}
              </div>
            </div>

            <div className="d-none d-md-block">
              <div className="divider px-3">
                <hr />
              </div>
            </div>

            <div className="inner-div">
              <div className="row g-4">
                {topSellers
                  ?.slice(Math.ceil(topSellers.length / 2), topSellers.length)
                  .map((item, index) => (
                    <Render
                      key={`top-seller-${index}`}
                      item={item}
                      index={index + Math.ceil(topSellers.length / 2)}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Render = ({ item, index }: { item: QuyxUser; index: number }) => {
  return (
    <div className="col-12">
      <div className="d-flex align-items-center box">
        <div style={{ width: "1.2rem" }}>
          <h3>{index + 1}.</h3>
        </div>

        <div className="top-seller-single d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="image">
              <AnchorLink to={`/user/${item.username}`}>
                <img src={item.pfp ?? "/images/default-user.png"} alt={item.username} />
              </AnchorLink>
            </div>

            <AnchorLink to={`/user/${item.username}`}>
              <div className="user d-flex align-items-center">
                <h4>{item.username}</h4>
                {item.hasBlueTick ? <VerifiedIcon /> : null}
              </div>
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const RenderLoader = () => {
  return <div>Hello</div>;
};

export default TopSellers;
