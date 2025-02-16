import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages/HomePage/HomePage";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import RegisterPage from "../components/pages/RegisterPage/RegisterPage";


const router = createBrowserRouter([
    {
        path: '',
        // errorElement: <Error />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/register',
                element: <RegisterPage />,
            }
        ],
    }
]);


export default router;