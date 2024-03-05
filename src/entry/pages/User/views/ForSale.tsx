import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../../../utils/class/api.class";
import { DashboardTop, RenderCards, Tabs } from "../components";

const ForSale = () => {
  const { username } = useParams() as { username: string };
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userInfo, setUserInfo] = useState<QuyxUser>();

  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const resp = await api.getSingleUser({ param: username });
      if (!resp) return navigate("/404-document");
      setUserInfo(resp);
      setIsLoading(false);
    })();
  }, [username]);

  return (
    <div className="container-fluid container-xl mt-1 mb-5">
      <div className="row">
        <div className="col-12">
          {isLoading ? (
            <div className="d-flex align-items-center justify-content-center py-5 my-5">
              <span className="loader-span my-5"></span>
            </div>
          ) : (
            <>
              <DashboardTop userInfo={userInfo!} address={userInfo?.address!} />
              <Tabs username={userInfo?.username!} />
              <RenderCards address={userInfo?.address!} mode="sale" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForSale;
