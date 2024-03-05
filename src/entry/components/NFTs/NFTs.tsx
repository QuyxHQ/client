import { useEffect, useState } from "react";
import { api } from "../../../utils/class/api.class";

const NFTs = ({ pfp, setPfp }: { pfp: string; setPfp: (value: string) => void }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<{ name?: string | null; image: string }[]>();
  const [selectedNFT, setSelectedNFT] = useState<string>(pfp);

  useEffect(() => setPfp(selectedNFT), [selectedNFT]);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const resp = await api.getUserNFTs();
      setData(resp);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="nft-modal">
      {isLoading ? (
        <div className="d-flex align-items-center justify-content-center py-5">
          <span className="loader-span-sm"></span>
        </div>
      ) : !data ? (
        <div className="nothing" style={{ color: "lightcoral" }}>
          <i className="h h-alert-circle" />
          <h4>Oops! unable to retrieve nfts</h4>
        </div>
      ) : data.length == 0 ? (
        <div className="nothing">
          <i className="h h-discount-empty" />
          <h4>no nfts found!</h4>
        </div>
      ) : (
        <div className="col-12">
          <h2>
            All nfts <span>(chainId: 97)</span>
          </h2>

          <div className="row g-3">
            {data.map((item, i) => (
              <div className="col-6" key={`nft-index-${i}`}>
                <div
                  className={`nft-img-box ${selectedNFT == item.image ? "active" : ""}`}
                  onClick={() => setSelectedNFT(item.image)}
                >
                  <img src={item.image} alt={item.name ?? ""} />

                  <div>
                    <p>{item.name ?? "--n/a--"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NFTs;
