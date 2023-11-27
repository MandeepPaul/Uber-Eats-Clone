import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import StoresPage from "./pages/StoresPage";
import OffersPage from "./pages/OffersPage";
import StorePage from "./pages/StorePage";

import RootPage from "./layout/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "stores",
          children: [
            {
              index: true,
              element: <StoresPage />,
            },
            {
              path: ":storeId",
              children: [{ index: true, element: <StorePage /> }],
            },
          ],
        },
        {
          path: "offers",
          element: <OffersPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
