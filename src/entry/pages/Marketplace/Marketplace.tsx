import { useEffect, useState } from "react";
import {
  AllCards,
  JustInCards,
  HotInTag,
  TopCardsByBid,
  TopCardsByVersion,
  TopSellers,
} from "./components";
import { api } from "../../../utils/class/api.class";
import { useAppStore } from "../../context/AppProvider";
import { DEFAULT_CHAIN } from "../../../utils/constants";

const Marketplace = () => {
  const { chainId } = useAppStore();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<Record<string, QuyxCard[]>>();

  useEffect(() => {
    (async function () {
      setIsLoading(true);

      const resp = await api.getTrendingTag5({
        chainId: String(chainId ? chainId : DEFAULT_CHAIN.chainId),
      });

      console.log(resp);

      if (resp) setData(resp.data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div>
      <div className="px-1 pt-3">
        <JustInCards />

        <div className="container-fluid container-xl">
          <div className="row">
            <div className="col-12">
              <TopSellers />
            </div>
          </div>
        </div>

        <div className="container-fluid container-xl">
          <div className="row">
            <div className="col-12">
              <TopCardsByVersion />
            </div>
          </div>
        </div>

        <div className="container-fluid container-xl">
          <div className="row">
            <div className="col-12">
              <TopCardsByBid />
            </div>
          </div>
        </div>

        <div className="container-fluid container-xl">
          <div className="row">
            <div className="col-12">
              {isLoading || !data
                ? null
                : Object.keys(data).map((key, i) => (
                    <HotInTag key={`hot-tags-${i}`} tag={key} cards={data[key]} />
                  ))}
            </div>
          </div>
        </div>

        <div className="container-fluid container-xl">
          <div className="row">
            <div className="col-12">
              <AllCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
