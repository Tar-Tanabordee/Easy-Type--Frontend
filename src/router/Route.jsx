import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import StorePage from "../pages/StorePage";
import SupportPage from "../pages/SupportPage";
import ContactPage from "../pages/ContactPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import ProfilePage from "../pages/ProfilePage";
import Authenticated from "../components/auth/Authenticated";
import OrderPage from "../pages/OrderPage";
import AboutPage from "../pages/AboutPage";
import CheckoutPage from "../pages/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "store", element: <StorePage /> },
      { path: "support", element: <SupportPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "product/:id", element: <ProductPage /> },
    ],
  },
  {
    path: "/",
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
    ),
    children: [
      { path: "profile", element: <ProfilePage /> },
      { path: "cart", element: <CartPage /> },
      { path: "order", element: <OrderPage /> },
      { path: "order/:id", element: <CheckoutPage /> },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
