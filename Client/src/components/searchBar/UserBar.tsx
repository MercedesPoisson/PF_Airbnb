import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const UserBar = () => {
  const navigate = useNavigate();
  const [showUserBar, setShowUserBar] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0()

  const handleUserBar = () => {
    setShowUserBar((prevShowUserBar) => !prevShowUserBar);
  };

  const handleNavigateToTeam = () => {
    navigate("/ayuda");
  };


  return (
    <div style={{ position: "relative" }}>
      <button className="mr-4" onClick={handleUserBar}>
        <i className="fa-regular fa-circle-user text-argentina text-xl"></i>
      </button>

      {showUserBar && (
        <ul
          className="user-menu"
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
          { !isAuthenticated && 
          <li style={{ borderBottom: "1px solid #ccc", padding: "0.5rem 0" }}>
          <a onClick={() => loginWithRedirect()}>Iniciá Sesión</a>
          </li>}
          { !isAuthenticated &&
            <li style={{ borderBottom: "1px solid #ccc", padding: "0.5rem 0" }}>
            <a href="#">Registrate</a>
            </li>
          }
          <li style={{ borderBottom: "1px solid #ccc", padding: "0.5rem 0" }}>
            <a href="#">Publicá tu Propiedad</a>
          </li>
          <li style={{ padding: "0.5rem 0" }}>
            <a href="#" onClick={handleNavigateToTeam}>Ayuda</a>
          </li>
          { isAuthenticated &&
            <li style={{ borderBottom: "1px solid #ccc", padding: "0.5rem 0" }}>
            <a onClick={() => logout({ logoutParams: { returnTo: 'http://localhost:5173'}})}>Cerrar Sesión</a>
            </li>
          }
        </ul>
      )}
    </div>
  );
};

export default UserBar;