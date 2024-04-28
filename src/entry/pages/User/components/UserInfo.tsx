import { AnchorLink, VerifiedIcon } from "../../..";
import { truncateAddress } from "../../../../utils/helper";
import useTonConnect from "../../../hooks/useTonConnect";

const UserInfo = () => {
  const { address } = useTonConnect();

  return (
    <div className="user-page-info">
      <div className="container">
        <div className="px-2 mb-4">
          <h1>
            <span>Betty butter</span>
            <VerifiedIcon width={28} height={28} />
          </h1>
          <p className="addr mb-4">
            <span>{truncateAddress({ address: address! })}</span>
            <i className="h h-copy" />
          </p>

          <div className="socials mb-4">
            <AnchorLink to="#">
              <i className="h h-twitter" />
            </AnchorLink>

            <AnchorLink to="#">
              <i className="h h-youtube" />
            </AnchorLink>

            <AnchorLink to="#">
              <i className="h h-instagram" />
            </AnchorLink>

            <AnchorLink to="#">
              <i className="h h-external-link" />
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
