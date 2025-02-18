import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages/HomePage/HomePage";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import RegisterPage from "../components/pages/RegisterPage/RegisterPage";
import ThemePage from "../components/pages/ThemePage/ThemePage";
import ServicePage from "../components/pages/ServicePage/ServicePage";
import PricingPage from "../components/pages/PricingPage/PricingPage";
import FaqPage from "../components/pages/FaqPage/FaqPage";
import AboutUs from "../components/organisms/AboutUs/AboutUs";
import ContactUs from "../components/organisms/ContactUs/ContactUs";


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
            },
            {
                path: '/theme',
                element: <ThemePage />,
            },
            {
                path: '/feature',
                element: <ServicePage />,
            },
            {
                path: '/pricing',
                element: <PricingPage />,
            },
            {
                path: '/faq',
                element: <FaqPage />,
            },
            {
                path: '/about-us',
                element: <AboutUs />,
            },
            {
                path: '/contact-us',
                element: <ContactUs />,
            },
        ],
    }
]);


export default router;