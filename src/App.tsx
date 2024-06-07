import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
    User,
    Home,
    Explore,
    Middleware,
    Modal,
    NotFound,
    Team,
    Settings,
    NameDetails,
    ClaimUsername,
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
            path: '/user/:username',
            element: <Middleware children={<User />} />,
        },
        {
            path: '/explore',
            element: <Middleware children={<Explore />} />,
        },
        {
            path: '/name/:address',
            element: <Middleware children={<NameDetails />} />,
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
            <Modal />
            <Toaster position="bottom-center" reverseOrder={false} />
            <RouterProvider router={router} />
        </>
    );
};

export default App;
