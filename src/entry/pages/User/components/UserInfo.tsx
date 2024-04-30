import { Address } from "ton-core";
import { AnchorLink, VerifiedIcon } from "../../..";
import { copyToClipboard, truncateAddress } from "../../../../utils/helper";

const UserInfo = ({ user }: { user: QuyxUser }) => {
  return (
    <div className="user-page-info">
      <div className="container">
        <div className="px-2 mb-4">
          <h1>
            <span>{user.username}</span>
            {user.hasBlueTick ? <VerifiedIcon width={28} height={28} /> : null}
          </h1>

          <p className="addr mb-4">
            <span>{truncateAddress({ address: Address.parse(user.address).toString() })}</span>
            <i
              className="h h-copy"
              onClick={() => copyToClipboard(Address.parse(user.address).toString())}
            />
          </p>

          <div className="socials mb-4">
            {user.twitterLink ? (
              <AnchorLink to={user.twitterLink} target="_blank">
                <i className="h h-twitter" />
              </AnchorLink>
            ) : null}

            {user.youtubeLink ? (
              <AnchorLink to={user.youtubeLink} target="_blank">
                <i className="h h-youtube" />
              </AnchorLink>
            ) : null}

            {user.instagramLink ? (
              <AnchorLink to={user.instagramLink} target="_blank">
                <i className="h h-instagram" />
              </AnchorLink>
            ) : null}

            {user.otherLink ? (
              <AnchorLink to={user.otherLink} target="_blank">
                <i className="h h-external-link" />
              </AnchorLink>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
