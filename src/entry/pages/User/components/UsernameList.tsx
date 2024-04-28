import { address } from "@ton/core";
import { EmptyIcon, AnchorLink, VerifiedIcon } from "../../..";
import { truncateAddress } from "../../../../utils/helper";

const UsernameList = () => {
  return (
    <div>
      <div className="px-2">
        {/* <div className="table-responsive">
          <table className="username-item">
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Owner</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <AnchorLink to="/username/xyz">
                    <div className="info">
                      <img src="/images/helpers/nft.png" alt="xyz" />
                      <h3>@moyinthegrait</h3>
                    </div>
                  </AnchorLink>
                </td>
                <td>
                  <AnchorLink to="/user/xyz" className="link">
                    <span>
                      <span>Betty butter</span>
                      <VerifiedIcon />
                    </span>
                    <span>({truncateAddress({ address: address! })})</span>
                  </AnchorLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}

        <div className="col-12">
          <div className="empty-res my-4">
            <EmptyIcon width={130} height={130} className="mb-3" />

            <h3>Empty result</h3>
            <p className="mb-4">Once you claim username(s), it's going to appear here</p>

            <AnchorLink to="/mint">
              <button>
                <span>Claim&nbsp;</span>
                <i className="h h-external-link" />
              </button>
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsernameList;
