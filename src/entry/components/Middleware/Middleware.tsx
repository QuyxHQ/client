import { Layout, Modal } from '..';

const Middleware = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Modal />
            <Layout children={children} />
        </>
    );
};

export default Middleware;
