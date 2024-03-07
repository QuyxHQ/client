import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../utils/class/api.class";
import { useAppStore } from "../../context/AppProvider";
import { DEFAULT_CHAIN } from "../../../utils/constants";
import { AnchorLink, VerifiedIcon } from "../..";
import Contract from "../../../utils/class/contract.class";

const CardDetails = () => {
  const { chainId, userInfo, signer } = useAppStore();
  const { card } = useParams() as { card: string };

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<QuyxCard>();
  const [isBookmarkBtnLoading, setIsBookmarkBtnLoading] = useState<boolean>(false);
  const [isDeleteBtnLoading, setIsDeleteBtnLoading] = useState<boolean>(false);

  async function addToBookmark(_id: string) {
    if (isBookmarkBtnLoading) return;
    setIsBookmarkBtnLoading(true);
    await api.addToBookmark({ card: _id });
    setIsBookmarkBtnLoading(false);
  }

  async function deleteCard() {
    if (!userInfo || !data || data.owner._id != userInfo._id) return;
    if (!confirm("Are you sure you want to delete card?")) return;

    setIsDeleteBtnLoading(true);
    const contract = new Contract(String(chainId ? chainId : DEFAULT_CHAIN.chainId) as any, signer);
    const resp = await contract.deleteCard(data.identifier!);
    if (resp) return navigate(-1);
    setIsDeleteBtnLoading(false);
  }

  useEffect(() => {
    (async function () {
      setIsLoading(true);

      const resp = await api.getCard({
        card,
        chainId: String(chainId ? chainId : DEFAULT_CHAIN.chainId),
      });

      if (!resp) return navigate("/404-document");
      setData(resp);
      setIsLoading(false);
    })();
  }, [card]);

  return (
    <section className="my-4">
      <div className="container-fluid container-xl">
        <div className="row">
          <div className="col-12 mb-4">
            <div className="px-2">
              {isLoading ? (
                <div className="d-flex align-items-center justify-content-center py-5 my-5">
                  <span className="loader-span my-5"></span>
                </div>
              ) : !data ? null : (
                <div className="single-page-card">
                  {userInfo?.address == data.owner.address ? (
                    <div className="d-flex align-items-center justify-content-between user-fns mb-4">
                      <button onClick={() => navigate(-1)}>
                        <span>&laquo;</span>
                        <span>Back</span>
                      </button>

                      <div className="d-flex align-items-center">
                        <AnchorLink to={`/edit-card/${data.identifier}`}>
                          <button>
                            <i className="h h-edit" />
                            <span>Edit Card</span>
                          </button>
                        </AnchorLink>

                        <button
                          className="delete"
                          disabled={isDeleteBtnLoading}
                          onClick={deleteCard}
                        >
                          {isDeleteBtnLoading ? (
                            <span className="loader-span-sm"></span>
                          ) : (
                            <i className="h h-trash-1" />
                          )}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="d-flex align-items-start align-items-md-center flex-column flex-md-row justify-content-between user-details mb-4">
                      <div className="user">
                        <div>
                          <img
                            src={data.owner.pfp ? data.owner.pfp : "/images/default-user.png"}
                            alt={data.owner.username}
                          />

                          <h4>
                            {data.owner.username}
                            {data.owner.hasBlueTick ? <VerifiedIcon /> : null}
                          </h4>
                        </div>
                        <p>~ Creator</p>
                      </div>

                      <AnchorLink to={`/user/${data.owner.username}`}>
                        <span>Explore more by this creator</span>
                      </AnchorLink>
                    </div>
                  )}

                  <div className="main mb-4">
                    <div className="col-12">
                      <div className="row g-4">
                        <div className="col-12 col-md-6 col-lg-5">
                          <div className="position-relative">
                            <img src={data.pfp} alt={data.username} />

                            {/* <button className="position-absolute">
                              <i className="h h-bookmark" />
                              <span>Save</span>
                            </button> */}
                          </div>

                          <div>
                            {data.isForSale ? (
                              <div className="d-flex align-items-center mt-4 down-single-card">
                                {data.isAuction ? (
                                  data.owner.address == userInfo?.address ? (
                                    <button className="green">
                                      <span>Accept Latest Bid</span>
                                    </button>
                                  ) : (
                                    <button>
                                      <span>Bid</span>
                                      <i className="h h-bag-2" />
                                    </button>
                                  )
                                ) : (
                                  <button>
                                    <span>Buy now</span>
                                    <i className="h h-credit-card" />
                                  </button>
                                )}

                                <h4>0.4 BNB</h4>
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-7">
                          <div className="item">
                            <h4>Username</h4>
                            <p>{data.username}</p>
                          </div>

                          <div className="item">
                            <h4>Bio</h4>
                            <p>{data.bio}</p>
                          </div>

                          <div className="item">
                            <h4>Description</h4>
                            <p>{data.description ?? "--n/a--"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {data.isAuction ? (
                    <>
                      <div className="d-flex flex-column auction-stats">
                        <div>
                          <h5>Auctions Ends: </h5>
                          <p>{new Date().toDateString()}</p>
                        </div>

                        <div>
                          <h5>Maximum number of bids:</h5>
                          <p>{data.maxNumberOfBids ?? "undefined"}</p>
                        </div>
                      </div>

                      <div className="bids-table"></div>
                    </>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
