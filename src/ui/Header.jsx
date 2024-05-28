import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-[#F7F3E3] text-[#A8763E] pl-10 py-5 shadow-lg  flex justify-between">
      <div>
        <h1 className="text-2xl font-bold">Mero-Store</h1>
      </div>
      <div className="space-x-6 pr-10">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#523514]" : "text-[#A8763E]"
          }
          to="/">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#523514]" : "text-[#A8763E]"
          }
          to="/allproducts">
          All Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#523514]" : "text-[#A8763E]"
          }
          to="/category">
          Category
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#523514]" : "text-[#A8763E]"
          }
          to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
