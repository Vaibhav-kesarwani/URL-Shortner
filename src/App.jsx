import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landingPage";
import DashboardPage from "./pages/dashboardPage";
import AuthPage from "./pages/authPage";
import LinkPage from "./pages/linkPage";
import RedirectlinkPage from "./pages/redirectlinkPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "/link/:id",
        element: <LinkPage />,
      },
      {
        path: "/:id",
        element: <RedirectlinkPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider  router={router}/>
}

export default App;
