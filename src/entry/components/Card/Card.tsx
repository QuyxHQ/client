import { AnchorLink, TonIcon } from "..";

type QuyxCard = {
  name: string;
  link: string;
  image: string;
  bio: string;
};

const Card = ({ data, className }: { data: QuyxCard; className?: string }) => {
  return (
    <div className={`quyx-card ${className} position-relative`}>
      <div className="h-100 main d-flex flex-column justify-content-between">
        <div className="d-flex flex-column top">
          <div className="position-relative">
            <AnchorLink to={data.link}>
              <img src={data.image} alt={data.name} className="img" />
            </AnchorLink>
          </div>

          <AnchorLink to={data.link}>
            <h3 className="card-title">{data.name}</h3>
          </AnchorLink>

          <p className="intro">{data.bio}</p>
        </div>

        <div className="bottom">
          <div className="price d-flex align-items-center justify-content-between">
            <h4>
              <TonIcon size={30} />
              <span>--</span>
            </h4>

            <button className="d-flex align-items-center">
              <span>Destroy</span>
              <i className="h h-trash-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
