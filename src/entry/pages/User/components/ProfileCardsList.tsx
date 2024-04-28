import { AnchorLink, Card, EmptyIcon } from "../../..";

const ProfileCardsList = () => {
  const data = [
    {
      name: "Profile Card for: @moyinthegrait",
      link: "/user/go",
      image: "/images/helpers/user-1.png",
      bio: "The formidable force in the blockchain realm, sculpting decentralized ecosystems with lines of unyielding code",
    },
    {
      name: "Profile Card for: @xyz",
      link: "/user/go",
      image: "/images/helpers/user-2.png",
      bio: "The formidable force in the blockchain realm, sculpting decentralized ecosystems with lines of unyielding code",
    },
    {
      name: "Profile Card for: @fatty",
      link: "/user/go",
      image: "/images/helpers/user-3.png",
      bio: "The formidable force in the blockchain realm, sculpting decentralized ecosystems with lines of unyielding code",
    },
  ];

  return (
    <div>
      <div className="px-2">
        {data && data.length > 0 ? (
          <div className="row g-4">
            {data.map((item, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={`item-${index}`}>
                <Card data={item} />
              </div>
            ))}

            <div className="col-12">
              <div className="d-flex align-items-center justify-content-center py-3 mt-2">
                <span className="loader-span-sm" />
              </div>
            </div>
          </div>
        ) : (
          <div className="col-12">
            <div className="empty-res my-4">
              <EmptyIcon width={130} height={130} className="mb-3" />

              <h3>Empty result</h3>
              <p className="mb-4">Once you mint profile card(s), it's going to appear here</p>

              <AnchorLink to="/mint">
                <button>
                  <span>Mint Card</span>
                  <i className="h h-plus" />
                </button>
              </AnchorLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCardsList;
