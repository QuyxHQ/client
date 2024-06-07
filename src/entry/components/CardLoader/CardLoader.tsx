const CardLoader = ({ size = 6, col }: { col?: string; size?: number }) => {
  return Array.from({ length: size }).map((_, i) => <Loader col={col} key={`loader-${i}`} />);
};

const Loader = ({ col }: { col?: string }) => {
  return (
    <div className={col ? col : "col-12 col-md-6 col-lg-4"}>
      <div className="card-loader">
        {/* <div className="user-box d-flex align-items-center">
          <div className="image skeleton" />
          <p className="skeleton" />
        </div> */}

        <div className="image skeleton" />
        <p className="skeleton title" />

        <div className="text mb-3">
          <p className="skeleton" />
          <p className="skeleton" />
          <p className="skeleton" />
        </div>
      </div>
    </div>
  );
};

export default CardLoader;
