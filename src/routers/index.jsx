import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages/HomePage/HomePage";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import RegisterPage from "../components/pages/RegisterPage/RegisterPage";
import ThemePage from "../components/pages/ThemePage/ThemePage";
import ServicePage from "../components/pages/ServicePage/ServicePage";
import PricingPage from "../components/pages/PricingPage/PricingPage";
import FaqPage from "../components/pages/FaqPage/FaqPage";

import Checkout from "../components/pages/Checkout/Checkout";
import AboutUs from "../components/pages/AboutUs/AboutUs";
import ContactUs from "../components/pages/ContactUs/ContactUs";
import PrivacyPolicy from "../components/pages/PrivacyPolicy/PrivacyPolicy";
import ThemeOne from "../components/Theme/ThemeOne/ThemeOne";
import ThemeTwo from "../components/Theme/ThemeTwo/ThemeTwo";
import AddtoCart from "../components/organisms/AddtoCart/AddtoCart";
import Wishlist from "../components/organisms/Wishlist/Wishlist";
import CheckoutPage from "../components/organisms/CheckoutPage/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "",
    // errorElement: <Error />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/theme",
        element: <ThemePage />,
      },
      {
        path: "/feature",
        element: <ServicePage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/theme/1",
        element: <ThemeOne />,
      },
      {
        path: "/theme/2",
        children: [{ path: "", element: <ThemeTwo /> }],
      },
      {
        path: "/add-to-cart",
        element: <AddtoCart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/theme/1/checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);

export default router;
