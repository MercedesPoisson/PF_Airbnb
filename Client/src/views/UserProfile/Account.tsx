import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserMenu from "../../components/searchBar/UserMenu";

const Account = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("");

  const handleNavigateToHome = () => {
    navigate("/");
  };

  
  const handleItemClick = (item:string) => {
    setSelectedItem(item);
  };

  return (
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
      <div className="grid grid-cols-3 grid-rows-6 gap-3 w-4/5 mx-auto font-cairo mt-10">
        <div className="row-span-4 rounded-xl p-2 border border-argentina hover:shadow">
          <div className="grid grid-cols-2 w-1/4">
            <div ><i className="fa-solid fa-image-portrait text-9xl text-gray-200 mt-2"></i></div>
            <div className="mt-2 w-72 ml-14 ">
              <p>Nombre y Apellido: Jane Doe</p>
              <p>Ubicación: Palermo, Buenos Aires</p>
              <p>Teléfono:</p>
              <i className="fa-solid fa-circle-plus text-argentina"></i>
             </div>
          </div>
          </div>
        <div className="bg-gray-300 row-span-6 rounded-xl p-2">Favoritos Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem maxime ut nesciunt accusantium. Nihil quo debitis, maxime beatae eos ipsam nostrum similique voluptatibus ab. Corporis aut dolor iusto tenetur sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a quos voluptatibus impedit est consectetur eum, nisi ipsam inventore eos possimus illo, veniam rem unde velit libero sint mollitia aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima a esse delectus quod illum quae nisi odio est quaerat velit, sapiente nostrum nam animi deleniti labore exercitationem voluptatum eius omnis.</div>
        <div className="bg-gray-200 row-span-2 rounded-xl p-2">
          <h1 className=" uppercase font-bold ">Anuncios</h1>
          </div>
        <div className="bg-gray-300 row-span-2 rounded-xl p-2">pagos</div>
        <div className="bg-gray-100 row-span-2 rounded-xl p-2">viajes</div>
        <div className="bg-gray-300 row-span-2 rounded-xl p-2">
          <h1 className=" uppercase font-bold ">mensajes</h1>
          <h3>(no tenes mensajes nuevos)</h3>
          </div>
        </div>
    </div>
  );
};

export default Account;