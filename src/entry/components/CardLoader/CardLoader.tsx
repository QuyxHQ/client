const CardLoader = ({ size = 6 }) => {
  return Array.from({ length: size }).map((_, i) => <Loader key={`loader-${i}`} />);
};

const Loader = () => {
  return <div className="col-12 col-md-6 col-lg-4">Loading..</div>;
};

export default CardLoader;
