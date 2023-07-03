//este componente dice quien se va a renderizar, si estoy logueado es UserNavLoged y si estoy deslogueado es UserBar

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserBar from "./UserBar";
import UserNavLoged from "./UserNavLoged";

const UserMenu = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth0();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleUserMenu = () => {
    setShowUserMenu((prevShowUserMenu) => !prevShowUserMenu);
  };

  const handleNavigateToTeam = () => {
    navigate("/ayuda");
  };

  const handleNavigateToAccount = () => {
    navigate("/usuario");
  };

  const handleNavigateToAnuncios = () => {
    navigate("/usuario/anuncios");
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleNavigateToFavoritos = () => {
    navigate("/usuario/favoritos");
  }

  return (
    <div >
      {isAuthenticated ? (
        <UserNavLoged
          handleUserMenu={handleUserMenu}
          showUserMenu={showUserMenu}
          handleNavigateToAccount={handleNavigateToAccount}
          handleLogout={handleLogout}
          handleNavigateToTeam={handleNavigateToTeam}
          handleNavigateToAnuncios={handleNavigateToAnuncios}
          handleNavigateToFavoritos={handleNavigateToFavoritos}
        />
      ) : (
        <UserBar
          handleUserMenu={handleUserMenu}
          showUserMenu={showUserMenu}
          handleNavigateToTeam={handleNavigateToTeam}
        />
      )}
    </div>
  );
};

export default UserMenu;