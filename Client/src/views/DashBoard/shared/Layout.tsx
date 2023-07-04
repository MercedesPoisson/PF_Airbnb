import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Layout = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { user, isAuthenticated, isLoading: auth0IsLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!auth0IsLoading) {
      if (isAuthenticated) {
        const email = user?.email;
        if (email !== "fjgalliani@hotmail.com") {
          navigate("/");
        } else {
          setIsLoading(false);
        }
      } else {
        loginWithRedirect()
      }
    }
  }, [auth0IsLoading, isAuthenticated, navigate, user?.email]);

  if (isLoading) {
    return <div>Por favor espera...</div>;
  }

  return (
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 p-4 min-h-0 overflow-auto">
          <Outlet />
        </div>
      </div>
      {/* <div>Footer</div> */}
    </div>
  );
};

export default Layout;
