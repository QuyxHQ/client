import Features1 from '../../../svgs/Features1';
import Features2 from '../../../svgs/Features2';

const Features = () => {
    return (
        <div className="features" id="features">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header">
                            <h2>Powerful Features</h2>
                            <p>
                                Explore cutting-edge features designed to give you complete control
                                over your social identity.
                            </p>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="row g-4">
                            <div className="col-12 col-md-6">
                                <div className="item">
                                    <Features1 />

                                    <p>Secure auctions</p>
                                    <h3>Safely bid on & secure your preferred usernames.</h3>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="row g-4">
                                    <div className="col-12">
                                        <div className="item-sm">
                                            <p>Credential management</p>
                                            <h3>
                                                Easily create, manage, & revoke your credentials.
                                            </h3>

                                            <Features2 width={215} height={215} />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="item-sm">
                                            <p>Zero marketplace fees</p>
                                            <h3>Buy & sell usernames with no additional costs.</h3>

                                            <Features2 width={215} height={215} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
