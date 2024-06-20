import WhatWeOffer1 from '../../../svgs/WhatWeOffer1';
import WhatWeOffer2 from '../../../svgs/WhatWeOffer2';
import WhatWeOffer4 from '../../../svgs/WhatWeOffer4';

const WhatWeOffer = () => {
    return (
        <div className="what-we-offer" id="what-we-offer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header">
                            <h2>What We Offer You</h2>
                            <p>
                                Discover the benefits of managing your social credentials in one
                                secure and user-friendly platform.
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-11 col-xl-8 mx-auto">
                        <div className="row g-5">
                            <div className="col-12 col-md-6">
                                <div className="item d-flex flex-column align-items-center align-items-md-start">
                                    <WhatWeOffer1 />
                                    <h3>Unified identity management</h3>
                                    <p>
                                        Manage all your social credentials securely in one place for
                                        easy access and convenience.
                                    </p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="item d-flex flex-column align-items-center align-items-md-start">
                                    <WhatWeOffer4 />
                                    <h3>Username marketplace</h3>
                                    <p>
                                        Buy and sell unique usernames with zero marketplace fees
                                        through our transparent auction process.
                                    </p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="item d-flex flex-column align-items-center align-items-md-start">
                                    <WhatWeOffer2 />
                                    <h3>Credential control</h3>
                                    <p>
                                        Create, revoke, and manage your credentials effortlessly
                                        using our Telegram mini app (@QuyxBot).
                                    </p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="item d-flex flex-column align-items-center align-items-md-start">
                                    <WhatWeOffer4 />
                                    <h3>Seamless integration</h3>
                                    <p>
                                        Use your credentials across multiple platforms, ensuring a
                                        smooth and unified social identity experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;
