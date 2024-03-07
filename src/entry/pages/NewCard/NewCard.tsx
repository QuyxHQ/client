import { useEffect, useState } from "react";
import { api } from "../../../utils/class/api.class";
import { useAppStore } from "../../context/AppProvider";
import Contract from "../../../utils/class/contract.class";
import { isURL } from "../../../utils/helper";
import { TagsInput, UploadMedia } from "../..";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { TOAST_STATUS, customToast } from "../../../utils/toast.utils";
import { DEFAULT_CHAIN } from "../../../utils/constants";

const NewCard = () => {
  const {
    chainId,
    signer,
    userInfo,
    openModal,
    displayModal,
    setModalBody,
    closeModal,
    QUYX_METADATA,
    balance,
  } = useAppStore();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [pfp, setPfp] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [isForSale, setIsForSale] = useState<boolean>(false);
  const [isAuction, setIsAuction] = useState<boolean | null>(null);
  const [listingPrice, setListingPrice] = useState<number | null>(null);
  const [maxNumberOfBids, setMaxNumberOfBids] = useState<number | null>(null);
  const [auctionEnds, setAuctionEnds] = useState<string>(new Date().toISOString().substring(0, 16));
  const [loadingText, setLoadingText] = useState<string>("Processing");

  const navigate = useNavigate();

  useEffect(() => {
    (function () {
      if (!userInfo) return;
      if (!userInfo.hasCompletedKYC && !displayModal) {
        setModalBody(
          <div className="kyc-modal py-4 px-3">
            <h2>Pending KYC</h2>

            <div className="alert">
              <div>
                <i className="h h-alert-triangle" />
              </div>
              <p>
                Heads up! Let's get you all setup, get your <strong>KYC</strong> done before you can
                start creating cards
              </p>
            </div>

            <div className="buttons">
              <button
                className="gradient-border w-100"
                onClick={() => {
                  navigate("/settings");
                  closeModal();
                }}
              >
                Proceed to KYC
              </button>

              <button
                className="w-100"
                onClick={() => {
                  navigate(-1);
                  setTimeout(() => closeModal(), 10);
                }}
              >
                Go back
              </button>
            </div>
          </div>
        );

        openModal(false);
      }
    })();
  }, [displayModal]);

  async function uploadCard() {
    if (isLoading) return;
    if (!pfp) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: "pfp cannot be empty",
      });

      return;
    }

    if (!username) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: "username cannot be empty",
      });

      return;
    }

    if (!bio) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: "bio cannot be empty",
      });

      return;
    }

    if (isForSale && (!listingPrice || listingPrice == 0)) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: "listing price cannot be empty",
      });

      return;
    }

    if (isAuction && new Date(auctionEnds).getTime() < new Date().getTime()) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: "auction end date cannot be empty",
      });

      return;
    }

    setIsLoading(true);

    let _pfp = pfp;
    if (_pfp && !isURL(_pfp)) {
      // upload it...
      setLoadingText("Uploading PFP");
      const resp = await api.uploadImage({ base64Image: _pfp.split(",")[1] });
      if (!resp) return;
      _pfp = resp;
    }

    setLoadingText("Preparing card");

    const resp = await api.createCard({
      username,
      pfp: _pfp,
      chainId: String(chainId),
      bio,
      description: description ? description : null,
      tags: tags.length > 0 ? tags : null,
    });

    if (resp) {
      // then call the blockchain fn with the temptoken
      const { tempToken } = resp;
      const contract = new Contract(
        String(chainId ? chainId : DEFAULT_CHAIN.chainId) as any,
        signer
      );

      setLoadingText("minting onchain");

      const tx = await contract.newCard(
        tempToken,
        QUYX_METADATA &&
          QUYX_METADATA.user &&
          QUYX_METADATA.user.cardsCount >= QUYX_METADATA.maxCardPerAddress
          ? ethers.utils.parseEther(String(QUYX_METADATA.extraCardPrice)).toString()
          : undefined
      );

      if (tx && isForSale) {
        setLoadingText("decoding");

        const cardId = await contract.getCardIdFromTx(tx);
        if (cardId) {
          setLoadingText("listing card");

          await contract.listCard({
            cardIdentifier: cardId,
            isAuction: isAuction ? isAuction : false,
            listingPrice: ethers.utils.parseEther(String(listingPrice)).toString(),
            maxNumberOfBids: isAuction
              ? maxNumberOfBids
                ? String(maxNumberOfBids)
                : ethers.constants.MaxUint256.toString()
              : "0",
            end: isAuction ? new Date(auctionEnds!).getTime() : undefined,
          });

          customToast({
            type: TOAST_STATUS.SUCCESS,
            message: "card created & listed successfully!",
          });
        }
      } else {
        customToast({
          type: TOAST_STATUS.SUCCESS,
          message: "card created successfully!",
        });
      }
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

                      <div className="form-group">
                        <TagsInput tags={tags} setTags={setTags} />
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
                            value={auctionEnds}
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
                              value={String(listingPrice || "")}
                              onChange={(e) => setListingPrice(parseFloat(e.target.value))}
                              placeholder="0.00"
                            />
                            <span className="pill">BNB</span>
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
                                value={String(maxNumberOfBids || "")}
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
                  {QUYX_METADATA &&
                  QUYX_METADATA.user &&
                  QUYX_METADATA.user.cardsCount >= QUYX_METADATA.maxCardPerAddress ? (
                    <div style={{ width: "100%", maxWidth: "30rem" }}>
                      <div className="alert info">
                        <i className="h h-info" />
                        <p>
                          Heads up! as you have reached the maximum number of cards you can create (
                          {QUYX_METADATA?.maxCardPerAddress}), you will have to pay&nbsp;
                          <strong>{QUYX_METADATA?.extraCardPrice} BNB</strong> to create a new card
                        </p>
                      </div>
                    </div>
                  ) : null}

                  {balance && QUYX_METADATA && balance <= QUYX_METADATA.extraCardPrice ? (
                    <div style={{ width: "100%", maxWidth: "30rem" }}>
                      <div className="alert">
                        <i className="h h-alert-triangle" />
                        <p>
                          Oops! wallet balance is less than&nbsp;
                          <strong>{QUYX_METADATA?.extraCardPrice} BNB</strong>, card creation won't
                          go through
                        </p>
                      </div>
                    </div>
                  ) : null}

                  <button
                    className="btn"
                    onClick={uploadCard}
                    disabled={
                      balance && QUYX_METADATA && balance <= QUYX_METADATA.extraCardPrice
                        ? true
                        : isLoading
                    }
                  >
                    {isLoading ? (
                      <div className="d-flex align-items-center">
                        <span className="loader-span-sm"></span>
                        <p>{loadingText}</p>
                      </div>
                    ) : (
                      <div className="px-2">Create</div>
                    )}
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
