import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import CommunityPage from "../page/CommunityPage";
import SupportPage from "../page/SupportPage";
import ShoppingPage from "../page/ShoppingPage";
import Layout from "../layout/Layout";
import BlogPage from "../page/BlogPage";
import LoginPage from "../page/LoginPage";
import RedirectIfAuthenticated from "../features/auth/RedirectAuthenticated";
import PaymentPage from "../page/PaymentPage";
// import AdminPage from "../page/AdminPage";
import ProductPage from "../page/ProductPage";
// import AdminLogin from "../features/auth/AdminLogin";
// import AdminRegisterForm from "../features/auth/AdminRegisterForm";

const router = createBrowserRouter([
  {
    part: "/",

    element: <HomePage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "community", element: <CommunityPage /> },
      { path: "support", element: <SupportPage /> },
      { path: "product", element: <ProductPage /> },
      { path: "shopping", element: <ShoppingPage /> },
      { path: "payment", element: <PaymentPage /> },
      // { path: "login", element: <LoginPage /> },
    ],
  },
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  // {
  //   path: "admin/",
  //   element: <AdminPage />,
  // },
  // {
  //   path: "admin/login",
  //   element: <AdminLogin />,
  // },
  // {
  //   path: "admin/register",
  //   element: <AdminRegisterForm />,
  // },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
