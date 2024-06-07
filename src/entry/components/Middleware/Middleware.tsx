import { Layout } from "..";

const UNPROTECTED_ROUTES = ["/", "/about", "/marketplace", "/team"];

const Middleware = ({ children }: { children: React.ReactNode }) => {
  return <Layout children={children} />;
};

export default Middleware;
