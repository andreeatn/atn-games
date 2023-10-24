import { createBrowserRouter } from "react-router-dom";
import HomePage from "pages/HomePage";
import Layout from "pages/Layout";
import StoresPage from "pages/StoresPage";
import DevelopersPage from "pages/DevelopersPage";
import PlatformsPage from "pages/PlatformsPage";
import PublishersPage from "pages/PublishersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/stores", element: <StoresPage /> },
      { path: "/developers", element: <DevelopersPage /> },
      { path: "/platforms", element: <PlatformsPage /> },
      { path: "/publishers", element: <PublishersPage /> },
    ],
  },
]);

export default router;
