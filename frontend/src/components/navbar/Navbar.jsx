import MenuDropdown from "../menuDropdown/MenuDropdown";

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-2xl">SumonDev13</h1>
        <div className="ml-auto">
          <MenuDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
