import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserMenu from "../../components/searchBar/UserMenu";

const UserNavBar = () => {
    const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("");

  const handleNavigateToHome = () => {
    navigate("/");
  };

  
  const handleItemClick = (item:string) => {
    setSelectedItem(item);
  };
    return(
        <div>
            <div className="sticky top-0">
        <div className="grid grid-cols-3 gap-3 h-16 mb-1 bg-white">
          <div className="col-span-1 flex items-center justify-start">
            <div
              className="flex items-center cursor-pointer"
              onClick={handleNavigateToHome}
            >
              <i className="fa fa-sun text-argentina ml-4 text-2xl"></i>
              <span className="ml-1 text-argentina font-comfortaa text-lg">
                argentina
              </span>
            </div>
          </div>
          <div className="col-span-1 flex items-center font-cairo ">
            <ul className="flex gap-6">
            <li
                className={`cursor-pointer ${
                  selectedItem === "perfil"
                    ? "border-b-2 border-red-500"
                    : "hover:border-b-2 hover:border-red-500"
                }`}
                onClick={() => handleItemClick("perfil")}
              >
                <a>Perfil</a>
              </li>
              <li
                className={`cursor-pointer ${
                  selectedItem === "perfil"
                    ? "border-b-2 border-red-500"
                    : "hover:border-b-2 hover:border-red-500"
                }`}
                onClick={() => handleItemClick("perfil")}
              >
                <a>Mis Viajes</a>
              </li>
              <li
                className={`cursor-pointer ${
                  selectedItem === "perfil"
                    ? "border-b-2 border-red-500"
                    : "hover:border-b-2 hover:border-red-500"
                }`}
                onClick={() => handleItemClick("perfil")}
              >
                <a>Favoritos</a>
              </li>
              <li
                className={`cursor-pointer ${
                  selectedItem === "perfil"
                    ? "border-b-2 border-red-500"
                    : "hover:border-b-2 hover:border-red-500"
                }`}
                onClick={() => handleItemClick("perfil")}
              >
                <a>Mis Anuncios</a>
              </li>
              <li
                className={`cursor-pointer ${
                  selectedItem === "perfil"
                    ? "border-b-2 border-red-500"
                    : "hover:border-b-2 hover:border-red-500"
                }`}
                onClick={() => handleItemClick("perfil")}
              >
                <a>Pagos y Cobros</a>
              </li>
              <li
                className={`cursor-pointer ${
                  selectedItem === "perfil"
                    ? "border-b-2 border-red-500"
                    : "hover:border-b-2 hover:border-red-500"
                }`}
                onClick={() => handleItemClick("perfil")}
              >
                <a>Mensajes</a>
              </li>
            </ul>
           
          </div>
          <div className="col-span-1 font-cairo-play flex items-center justify-end mr-10">
            <button className="mr-4">
              <UserMenu />
            </button>
            {/* <button className="border border-argentina rounded p-1 w-32">
              Guardar y Salir
            </button> */}
          </div>
        </div>
      </div>

        </div>
    )
}
export default UserNavBar