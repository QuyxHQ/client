import { useState } from "react";
import { api } from "../../../utils/class/api.class";
import { useAppStore } from "../../context/AppProvider";
import Contract from "../../../utils/class/contract.class";
import { isURL } from "../../../utils/helper";
import { UploadMedia } from "../..";

const NewCard = () => {
  const { chainId, signer } = useAppStore();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [pfp, setPfp] = useState<string>("");
  // const [tags, setTags] = useState<string>("");
  const [isForSale, setIsForSale] = useState<boolean>(false);
  const [isAuction, setIsAuction] = useState<boolean | null>(null);
  const [listingPrice, setListingPrice] = useState<number | null>(null);
  const [maxNumberOfBids, setMaxNumberOfBids] = useState<number | null>(null);
  const [auctionEnds, setAuctionEnds] = useState<string | null>(null);

  async function uploadCard() {
    if (isLoading) return;
    setIsLoading(true);

    let _pfp = pfp;
    if (!isURL(_pfp)) {
      // upload it...
      const resp = await api.uploadImage({ base64Image: _pfp.split(",")[1] });
      if (!resp) return;
      _pfp = resp;
    }

    const resp = await api.createCard({
      username,
      pfp: _pfp,
      chainId: String(chainId),
      bio,
      description: description ? description : null,
      tags: null,
    });

    if (resp) {
      // then call the blockchain fn with the temptoken
      const { tempToken } = resp;
      const contract = new Contract("97", signer);

      const contractResp = await contract.newCard(tempToken);
      if (contractResp) alert("king!");
    }

    setIsLoading(false);
  }

  return (
    <div className="container-fluid container-xl mb-5">
      <div className="row">
        <div className="col-12">
          <div className="px-2 new-edit-card">
            <div className="page">
              <h1 className="page-title">Create Profile Card</h1>
            </div>

            <div className="co-12">
              <div className="row g-3">
                <div className="col-12">
                  <div className="row g-4 g-xl-5">
                    <UploadMedia setPfp={setPfp} pfp={pfp} />
                    {/* <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                      <div className="tab">
                        <p className={tab == "one" ? "active" : ""} onClick={() => setTab("one")}>
                          Upload media
                        </p>

                        <p className={tab == "two" ? "active" : ""} onClick={() => setTab("two")}>
                          nfts collection
                        </p>
                      </div>

                      <div className="tab-content-container">
                        {tab == "one" ? (
                          <>
                            <div className="media">
                              {pfp ? (
                                <div className="image">
                                  <img src={pfp} className="w-100" />

                                  <div onClick={() => setPfp("")}>
                                    <i className="h h-trash-2" />
                                  </div>
                                </div>
                              ) : (
                                <>
                                  <p>Drag and drop media</p>
                                  <h4>Browse files</h4>
                                  <span>max size 20mb</span>
                                </>
                              )}
                            </div>

                            <input
                              className="d-none"
                              type="file"
                              accept="image/*"
                              name="image"
                              onChange={handleImageChange}
                              ref={fileRef}
                            />

                            <button onClick={() => fileRef.current.click()}>
                              <span>Choose from device</span>
                              <i className="h h-smartphone" />
                            </button>
                          </>
                        ) : (
                          <>
                            <div className="nft">
                              {pfp ? (
                                <div className="image">
                                  <img src={pfp} className="w-100" />

                                  <div onClick={() => setPfp("")}>
                                    <i className="h h-trash-2" />
                                  </div>
                                </div>
                              ) : (
                                <>
                                  <p>no nft selected yet!</p>
                                  <h4>Choose nft</h4>
                                  <span>max: 1 nft</span>
                                </>
                              )}
                            </div>

                            <button
                              onClick={() => {
                                setModalBody(<NFTs pfp={pfp} setPfp={setPfp} />);
                                openModal();
                              }}
                            >
                              <span>Choose from collection</span>
                              <i className="h h-refresh-acw" />
                            </button>
                          </>
                        )}
                      </div>
                    </div> */}

                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="username for card"
                          autoComplete="off"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea
                          name="bio"
                          id="bio"
                          rows={5}
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                          placeholder="short bio about this card"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="description">
                          Description <span>(optional)</span>
                        </label>
                        <textarea
                          name="description"
                          id="description"
                          rows={3}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="info about this card"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="d-flex align-items-center" style={{ gap: "0.7rem" }}>
                    <p style={{ whiteSpace: "nowrap", fontSize: "0.95rem", fontWeight: 500 }}>
                      This card is for sale
                    </p>

                    <div className="cl-toggle-switch">
                      <label className="cl-switch">
                        <input type="checkbox" onChange={(e) => setIsForSale(e.target.checked)} />
                        <span />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-10 col-xl-9">
                  <div className="row g-4">
                    <div className="col-12 col-md-6">
                      {isForSale ? (
                        <div className="form-group">
                          <label htmlFor="listingType">Card sale type</label>
                          <select
                            name="listingType"
                            id="listingType"
                            onChange={(e) =>
                              setIsAuction(e.target.value == "auction" ? true : null)
                            }
                            value={isAuction ? "auction" : "fixed"}
                          >
                            <option value="fixed">Fixed Sale</option>
                            <option value="auction">Auction Sale</option>
                          </select>
                        </div>
                      ) : null}
                    </div>

                    <div className="col-12 col-md-6">
                      {isForSale && isAuction ? (
                        <div className="form-group">
                          <label htmlFor="auctionEnds">Auction ends:</label>
                          <input
                            type="datetime-local"
                            name="auctionEnds"
                            id="auctionEnds"
                            value={auctionEnds ?? new Date().toISOString().substring(0, 16)}
                            onChange={(e) => setAuctionEnds(e.target.value)}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {isForSale ? (
                    <div className="col-12">
                      <div className="row">
                        <div className="col-12 col-md-6 mb-3 mb-md-0">
                          <div className="form-group">
                            <label htmlFor="listingPrice">Listing Price</label>
                            <input
                              type="number"
                              name="listingPrice"
                              id="listingPrice"
                              value={String(listingPrice)}
                              onChange={(e) => setListingPrice(Number(e.target.value))}
                              placeholder="0.00"
                            />
                            <span className="pill">ETH</span>
                          </div>
                        </div>

                        {isAuction ? (
                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label htmlFor="maxNumberOfBids">
                                max number of bids <span>(optional)</span>
                              </label>
                              <input
                                type="number"
                                name="maxNumberOfBids"
                                id="maxNumberOfBids"
                                value={String(maxNumberOfBids)}
                                onChange={(e) => setMaxNumberOfBids(parseInt(e.target.value))}
                                placeholder="bids placed won't pass this"
                              />
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="col-12">
                  <button className="btn" onClick={uploadCard} disabled={isLoading}>
                    {isLoading ? "Processing.." : "Create"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
