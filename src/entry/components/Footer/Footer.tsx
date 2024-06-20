import { AnchorLink, GradientLogo } from '..';

const Footer = () => {
    return (
        <footer className="px-2">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mt-4 mb-5 mx-auto" style={{ width: 'max-content' }}>
                            <AnchorLink to="/">
                                <GradientLogo className="mx-auto d-block" />
                            </AnchorLink>
                        </div>
                    </div>

                    <div className="col-12">
                        <hr />
                    </div>

                    <div className="col-12">
                        <div className="py-5 px-3">
                            <div className="row g-5">
                                <div className="col-6 col-lg-3">
                                    <h4>#####</h4>

                                    <ul>
                                        <li>
                                            <AnchorLink to="/">
                                                <span>Home</span>
                                            </AnchorLink>
                                        </li>

                                        <li>
                                            <AnchorLink to="/team">
                                                <span>The Team</span>
                                            </AnchorLink>
                                        </li>

                                        <li>
                                            <AnchorLink to="/explore">
                                                <span>Explore</span>
                                            </AnchorLink>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">
                                    <h4>#####</h4>

                                    <ul>
                                        <li>
                                            <AnchorLink to="/claim">
                                                <span>Claim username</span>
                                            </AnchorLink>
                                        </li>

                                        <li>
                                            <AnchorLink
                                                to="https://t.me/QuyxBot?start"
                                                target="_blank"
                                            >
                                                <span>QuyxBot</span>
                                                <i className="h h-external-link" />
                                            </AnchorLink>
                                        </li>

                                        <li>
                                            <AnchorLink to="//github.com/QuyxHQ" target="_blank">
                                                <span>Github</span>
                                                <i className="h h-external-link" />
                                            </AnchorLink>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">
                                    <h4>Resources</h4>

                                    <ul>
                                        <li>
                                            <AnchorLink to="//docs.quyx.xyz" target="_blank">
                                                <span>Docs</span>
                                                <i className="h h-external-link" />
                                            </AnchorLink>
                                        </li>

                                        <li>
                                            <AnchorLink to="//developers.quyx.xyz" target="_blank">
                                                <span>Developers</span>
                                                <i className="h h-external-link" />
                                            </AnchorLink>
                                        </li>

                                        <li>
                                            <AnchorLink to="//blog.quyx.xyz" target="_blank">
                                                <span>Blog</span>
                                                <i className="h h-external-link" />
                                            </AnchorLink>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">
                                    <h4>Other</h4>

                                    <ul>
                                        <li>
                                            <AnchorLink to="/whitepaper.pdf">
                                                <span>Whitepaper</span>
                                                <i className="h h-external-link" />
                                            </AnchorLink>
                                        </li>

                                        <li>
                                            <AnchorLink to="/pitchdeck.pdf" target="_blank">
                                                <span>Pitchdeck</span>
                                                <i className="h h-external-link" />
                                            </AnchorLink>
                                        </li>

                                        <li>
                                            <AnchorLink
                                                to="mailto:momoreoluwaadedeji@gmail.com"
                                                target="_blank"
                                            >
                                                <span>Reach out</span>
                                                <i className="h h-external-link" />
                                            </AnchorLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mb-3">
                        <hr />
                    </div>

                    <div className="bottom d-flex flex-column flex-md-row align-items-center justify-content-between p-3">
                        <div className="links d-flex align-items-center">
                            <AnchorLink to="/privacy-policy">Privacy Policy</AnchorLink>
                            <span>|</span>
                            <AnchorLink to="/tcs">Terms &amp; Conditions</AnchorLink>
                        </div>

                        <div className="socials d-flex align-items-center">
                            <a href="https://twitter.com/quyxHQ" target="_blank">
                                <i className="h h-twitter" />
                            </a>

                            <a href="https://github.com/QuyxHQ" target="_blank">
                                <i className="h h-github" />
                            </a>

                            <a href="https://t.me/QuyxBot?start" target="_blank">
                                <i className="h h-send" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
