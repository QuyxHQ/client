import { VerifiedIcon } from "../../..";

const TopSellers = () => {
  const data = [
    { image: "/images/one.png", name: "nerdyDev", isVerified: true },
    { image: "/images/two.png", name: "calisto", isVerified: false },
    { image: "/images/one.png", name: "moyinthegrait", isVerified: true },
    { image: "/images/two.png", name: "jolly", isVerified: false, fill: "crimson" },
    { image: "/images/one.png", name: "metro", isVerified: false },
    { image: "/images/one.png", name: "tesla", isVerified: false, fill: "crimson" },
    { image: "/images/two.png", name: "shortgirlintech", isVerified: true },
    { image: "/images/one.png", name: "ventro", isVerified: false },
    { image: "/images/two.png", name: "cypher", isVerified: true, fill: "crimson" },
    { image: "/images/two.png", name: "rofih", isVerified: true },
  ];

  return (
    <section className="marketplace-section mb-5">
      <div className="header mb-4 d-flex align-items-center justify-content-between">
        <h2 className="title">Top Sellers</h2>

        <button className="d-flex align-items-center">
          <span>See more</span>
          <i className="h h-chevron-right" />
        </button>
      </div>

      <div className="top-sellers">
        <div className="d-flex flex-column flex-md-row" style={{ gap: "1.8rem" }}>
          <div className="inner-div">
            <div className="row g-4">
              {data.slice(0, Math.ceil(data.length / 2)).map((item, index) => (
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
              {data.slice(Math.ceil(data.length / 2), data.length).map((item, index) => (
                <Render
                  key={`top-seller-${index}`}
                  item={item}
                  index={index + Math.ceil(data.length / 2)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Render = ({ item, index }: { item: any; index: number }) => {
  return (
    <div className="col-12">
      <div className="d-flex align-items-center box">
        <div style={{ width: "1.2rem" }}>
          <h3>{index + 1}.</h3>
        </div>

        <div className="top-seller-single d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="image">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="user d-flex align-items-center">
              <h4>{item.name}</h4>
              {item.isVerified ? <VerifiedIcon /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
