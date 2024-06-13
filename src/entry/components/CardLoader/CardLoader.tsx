const CardLoader = ({ size = 6, col }: { col?: string; size?: number }) => {
    return Array.from({ length: size }).map((_, i) => <Loader col={col} key={`loader-${i}`} />);
};

const Loader = ({ col }: { col?: string }) => {
    return (
        <div className={col ? col : 'col-12 col-md-6 col-lg-4'}>
            <div className="card-loader">
                <div className="image skeleton" />

                <div className="text px-1 mb-4">
                    <p className="skeleton" />
                    <p className="skeleton" />
                </div>
            </div>
        </div>
    );
};

export default CardLoader;
