import { useState } from "react";
import { AnchorLink, VerifiedIcon } from "..";
import { api } from "../../../utils/class/api.class";
import { useAppStore } from "../../context/AppProvider";
import Contract from "../../../utils/class/contract.class";
import { DEFAULT_CHAIN } from "../../../utils/constants";

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
  const { userInfo, signer, chainId, openModal, setModalBody } = useAppStore();
  const [isBookmarkBtnLoading, setIsBookmarkBtnLoading] = useState<boolean>(false);
  const [isDeleteBtnLoading, setIsDeleteBtnLoading] = useState<boolean>(false);

  async function addToBookmark(_id: string) {
    if (isBookmarkBtnLoading) return;
    setIsBookmarkBtnLoading(true);
    await api.addToBookmark({ card: _id });
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
      ) : (
        <div className="h-100 main d-flex flex-column justify-content-between">
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
                        ) : null}

                        <AnchorLink to={`/report?card=${data.identifier}&chain=${data.chainId}`}>
                          <i className="h h-flag" />
                          <span>Report</span>
                        </AnchorLink>
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
          </div>

          <div className="price d-flex align-items-center justify-content-between">
            <h4>{data.isForSale ? <>{data.listingPrice} BNB</> : null}</h4>

            <button
              className="d-flex align-items-center"
              disabled={isBookmarkBtnLoading}
              onClick={() => addToBookmark(data._id)}
            >
              {isBookmarkBtnLoading ? (
                <span className="loader-span-sm" />
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
