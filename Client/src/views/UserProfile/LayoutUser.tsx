import { Outlet } from "react-router-dom";
import UserNavBar from "./UserNavBar";
import Footer from "../../components/Footer/Footer";

const LayoutUser = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col">
      <UserNavBar />
      <div className="flex-1 p-4 overflow-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutUser;