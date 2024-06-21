import { ConnectBtn } from '../..';

const Unauthorized = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="bg" />

                    <div className="px-2 unauth">
                        <h1>Unauthorized</h1>
                        <p>
                            We are sorry, but you do not have the necessary permissions to access
                            this page. This page is restricted to users who are logged in
                        </p>

                        <div>
                            <ConnectBtn />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Unauthorized;
