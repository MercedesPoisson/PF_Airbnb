import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserBar from "./UserBar";
import UserNavLoged from "./UserNavLoged";

const UserMenu = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleUserMenu = () => {
    setShowUserMenu((prevShowUserMenu) => !prevShowUserMenu);
  };

  const handleNavigateToTeam = () => {
    navigate("/ayuda");
  };

  const handleNavigateToAccount = () => {
    navigate("/usuario/perfil");
  };

//   const handleLogout = () => {
//     logout({ returnTo: window.location.origin });
//   };

  return (
    <div style={{ position: "relative" }}>
      {isAuthenticated ? (
        <UserNavLoged
        //   handleUserMenu={handleUserMenu}
        //   showUserMenu={showUserMenu}
        //   handleLogout={handleLogout}
          handleNavigateToAccount={handleNavigateToAccount}
          handleNavigateToTeam={handleNavigateToTeam}
        />
      ) : (
        <UserBar
        //   handleUserMenu={handleUserMenu}
        //   showUserMenu={showUserMenu}
          handleNavigateToTeam={handleNavigateToTeam}
        />
      )}
    </div>
  );
};

export default UserMenu;