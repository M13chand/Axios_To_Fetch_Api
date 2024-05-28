import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import MainLayout from "./ui/MainLayout";
import ProductCard from "./components/ProductCard";
import Category from "./components/Category";
import PageNotFound from "./components/PageNotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allproducts",
        element: <ProductCard />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
