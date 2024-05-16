import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

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
// context
import { useContext } from "react";
import { GlobalContext } from "./context/useContextGlobal";
import { useEffect } from "react";
//  components
import { ErrorElement } from "./components";
// firebase
import { auth } from "./fairbase/FairbaseConfig";
import { onAuthStateChanged } from "firebase/auth";
// loaders
import { loader as LandingLoader } from "./pages/Langding";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
import { loader as ProductsLoader } from "./pages/Products";
import { useDispatch, useSelector } from "react-redux";
// action
import {action as RegisterAction} from "./pages/Register"
import { authReady, login } from "./features/user/userSlice";

function App() {
  const { user, authReadyState } = useSelector((state) => state.cartUser);
 
  // sahifalar
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRouter user={user}>
          <HomeLayout />
        </ProtectedRouter>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Langding />,
          errorElement: <ErrorElement />,
          loader: LandingLoader,
        },
        {
          path: "/products",
          element: <Products />,
          loader: ProductsLoader,
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
          loader: SingleProductLoader,
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
      element: user ? <Navigate to="/" /> : <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      errorElement: <Error />,
      element: user ? <Navigate to="/" /> : <Register />,
      action: RegisterAction,
    },
  ]);
    const dispatch = useDispatch();
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user))
    dispatch(authReady())
     
    });
  },[])

  return <>{authReadyState && <RouterProvider router={routes} />}</>; 
}

export default App;
