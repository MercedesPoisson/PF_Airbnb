// este UserBar solo tiene el circulo del usuario. y muestra menu desplegable cuando no estas logueado

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


interface UserBarProps {
  handleNavigateToTeam: () => void;
}

const UserBar = ({ handleNavigateToTeam }: UserBarProps) => {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [showUserBar, setShowUserBar] = useState(false);

  const handleUserBar = () => {
    setShowUserBar((prevShowUserBar) => !prevShowUserBar);
  };

  const handlePostProperty = () => {
    if(isAuthenticated) {
      navigate("/formulario");
    } else {
      loginWithRedirect();
    }
  };


  return (
    <div className="font-cairo-play text-base " style={{ position: "relative"}}>
      <button className="mr-4" onClick={handleUserBar}>
        <i className="fa-regular fa-circle-user text-argentina text-xl"></i>
      </button>

      {showUserBar && (
        <ul
          
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            zIndex: 999,
            border: "1px solid #ccc",
            borderRadius: "4px",
            background: "#fff",
            padding: "0.5rem",
            minWidth: "200px",
          }}
        >
          <li className="cursor-pointer" style={{ borderBottom: "1px solid #ccc", padding: "0.5rem 0" }}>
            <a onClick={() => loginWithRedirect()}>Iniciá Sesión</a>
          </li>
          
          <li style={{ borderBottom: "1px solid #ccc", padding: "0.5rem 0" }}>
            <a href="#" onClick={handlePostProperty}>Publicá tu Propiedad</a>
          </li>

          <li style={{ padding: "0.5rem 0" }}>
            <a href="#" onClick={handleNavigateToTeam}>
              Ayuda
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserBar;