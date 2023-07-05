import { Outlet } from "react-router-dom";
import UserNavBar from "./UserNavBar";
import Footer from "../../components/Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";

const LayoutUser = () => {
  const { isAuthenticated, loginWithRedirect, isLoading: auth0IsLoading } = useAuth0();

  if(!auth0IsLoading){
    if(!isAuthenticated) loginWithRedirect()
  }

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
