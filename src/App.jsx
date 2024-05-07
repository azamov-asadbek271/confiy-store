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

function App() {
  const {user,dispatch,authChange} = useContext(GlobalContext)
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
          errorElement:<ErrorElement/>,
          loader:LandingLoader,
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
      element: user ? <Navigate to="/" /> : <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      errorElement: <Error />,
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
     dispatch({
      type:"SIGNI_USER",
      payload:user
     })
     dispatch({
       type: "AUTH_CHANGE",
     });
    });
  },[])

  // div
  return <>{authChange && <RouterProvider router={routes} />}</>; 
}

export default App;
