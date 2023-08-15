import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Suspense } from "react";

import Home from "../views/Home";
// import Detail from "../views/Detail";
import Error from "../views/Error";
import Dashboard from "../views/Dashboard/index.jsx";
// import ErrorBoundary from "../components/ErrorBoundary";
//
// import Dashboard from "../views/Dashboard";
// import LikedEvents from '../views/Dashboard/components/LikedEvents';
// import MyInfo from "../views/Dashboard/components/MyInfo";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;