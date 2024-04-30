import { Address } from "ton-core";
import { AnchorLink } from "../../..";
import useTonConnect from "../../../hooks/useTonConnect";

const UserTop = ({ user }: { user: QuyxUser }) => {
  const { connected, address } = useTonConnect();

  const isUser = address == Address.parse(user.address).toString();

  return (
    <div className="user-top-profile mb-3">
      <div className="cover">
        <img src="/images/bgs/profile.jpeg" alt="image" />
        <div className="overlay"></div>
      </div>

      <div className="container">
        <div className="user">
          <img src={user.pfp ? user.pfp : "/images/default-user.png"} alt={user.username} />

          {connected && isUser ? (
            <AnchorLink to="/settings">
              <button>
                <i className="h h-camera" />
              </button>
            </AnchorLink>
          ) : null}
        </div>

        {connected && isUser ? (
          <AnchorLink to="/settings">
            <button className="edit">
              <span>Edit Profile</span>
              <i className="h h-edit-2" />
            </button>
          </AnchorLink>
        ) : null}
      </div>
    </div>
  );
};

export default UserTop;
