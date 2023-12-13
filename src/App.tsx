import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import OffersPage from "./pages/OffersPage";
import StorePage from "./pages/StorePage";

import { loader as storesLoader } from "./pages/HomePage";
import RootPage from "./layout/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage />, loader: storesLoader },
        {
          path: "stores",
          children: [
            {
              path: "offers",
              element: <OffersPage />,
            },
            {
              path: ":storeId",
              children: [{ index: true, element: <StorePage /> }],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
