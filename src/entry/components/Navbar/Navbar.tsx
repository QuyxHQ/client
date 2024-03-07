import { useEffect, useRef, useState } from "react";
import { AnchorLink, ConnectBtn, GradientLogo, VerifiedIcon, Wallet } from "..";
import { useAppStore } from "../../context/AppProvider";
import debounce from "lodash.debounce";
import { api } from "../../../utils/class/api.class";

const Navbar = () => {
  const { isWalletConnected, userInfo, balance } = useAppStore();
  const [displaySearchRes, setDisplaySearchRes] = useState<boolean>(false);
  const [displaySearchOnMobile, setDisplaySearchOnMobile] = useState<boolean>(false);
  const [q, setQ] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<QuyxUser[]>();
  const searchBoxRef = useRef<any>(null);
  const [isLogoutLoading, setIsLogoutLoading] = useState<boolean>(false);
  const [displayWallet, setDisplayWallet] = useState<boolean>(false);

  async function logout() {
    if (isLogoutLoading) return;
    setIsLogoutLoading(true);

    const resp = await api.logout();
    if (resp) window.location.reload();

    setIsLogoutLoading(false);
  }

  const navigation = [
    {
      title: "Dashboard",
      icon: "user",
      to: "/dashboard",
    },
    {
      title: "Marketplace",
      icon: "grid",
      to: "/marketplace",
    },
    {
      title: "Bookmarks",
      icon: "bookmark",
      to: "/bookmarks",
    },
    {
      title: "Settings",
      icon: "settings",
      to: "/settings",
    },
    {
      isDivider: true,
    },
    {
      title: "Docs",
      icon: "file",
      to: "//docs.quyx.xyz",
      target: "_blank",
    },
    {
      title: "Help center",
      icon: "help-circle",
      to: "mailto:support@quyx.xyz",
      target: "_blank",
    },
    {
      isDivider: true,
    },
  ];

  async function searchForCreator(q: string) {
    const resp = await api.searchForUser({ q, limit: 20, page: 1 });
    if (resp) setUsers(resp.data);
    setIsLoading(false);
  }

  const debouncedFetchData = debounce(searchForCreator, 1500);

  useEffect(() => {
    if (q && q.length >= 3) {
      setDisplaySearchRes(true);
      setIsLoading(true);
      debouncedFetchData(q);
    } else setDisplaySearchRes(false);
  }, [q]);

  useEffect(() => {
    function handleClickOutside(e: any) {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        setDisplaySearchRes(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <Wallet displayWallet={displayWallet} setDisplayWallet={setDisplayWallet} />

      <nav className="default-nav">
        <div className="container-fluid container-xl">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between px-2">
                <AnchorLink to="/" className="pt-1">
                  <GradientLogo height={35} width={104} />
                </AnchorLink>

                <div
                  className="d-flex align-items-center justify-content-between"
                  style={{ gap: "1rem" }}
                >
                  <AnchorLink to="/new-card">
                    <button className="d-none d-md-flex gradient-border button-create">
                      <span>Create</span>
                      <i className="h h-plus" />
                    </button>
                  </AnchorLink>

                  <div className="d-none d-md-block position-relative" ref={searchBoxRef}>
                    <div className="search position-relative">
                      <i className="position-absolute h h-lens" />
                      <input
                        type="text"
                        placeholder="Search creators"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        onFocus={() => (q.length >= 3 ? setDisplaySearchRes(true) : {})}
                      />
                    </div>

                    <div
                      className={`position-absolute search-result-creator d-none ${
                        displaySearchRes ? "d-md-block" : "d-none"
                      }`}
                    >
                      {q.length < 3 ? (
                        <div className="py-5 my-2 d-flex justify-content-center">
                          <p className="text px-5 text-center">Start typing....</p>
                        </div>
                      ) : isLoading ? (
                        <div className="py-5 my-2 d-flex justify-content-center">
                          <div className="loader-span-sm"></div>
                        </div>
                      ) : !users ? (
                        <div className="py-5 my-2 d-flex justify-content-center">
                          <p className="text">
                            <strong>Oops!</strong> Unable to complete search
                          </p>
                        </div>
                      ) : users.length == 0 ? (
                        <div className="py-5 my-2 d-flex justify-content-center">
                          <p className="text">
                            no user found for <strong>`{q}`</strong>
                          </p>
                        </div>
                      ) : (
                        <ul>
                          {users.map((user, index) => (
                            <li key={`creator-search-${index}`}>
                              <AnchorLink to={`/user/${user.username}`}>
                                <div>
                                  <img
                                    src={user.pfp ?? "/images/default-user.png"}
                                    alt={user.username}
                                  />
                                </div>

                                <h4>
                                  <span>{user.username}</span>
                                  {user.hasBlueTick ? <VerifiedIcon /> : null}
                                </h4>
                              </AnchorLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <AnchorLink to="/new-card" className="d-flex d-md-none">
                    <div className="icon gradient-border">
                      <i className="h h-plus" />
                    </div>
                  </AnchorLink>

                  <div
                    className="icon d-flex d-md-none pointer"
                    onClick={() => setDisplaySearchOnMobile(true)}
                  >
                    <i className="h h-lens" />
                  </div>

                  {isWalletConnected ? (
                    <div className="user d-flex align-items-center">
                      <button onClick={() => setDisplayWallet(true)}>
                        <div className="d-flex align-items-center px-0 px-sm-1 px-md-0 px-lg-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              fill="#fff"
                              d="M2.656 16.72l.217-.355-.217.355zM1.28 15.345l.355-.218-.355.218zm15.439 0l-.356-.218.356.218zm-1.376 1.375l-.217-.355.217.355zm0-12.939l-.217.356.217-.356zm1.376 1.376l-.356.218.356-.218zM2.656 3.781l.217.356-.217-.356zM1.28 5.157l.355.218-.355-.218zm13.117-4.034l.3-.289-.3.289zM2.203 1.41l.252.332-.252-.332zm-.825.86l.342.238-.342-.238zm13.455 1.006h.416v-.002l-.416.002zm-.53 6.861a.417.417 0 000-.833v.833zm-2.273-.833a.417.417 0 000 .833v-.833zm-4.28-5.72h2.5v-.833h-2.5v.833zm2.5 13.333h-2.5v.834h2.5v-.834zm-2.5 0c-1.373 0-2.372 0-3.155-.074-.777-.074-1.297-.218-1.722-.478l-.435.71c.577.354 1.24.518 2.078.597.831.08 1.878.079 3.233.079v-.834zm-7.5-6.666c0 1.356-.001 2.402.078 3.233.08.838.243 1.5.597 2.078l.71-.435c-.26-.425-.403-.945-.477-1.722-.075-.782-.075-1.782-.075-3.154H.249zm2.623 6.114a3.75 3.75 0 01-1.238-1.238l-.71.435a4.583 4.583 0 001.513 1.513l.435-.71zm7.376 1.386c1.356 0 2.402 0 3.234-.079.838-.08 1.5-.243 2.078-.597l-.435-.71c-.425.26-.945.404-1.722.478-.783.074-1.783.075-3.155.075v.833zm6.114-2.624a3.75 3.75 0 01-1.237 1.238l.435.71a4.583 4.583 0 001.513-1.513l-.71-.435zm-1.237-10.99c.504.309.928.733 1.237 1.238l.711-.436a4.584 4.584 0 00-1.513-1.513l-.435.71zM7.749 2.75c-1.355 0-2.402 0-3.233.078-.838.08-1.5.243-2.078.597l.435.71c.425-.26.945-.403 1.722-.477.783-.074 1.782-.075 3.154-.075v-.833zm-6.666 7.5c0-1.372 0-2.372.075-3.155.074-.777.217-1.297.477-1.721l-.71-.436C.57 5.517.408 6.18.328 7.017.25 7.85.25 8.895.25 10.251h.834zm1.355-6.825A4.583 4.583 0 00.925 4.94l.71.436a3.75 3.75 0 011.238-1.238l-.435-.71zm4.939-2.342h4.474V.251H7.377v.833zm4.474 0c.715 0 1.208.001 1.579.053.356.05.537.14.666.274l.601-.577c-.307-.32-.696-.458-1.152-.522C13.103.25 12.542.25 11.851.25v.833zM7.377.251c-1.388 0-2.464 0-3.315.095-.859.097-1.537.297-2.11.732l.503.664c.406-.308.917-.48 1.7-.568.793-.09 1.814-.09 3.222-.09V.251zM1.083 7.664c0-1.467 0-2.534.087-3.364.085-.823.251-1.363.55-1.792l-.684-.477C.623 2.624.433 3.324.341 4.214c-.092.883-.092 2.001-.092 3.45h.834zm.868-6.586c-.351.266-.66.588-.915.953l.684.477c.205-.295.453-.553.735-.766l-.504-.664zM15.25 3.274c-.002-.566-.015-1.037-.082-1.423-.069-.396-.201-.737-.47-1.017l-.6.577c.115.121.198.287.25.583.053.307.066.711.07 1.284l.832-.004zm-15 4.39c0 .82-.016 1.555 0 2.181l.834-.022c-.017-.613 0-1.31 0-2.16H.249zm16.667 3.913H12.03v.833h4.886v-.833zM9.34 9.72a2.69 2.69 0 002.69 2.689v-.833a1.856 1.856 0 01-1.856-1.856H9.34zm.834 0c0-1.026.83-1.857 1.856-1.857v-.833a2.69 2.69 0 00-2.69 2.69h.834zm4.129-.417H12.03v.833h2.273v-.833zm-4.054-5.72c1.152 0 2.043 0 2.766.045.723.045 1.247.132 1.67.293l.296-.78c-.538-.203-1.16-.298-1.914-.345-.755-.046-1.676-.046-2.818-.046v.833zm4.436.338c.159.06.304.131.44.215l.436-.71a3.444 3.444 0 00-.58-.284l-.296.779zm-.269-.646v.256h.833v-.256h-.833zM12.03 7.864h5.257v-.833H12.03v.833zm5.72 2.387c0-1.148 0-2.072-.048-2.83l-.831.053c.045.725.045 1.62.045 2.777h.834zm-.048-2.83c-.064-1.034-.22-1.816-.628-2.482l-.71.436c.3.49.445 1.108.507 2.099l.831-.052zm-.786 2.83c0 .656 0 1.228-.008 1.735l.833.014c.009-.515.009-1.095.009-1.75h-.834zm-.008 1.735c-.027 1.628-.145 2.488-.545 3.14l.711.436c.534-.87.64-1.951.667-3.562l-.833-.014zm.008.424h.408v-.833h-.408v.833z"
                            ></path>
                          </svg>

                          <span className="d-none d-sm-block d-md-none d-lg-block">
                            {balance ? balance.toFixed(3) : "-.--"} BNB
                          </span>
                        </div>
                      </button>

                      <div className="position-relative">
                        <img
                          src={userInfo?.pfp ? userInfo.pfp : "/images/default-user.png"}
                          alt={userInfo?.username}
                        />

                        <div className="position-absolute nav-navigate">
                          <ul>
                            {navigation.map((item, index) =>
                              item.isDivider ? (
                                <li className="divider" key={`navigation-${index}`} />
                              ) : (
                                <li key={`navigation-${index}`}>
                                  <AnchorLink to={item.to!} target={item.target}>
                                    <i className={`h h-${item.icon}`} />
                                    <span>{item.title}</span>
                                  </AnchorLink>
                                </li>
                              )
                            )}

                            <li>
                              <a onClick={() => logout()} className={isLoading ? "disabled" : ""}>
                                {isLogoutLoading ? (
                                  <span className="loader-span-sm"></span>
                                ) : (
                                  <i className="h h-logout" />
                                )}

                                <span>Logout</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <ConnectBtn />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className={`search-on-mobile ${displaySearchOnMobile ? "d-block" : "d-none"} d-md-none`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="main mt-4 px-1">
                <div className="header d-flex align-items-center mb-4">
                  <div className="back" onClick={() => setDisplaySearchOnMobile(false)}>
                    <i className="h h-chevron-left" />
                  </div>

                  <div className="form-group position-relative w-100 my-0">
                    <input
                      type="text"
                      className="my-0"
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      placeholder="Search creators"
                    />

                    <div className="position-absolute">
                      <i className="h h-lens" />
                    </div>
                  </div>
                </div>

                <div className="content">
                  {q.length < 3 ? (
                    <div className="py-5 my-2 d-flex justify-content-center">
                      <p className="text px-5 text-center">Start typing....</p>
                    </div>
                  ) : isLoading ? (
                    <div className="d-flex align-items-center justify-content-center py-5 my-5">
                      <span className="loader-span-sm my-4"></span>
                    </div>
                  ) : !users ? (
                    <div className="py-5 my-2 d-flex justify-content-center">
                      <p className="text">
                        <strong>Oops!</strong> Unable to complete search
                      </p>
                    </div>
                  ) : users.length == 0 ? (
                    <div className="py-5 my-2 d-flex justify-content-center">
                      <p className="text">
                        no user found for <strong>`{q}`</strong>
                      </p>
                    </div>
                  ) : (
                    <ul>
                      {users.map((user, index) => (
                        <li key={`creator-search-${index}`}>
                          <AnchorLink
                            to={`/user/${user.username}`}
                            handleClick={() => setDisplaySearchOnMobile(false)}
                          >
                            <div>
                              <img
                                src={user.pfp ?? "/images/default-user.png"}
                                alt={user.username}
                              />
                            </div>

                            <h4>
                              <span>{user.username}</span>
                              {user.hasBlueTick ? <VerifiedIcon /> : null}
                            </h4>
                          </AnchorLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
