import { useEffect, useState } from "react";
import { AnchorLink, VerifiedIcon } from "..";
import { api } from "../../../utils/class/api.class";
import { useAppStore } from "../../context/AppProvider";
import Contract from "../../../utils/class/contract.class";
import { DEFAULT_CHAIN } from "../../../utils/constants";
import { formatTime } from "../../../utils/helper";

const Card = ({
  data,
  className,
  displayBadge,
  displayOwner,
}: {
  data: QuyxCard;
  className?: string;
  displayBadge?: boolean;
  displayOwner?: boolean;
}) => {
  const { userInfo, signer, chainId, openModal, setModalBody, isLoggedIn } = useAppStore();
  const [isFetchingBookmarkStat, setIsFetchingBookmarkStat] = useState<boolean>(true);
  const [isInBookmark, setIsInBookmark] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isBookmarkBtnLoading, setIsBookmarkBtnLoading] = useState<boolean>(false);
  const [isDeleteBtnLoading, setIsDeleteBtnLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!data.identifier) {
      const targetDate = new Date(data.createdAt);

      const interval = setInterval(() => {
        const currentTime = new Date().getTime();
        const elapsedTimeMs = currentTime - targetDate.getTime();
        setElapsedTime(elapsedTimeMs);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [data]);

  useEffect(() => {
    (async function () {
      if (!userInfo || !isLoggedIn) return setIsFetchingBookmarkStat(false);
      const resp = await api.isInBookmark({ card: data._id });
      setIsInBookmark(resp);
      setIsFetchingBookmarkStat(false);
    })();
  }, [userInfo, isLoggedIn]);

  async function addToBookmark(_id: string) {
    if (isBookmarkBtnLoading) return;
    setIsBookmarkBtnLoading(true);

    const resp = await api.addToBookmark({ card: _id });
    if (resp) setIsInBookmark(true);

    setIsBookmarkBtnLoading(false);
  }

  async function removeFromBookmark(_id: string) {
    if (isBookmarkBtnLoading) return;
    setIsBookmarkBtnLoading(true);

    const resp = await api.removeFromBookmark({ card: _id });
    if (resp) setIsInBookmark(false);

    setIsBookmarkBtnLoading(false);
  }

  async function deleteCard(identifier: number | null) {
    if (!userInfo || data.owner._id != userInfo._id || !identifier) return;
    if (!confirm("Are you sure you want to delete card?")) return;

    setIsDeleteBtnLoading(true);
    const contract = new Contract(String(chainId ? chainId : DEFAULT_CHAIN.chainId) as any, signer);
    const resp = await contract.deleteCard(identifier);
    if (resp) window.location.reload();
    setIsDeleteBtnLoading(false);
  }

  return (
    <div className={`quyx-card ${className} position-relative`}>
      {data.isDeleted ? (
        <div className="deleted">
          <div className="loader-cont">
            <span className="loader-blink" />
          </div>

          <h3>Card is missing</h3>
          <p>Card is prolly deleted or something went wrong!</p>

          <button>Report this</button>
        </div>
      ) : (
        <div className="h-100 main d-flex flex-column justify-content-between">
          {data.identifier ? null : (
            <div className="position-absolute blocked">
              <span className="loader-span"></span>
              <p>Confirming card onchain</p>

              <div className="timer">
                <i className="h h-clock-1" />
                <span>{elapsedTime == 0 ? "----" : formatTime(elapsedTime)}</span>
              </div>
            </div>
          )}

          <div className="d-flex flex-column top">
            {displayOwner ? (
              <div className="owner d-flex align-items-center justify-content-between">
                <div className="d-flex first align-items-center">
                  <div>
                    <AnchorLink to={`/user/${data.owner.username}`}>
                      <img
                        src={data.owner.pfp ?? "/images/default-user.png"}
                        alt={data.owner.username}
                      />
                    </AnchorLink>
                  </div>

                  <AnchorLink to={`/user/${data.owner.username}`}>
                    <h3 className="d-flex align-items-center">
                      <span>{data.owner.username}</span>

                      {data.owner.hasBlueTick ? <VerifiedIcon /> : null}
                    </h3>
                  </AnchorLink>
                </div>

                <div className="position-relative more">
                  <i className="h h-more-horizontal" />

                  <div className="position-absolute card-more">
                    <ul>
                      <li>
                        <AnchorLink to={`/card/${data.identifier}`}>
                          <i className="h h-external-link" />
                          <span>Open</span>
                        </AnchorLink>

                        {userInfo?._id == data.owner._id ? (
                          <>
                            <AnchorLink to={`/card/${data.identifier}`}>
                              <i className="h h-edit" />
                              <span>Edit</span>
                            </AnchorLink>

                            <a
                              className={isDeleteBtnLoading ? "disabled" : ""}
                              onClick={() => deleteCard(data.identifier)}
                            >
                              {isDeleteBtnLoading ? (
                                <span className="loader-span-sm"></span>
                              ) : (
                                <i className="h h-trash-1" />
                              )}

                              <span>Delete</span>
                            </a>
                          </>
                        ) : (
                          <AnchorLink to={`/report?card=${data.identifier}&chain=${data.chainId}`}>
                            <i className="h h-flag" />
                            <span>Report</span>
                          </AnchorLink>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="position-relative">
              <AnchorLink to={`/card/${data.identifier}`}>
                <img src={data.pfp} alt={data.username} />
              </AnchorLink>

              {displayBadge ? <span className="badge position-absolute"></span> : null}

              {data.isFlagged ? (
                <span
                  className="flagged position-absolute"
                  onClick={() => {
                    setModalBody(<PossiblyScamModal />);
                    openModal();
                  }}
                >
                  <i className="h h-alert-triangle" />
                </span>
              ) : null}
            </div>

            <AnchorLink to={`/card/${data.identifier}`}>
              <h3 className="card-title">{data.username}</h3>
            </AnchorLink>

            <p className="intro">{data.description ?? data.bio}</p>

            {data.tags ? (
              <div className="tags mb-2">
                {data.tags.map((item, i) => (
                  <AnchorLink to={`/tag/${item}`} key={`tags-${data._id}-${i}`}>
                    <span>{item}</span>
                  </AnchorLink>
                ))}
              </div>
            ) : null}
          </div>

          <div className="price d-flex align-items-center justify-content-between">
            <h4>{data.isForSale ? <>{data.listingPrice} BNB</> : null}</h4>

            <button
              className="d-flex align-items-center"
              disabled={isBookmarkBtnLoading || isFetchingBookmarkStat}
              onClick={() => {
                if (isInBookmark) removeFromBookmark(data._id);
                else addToBookmark(data._id);
              }}
            >
              {isBookmarkBtnLoading || isFetchingBookmarkStat ? (
                <span className="loader-span-sm" />
              ) : isInBookmark ? (
                <div
                  style={{ marginLeft: "-0.15rem", marginRight: "-0.15rem", gap: "0.3rem" }}
                  className="d-flex align-items-center"
                >
                  <span>Unsave</span>
                  <i className="h h-trash-2" />
                </div>
              ) : (
                <>
                  <span>Save</span>
                  <i className="h h-bookmark" />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const PossiblyScamModal = () => {
  const { closeModal } = useAppStore();

  return (
    <div className="kyc-modal py-4 px-3">
      <h2 className="mt-1">Card is possibly scam?</h2>

      <div className="alert">
        <div>
          <p className="mb-2">Could be as a result of one or more of the following:</p>
          <div className="ps-4">
            <ol>
              <li className="mb-1">
                <p>Card got reported by a good number of users and confirmed as scam</p>
              </li>

              <li>
                <p>
                  Address has been involved in a good number of scams and is yet prove otherwise
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="buttons">
        <button onClick={() => closeModal()}>Close</button>
      </div>
    </div>
  );
};

export default Card;
