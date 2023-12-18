import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import OffersPage from "./pages/OffersPage";
import StorePage from "./pages/StorePage";

import { loader as storesLoader } from "./pages/HomePage";
import { loader as menuLoader } from "./pages/StorePage";
import RootPage from "./layout/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      id: "store-details",
      loader: storesLoader,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "stores",
          children: [
            {
              path: "offers",
              element: <OffersPage />,
            },
            {
              path: ":storeId",
              children: [
                { index: true, element: <StorePage />, loader: menuLoader },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
