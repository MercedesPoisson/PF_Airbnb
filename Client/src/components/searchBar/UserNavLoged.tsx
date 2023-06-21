import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

interface UserNavProps {
  handleNavigateToAccount: () => void;
  handleNavigateToTeam: () => void;
}

const UserNavLoged = ({ handleNavigateToAccount, handleNavigateToTeam }: UserNavProps) => {
  const [showUserBar, setShowUserBar] = useState(false);
 
  const { logout } = useAuth0();
  const navigate = useNavigate();

  const handleUserLoged = () => {
    setShowUserBar((prevShowUserBar) => !prevShowUserBar);
    console.log("boton clickeado");
  };

  const handleNavigateToAdd = () => {
    navigate("/usuario/anuncios");
  };

  return (
    <div style={{ position: "relative" }}>
      <button className="mr-4" onClick={handleUserLoged}>
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
          <li style={{ padding: "0.5rem 0" }}>
            <a href="#">Mensajes</a>
          </li>
          <li style={{ padding: "0.5rem 0" }}>
            <a href="#">Viajes</a>
          </li>
          <li style={{ borderBottom: "1px solid #ccc", padding: "0.5rem 0" }}>
            <a href="#">Favoritos</a>
          </li>
          <li style={{ padding: "0.5rem 0" }}>
            <a href="#" onClick={handleNavigateToAdd}>Administra tu Anuncio</a>
          </li>
          <li style={{ borderBottom: "1px solid #ccc", padding: "0.5rem 0" }}>
            <a href="#" onClick={handleNavigateToAccount}>
              Cuenta
            </a>
          </li>
          <li style={{ padding: "0.5rem 0" }}>
            <a href="#" onClick={handleNavigateToTeam}>Ayuda</a>
          </li>
          <li style={{ padding: "0.5rem 0" }}>
            <a onClick={() => logout({ returnTo: "http://localhost:5173" })}>
              Cerrar Sesión
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserNavLoged;