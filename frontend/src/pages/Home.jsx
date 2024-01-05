import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Home;
