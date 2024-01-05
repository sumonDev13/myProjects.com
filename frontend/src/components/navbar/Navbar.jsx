import MenuDropdown from "../menuDropdown/MenuDropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <Link to='/'>
        <h1 className="text-white text-2xl">SumonDev13</h1>
        </Link>
        
        <div className="ml-auto">
          <MenuDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
