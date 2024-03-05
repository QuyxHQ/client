import { useState } from "react";
import { AnchorLink, VerifiedIcon } from "..";
import { api } from "../../../utils/class/api.class";

const Card = ({
  data,
  className,
  displayBadge,
  matchOwner,
  displayOwner,
}: {
  data: QuyxCard;
  className?: string;
  displayBadge?: boolean;
  matchOwner?: string;
  displayOwner?: boolean;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function isOwner() {
    if (!matchOwner) return false;
    return data.owner.address == matchOwner;
  }

  async function addToBookmark(_id: string) {
    if (isLoading) return;
    setIsLoading(true);
    await api.addToBookmark({ card: _id });
    setIsLoading(false);
  }

  return (
    <div className={`quyx-card ${className}`}>
      {data.isDeleted ? (
        <div className="deleted">
          <div className="loader-cont">
            <span className="loader-blink" />
          </div>

          <h3>Card is missing</h3>
          <p>Card is prolly deleted or something went wrong!</p>

          <button>Report this</button>
        </div>
      ) : matchOwner && !isOwner() ? (
        <div></div>
      ) : (
        <div className="h-100 main d-flex flex-column justify-content-between">
          <div className="d-flex flex-column top">
            {displayOwner ? (
              <div className="owner d-flex align-items-center justify-content-between">
                <div className="d-flex first align-items-center">
                  <div>
                    <img src={data.owner.pfp!} alt={data.owner.username} />
                  </div>

                  <h3 className="d-flex align-items-center">
                    <span>{data.owner.username}</span>

                    {data.owner.hasBlueTick ? <VerifiedIcon /> : null}
                  </h3>
                </div>

                <i className="h h-more-horizontal" />
              </div>
            ) : null}
            <div className="position-relative">
              <AnchorLink to={`/card/${data._id}`}>
                <img src={data.pfp} alt={data.username} />
              </AnchorLink>

              {displayBadge ? <span className="badge position-absolute"></span> : null}

              {data.isFlagged ? (
                <span className="flagged position-absolute">
                  <i className="h h-alert-triangle" />
                  <span>Possibly scam</span>
                </span>
              ) : null}
            </div>
            <h3 className="card-title">{data.username}</h3>
            <p className="intro">{data.description ?? data.bio}</p>
          </div>

          <div className="price d-flex align-items-center justify-content-between">
            {data.isForSale ? <h4>{data.listingPrice} ETH</h4> : null}

            <button
              className="d-flex align-items-center"
              disabled={isLoading}
              onClick={() => addToBookmark(data._id)}
            >
              <span>Save</span>
              <i className="h h-bookmark" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
