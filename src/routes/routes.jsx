import { Navigate } from "react-router-dom";
import MatxLayout from "../components/MatxLayout/MatxLayout";
import NotFound from "../pages/sessions/NotFound";
import sessionRoutes from "../pages/sessions/SessionRoutes";

export const AllPages = () => {
  const allRoutes = [
    {
      element: <MatxLayout />,
    },
    ...sessionRoutes,
    {
      path: "/",
      element: <Navigate to="dashboard/default" />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  return allRoutes;
};
