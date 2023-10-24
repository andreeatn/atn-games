import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import StoresPage from "../pages/StoresPage";
import DevelopersPage from "../pages/DevelopersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/stores", element: <StoresPage /> },
      { path: "/developers", element: <DevelopersPage /> },
    ],
  },
]);

export default router;
