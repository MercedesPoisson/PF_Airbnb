import { useState } from "react";

const UserBar = () => {
  const [showUserBar, setShowUserBar] = useState(false);

  const handleUserBar = () => {
    setShowUserBar((prevShowUserBar) => !prevShowUserBar);
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
          <li style={{ borderBottom: "1px solid #ccc", padding: "0.5rem 0" }}>
            <a href="#">Iniciá Sesión</a>
          </li>
          <li style={{ borderBottom: "1px solid #ccc", padding: "0.5rem 0" }}>
            <a href="#">Registrate</a>
          </li>
          <li style={{ borderBottom: "1px solid #ccc", padding: "0.5rem 0" }}>
            <a href="#">Publicá tu Propiedad</a>
          </li>
          <li style={{ padding: "0.5rem 0" }}>
            <a href="#">Ayuda</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserBar;