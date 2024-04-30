import { Outlet } from "react-router-dom"
// components
import Navbar from "../components/Navbar";

function HomeLayout() {
 
  return (
    <div>
     <Navbar/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout