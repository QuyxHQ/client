import { AnchorLink } from "..";
import { CardMetadata } from "../../../wrappers/CNftCollection";

const Card = ({
  data,
  className,
}: {
  data: CardMetadata & { address: String };
  className?: string;
}) => {
  const username = data.username.beginParse().loadStringTail();
  const pfp = data.pfp.beginParse().loadStringTail();
  const bio = data.bio.beginParse().loadStringTail();

  return (
    <div className={`quyx-card ${className} position-relative`}>
      <div className="h-100 main d-flex flex-column justify-content-between">
        <div className="d-flex flex-column top">
          <div className="position-relative">
            <AnchorLink to={`/card/${data.address}`}>
              <img src={pfp} alt={username} className="img" />
            </AnchorLink>
          </div>

          <AnchorLink to={`/card/${data.address}`}>
            <h3 className="card-title">{username}</h3>
          </AnchorLink>

          <p className="intro">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
