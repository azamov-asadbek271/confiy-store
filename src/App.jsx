import { createBrowserRouter, RouterProvider } from "react-router-dom";


// pages
import HomeLayout from "./pages/HomeLayout";
import Langding from "./pages/Langding";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import Error from "./pages/Error";
import ProtectedRouter from "./pages/ProtectedRouter";


function App() {

  // sahifalar
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRouter user={true}>
          <HomeLayout />
        </ProtectedRouter>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Langding />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/singleProduct/:id",
          element: <SingleProduct />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      errorElement: <Error />,
      element: <Register />,
    },
  ]);

  // div
  return <RouterProvider router={routes}/>
}

export default App;
