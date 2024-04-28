import { AnchorLink } from "../../..";
import useTonConnect from "../../../hooks/useTonConnect";

const UserTop = () => {
  const { connected } = useTonConnect();

  return (
    <div className="user-top-profile mb-3">
      <div className="cover">
        <img src="/images/bgs/profile.jpeg" alt="image" />
        <div className="overlay"></div>
      </div>

      <div className="container">
        <div className="user">
          <img src="/images/default-user.png" alt="user" />

          {connected ? (
            <AnchorLink to="/settings">
              <button>
                <i className="h h-camera" />
              </button>
            </AnchorLink>
          ) : null}
        </div>

        {connected ? (
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
