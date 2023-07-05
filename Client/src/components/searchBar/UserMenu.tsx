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

  const handleNavigateToAccount = () => {
    navigate("/usuario");
  };

  const handleNavigateToAnuncios = () => {
    navigate("/usuario/anuncios");
  };

  const handleNavigateToMensajes = () => {
    navigate("/usuario/mensajes");
  };

  const handleLogout = () => {
    logout({ returnTo: "https://pf-airbnb.vercel.app/?page=0" });
  };

  const handleNavigateToFavoritos = () => {
    navigate("/usuario/favoritos");
  }
  const handleNavigateToViajes = () => {
    navigate("/usuario/viajes");
  }

  return (
    <div >
      {isAuthenticated ? (
        <UserNavLoged
          handleUserMenu={handleUserMenu}
          showUserMenu={showUserMenu}
          handleNavigateToAccount={handleNavigateToAccount}
          handleLogout={handleLogout}
          handleNavigateToAnuncios={handleNavigateToAnuncios}
          handleNavigateToFavoritos={handleNavigateToFavoritos}          
          handleNavigateToViajes={handleNavigateToViajes}
        />
      ) : (
        <UserBar
          handleUserMenu={handleUserMenu}
          showUserMenu={showUserMenu}
        />
      )}
    </div>
  );
};

export default UserMenu;