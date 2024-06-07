import { AnchorLink, GradientLogo2 } from '../..';

const NotFound = () => {
    return (
        <main className="notfound-404">
            <div className="bg"></div>

            <div className="main">
                <GradientLogo2 height={60} width={60} className="mb-5" />
                <h1 className="mb-1">404</h1>
                <p className="mb-5">Page not found</p>

                <AnchorLink to="/">
                    <button>Back Home</button>
                </AnchorLink>
            </div>
        </main>
    );
};

export default NotFound;
