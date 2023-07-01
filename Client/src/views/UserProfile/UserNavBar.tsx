//Aca tengo la barra de navegación para el perfil del usuario y se renderiza el icono usuario de UserMenu para ver quien se tiene que desplegar
// menu logueado o sin loguear

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserMenu from "../../components/searchBar/UserMenu";

const userNavBar = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("");

  const handleNavigateToHome = () => {
    navigate("/");
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <header className="w-full flex justify-between items-center px-4 md:px-12 h-20 bg-white z-99">
        <a href="#" onClick={handleNavigateToHome}>
          <i className="fa fa-sun text-argentina ml-4 text-2xl"></i>
          <span className="text-argentina font-comfortaa text-xl">airebnb</span>
        </a>
        <nav className="font-cairo text-sm">
          <button className="md:hidden">
            <i className="fa-solid fa-bars h-8 w-8 text-xl"></i>
          </button>
          <ul className="
            fixed 
            left-0 
            right-0 
            min-h-screen 
            space-y-4 
            p-4
            font-comfortaa
            tarnsform 
            translate-x-full 
            md:relative 
            md:flex 
            md:min-h-0 
            md:space-y-0
            md:space-x-6
            md:p-0
            md:translate-x-0
          ">
            <li
              className={`cursor-pointer ${
                selectedItem === "perfil"
                  ? "border-b-2 border-argentina"
                  : "hover:border-b-2 hover:border-argentina"
              }`}
              onClick={() => {
                handleItemClick("perfil");
                navigate("/usuario/profile");
              }}
            >
              <a href="#">Perfil</a>
            </li>

            <li
              className={`cursor-pointer ${
                selectedItem === "Mis Viajes"
                  ? "border-b-2 border-argentina"
                  : "hover:border-b-2 hover:border-argentina"
              }`}
              onClick={() => {
                handleItemClick("Mis Viajes");
                navigate("/usuario/viajes")
              }}
            >
              <a href="#">Mis Viajes</a>
            </li>

            <li
              className={`cursor-pointer ${
                selectedItem === "Favoritos"
                  ? "border-b-2 border-argentina"
                  : "hover:border-b-2 hover:border-argentina"
              }`}
              onClick={() => {
                handleItemClick("Favoritos");
                navigate("/usuario/favoritos");
              }}
            >
              <a href="#">Favoritos</a>
            </li>

            <li
              className={`cursor-pointer ${
                selectedItem === "Mis Anuncios"
                  ? "border-b-2 border-argentina"
                  : "hover:border-b-2 hover:border-argentina"
              }`}
              onClick={() => {
                handleItemClick("Mis Anuncios");
                navigate("/usuario/anuncios");
              }}
            >
              <a href="#">Mis Anuncios</a>
            </li>

            <li
              className={`cursor-pointer ${
                selectedItem === "Reservas"
                  ? "border-b-2 border-argentina"
                  : "hover:border-b-2 hover:border-argentina"
              }`}
              onClick={() => {
                handleItemClick("Reservas");
                navigate("/usuario/reservas");
              }}
            >
              <a href="#">Reservas</a>
            </li>

            <li
              className={`cursor-pointer ${
                selectedItem === "Transacciones"
                  ? "border-b-2 border-argentina"
                  : "hover:border-b-2 hover:border-argentina"
              }`}
              onClick={() => handleItemClick("Transacciones")}
            >
              <a href="#">Transacciones</a>
            </li>

            <li
              className={`cursor-pointer ${
                selectedItem === "Mensajes"
                  ? "border-b-2 border-argentina"
                  : "hover:border-b-2 hover:border-argentina"
              }`}
              onClick={() => {
                handleItemClick("Mensajes")
                navigate('/usuario/mensajes')}}
            >
              <a href="#">Mensajes</a>
            </li>

            <li
              className={`cursor-pointer ${
                selectedItem === "Mi Cuenta"
                  ? "border-b-2 border-argentina"
                  : "hover:border-b-2 hover:border-argentina"
              }`}
              onClick={() => 
                {handleItemClick("Mi Cuenta"),
                navigate("/usuario")
            }}
            >
              <a href="#">Mi Cuenta</a>
            </li>

            <li>
              <UserMenu />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default userNavBar;