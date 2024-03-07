import { useEffect, useState } from "react";
import { api } from "../../../utils/class/api.class";
import { useAppStore } from "../../context/AppProvider";
import { isURL } from "../../../utils/helper";
import { TagsInput, UploadMedia } from "../..";
import { useNavigate, useParams } from "react-router-dom";
import { DEFAULT_CHAIN } from "../../../utils/constants";
import Contract from "../../../utils/class/contract.class";
import { ethers } from "ethers";
import { customToast, TOAST_STATUS } from "../../../utils/toast.utils";

const EditCard = () => {
  const { chainId, signer } = useAppStore();
  const { card } = useParams() as { card: string };

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<QuyxCard>();

  const [isBtnLoading, setIsBtnLoading] = useState<boolean>(false);
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

  useEffect(() => {
    if (data) {
      setUsername(data.username);
      setBio(data.bio);
      setDescription(data.description ?? "");
      setPfp(data.pfp);
      setTags(data.tags || []);
      setIsForSale(data.isForSale);
      setIsAuction(data.isAuction);
      setListingPrice(data.listingPrice);
      setMaxNumberOfBids(data.maxNumberOfBids);
      setAuctionEnds(data.auctionEnds || new Date().toISOString().substring(0, 16));
    }
  }, [data]);

  async function updateCard() {
    if (data && data.isForSale) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: "editing of cards that are for sale is not allowed",
      });

      return;
    }

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

    setIsBtnLoading(true);

    let _pfp = pfp;
    if (_pfp && !isURL(_pfp)) {
      // upload it...
      setLoadingText("Uploading PFP");
      const resp = await api.uploadImage({ base64Image: _pfp.split(",")[1] });
      if (!resp) return;
      _pfp = resp;
    }

    setLoadingText("Processing");

    await api.editCard({
      username,
      pfp: _pfp,
      chainId: String(chainId),
      card: String(data?.identifier),
      bio,
      description: description ? description : null,
      tags: tags.length > 0 ? tags : null,
    });

    if (isForSale && !data?.isForSale) {
      setLoadingText("listing card");

      const contract = new Contract(
        String(chainId ? chainId : DEFAULT_CHAIN.chainId) as any,
        signer
      );

      await contract.listCard({
        cardIdentifier: data?.identifier!,
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
        message: "card updated & listed successfully!",
      });
    } else {
      customToast({
        type: TOAST_STATUS.SUCCESS,
        message: "card updated successfully!",
      });
    }

    setIsBtnLoading(false);
  }

  return (
    <section className="my-4">
      <div className="container-fluid container-xl">
        <div className="row">
          <div className="col-12 mb-4">
            <div className="px-2 new-edit-card">
              {isLoading ? (
                <div className="d-flex align-items-center justify-content-center py-5 my-5">
                  <span className="loader-span my-5"></span>
                </div>
              ) : !data ? null : (
                <>
                  <div className="page">
                    <h1 className="page-title">Edit Profile Card</h1>
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
                              <input
                                type="checkbox"
                                defaultChecked={isForSale}
                                onChange={(e) => setIsForSale(e.target.checked)}
                              />
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
                                    onChange={(e) => setListingPrice(Number(e.target.value))}
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
                        <button className="btn" onClick={updateCard} disabled={isBtnLoading}>
                          {isBtnLoading ? (
                            <div className="d-flex align-items-center">
                              <span className="loader-span-sm"></span>
                              <p>{loadingText}</p>
                            </div>
                          ) : (
                            <div className="px-2">Save</div>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditCard;
