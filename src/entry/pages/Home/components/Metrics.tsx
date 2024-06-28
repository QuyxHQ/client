const Metrics = () => {
    return (
        <div
            className="metrics d-flex flex-column align-items-center align-items-lg-start flex-md-row flex-wrap justify-content-center text-center"
            id="metrics"
        >
            <div className="col col-md-5 col-lg-2">
                <h3>10k</h3>
                <p>Usernames claimed</p>
            </div>

            <div className="col col-md-5 col-lg-2">
                <h3>250k</h3>
                <p>Total users</p>
            </div>

            <div className="col col-md-5 col-lg-2">
                <h3>0.3s</h3>
                <p>Avg. response time</p>
            </div>

            <div className="col col-md-5 col-lg-2">
                <h3>300</h3>
                <p>Platform integrations</p>
            </div>
        </div>
    );
};

export default Metrics;
