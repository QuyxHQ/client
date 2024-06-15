import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
    User,
    Home,
    Explore,
    Middleware,
    NotFound,
    Team,
    Settings,
    ClaimUsername,
    NftDetails,
    Bookmarks,
} from './entry';
import { Toaster } from 'react-hot-toast';

import './main.css';

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Middleware children={<Home />} />,
            errorElement: <NotFound />,
        },
        {
            path: '/bookmarks',
            element: <Middleware children={<Bookmarks />} />,
        },
        {
            path: '/user/:username',
            element: <Middleware children={<User />} />,
        },
        {
            path: '/explore',
            element: <Middleware children={<Explore />} />,
        },
        {
            path: '/nft/:address',
            element: <Middleware children={<NftDetails />} />,
        },
        {
            path: '/team',
            element: <Middleware children={<Team />} />,
        },
        {
            path: '/edit-profile',
            element: <Middleware children={<Settings />} />,
        },
        {
            path: '/claim',
            element: <Middleware children={<ClaimUsername />} />,
        },
        {
            path: '/claim/:username',
            element: <Middleware children={<ClaimUsername />} />,
        },
    ]);

    return (
        <>
            <Toaster position="bottom-center" reverseOrder={false} />
            <RouterProvider router={router} />
        </>
    );
};

export default App;
