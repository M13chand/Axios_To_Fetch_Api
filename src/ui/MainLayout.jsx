import Header from "./Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default MainLayout;
