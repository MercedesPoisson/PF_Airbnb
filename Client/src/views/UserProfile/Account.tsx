// import UserNavBar from "./UserNavBar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Account = () => {
  const user = useSelector((state: any) => state.user);
  const [properties, setProperties] = useState([]);
  // const properties = useSelector((state:any) => state.properties)
  const userProperties =
    properties &&
    properties.filter((property: any) => property.id_user === user.id_user);
  const favorites = useSelector((state: any) => state.favorites);
  const navigate = useNavigate();

  const reservedProperties =
    properties &&
    properties.filter((property: any) => property.id_user === user.id_user);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await axios.get("https://airebnb.onrender.com/property/all"); // Ajusta la URL de la solicitud según corresponda
        setProperties(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProperties();
  }, []);

  const handleNavigateToProfile = () => {
    navigate("/usuario/profile");
  };

  const handleNavigateToAnuncio = () => {
    navigate("/usuario/anuncios");
  };

  const handleNavigateToReservas = () => {
    navigate("/usuario/reservas");
  };

  const handleNavigateToVacaciones = () => {
    navigate("/usuario/viajes");
  };

  return (
    <div>
      {/* <UserNavBar /> */}

      <div className="flex justify-center mt-20" style={{ zIndex: "0" }}>
        <div className="row-span-2 border hover:border-tercero hover:animate-lightup w-[450px] ml-10 mb-10">
          <h5 className="flex items-center justify-between uppercase font-bold bg-tercero text-white px-2 py-2">
            PERFIL <i className="fa-solid fa-circle-plus text-white"></i>
          </h5>
          <div className="grid grid-cols-2 w-1/4">
            <div>
              {user.image ? (
                <img
                  src={user.image}
                  alt="User Avatar"
                  className="text-9xl text-gray-200 mt-2"
                />
              ) : (
                <i className="fa-solid fa-image-portrait text-9xl text-gray-200 mt-2"></i>
              )}
            </div>
            <div
              className="w-72 ml-14 cursor-pointer h-40 overflow-hidden"
              onClick={handleNavigateToProfile}
            >
              <p>
                Nombre y Apellido: {user.name} {user.surname}
              </p>
              <p>E-mail: {user.email}</p>
              <p>Ubicación: {user.location}</p>
              <p>Teléfono: {user.number}</p>
              <p>Fecha de Nacimiento: {user.Date}</p>
              <p>Género: {user.gender}</p>
            </div>
          </div>
        </div>

        <div
          className="row-span-2 border hover:border-tercero hover:animate-lightup w-[450px] ml-10 mb-10"
          onClick={handleNavigateToVacaciones}
        >
          <h5 className="flex items-center justify-between uppercase font-bold bg-tercero text-white px-2 py-2">
            MIS VIAJES <i className="fa-solid fa-circle-plus text-white"></i>
          </h5>
          <div className="h-40 overflow-hidden">
            {user.Rents &&
              user.Rents.map((rent: any, index: number) => (
                <p key={rent.id}>{`${
                  index + 1
                }) Me voy de vacaciones desde el ${rent.start_date} hasta el ${
                  rent.end_date
                }`}</p>
              ))}
          </div>
        </div>

        <div className="row-span-2 border hover:border-tercero hover:animate-lightup w-[450px] ml-10 mb-10">
          <h5 className="flex items-center justify-between uppercase font-bold bg-tercero text-white px-2 py-2">
            MIS FAVORITOS <i className="fa-solid fa-circle-plus text-white"></i>
          </h5>
          <div className="h-40 overflow-hidden">
            {favorites &&
              favorites.map((property: any, index: number) => (
                <p key={property.id_property}>{`${index + 1}) ${
                  property.Property.title
                }, ${property.Property.location}`}</p>
              ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div
          className="row-span-2 border hover:border-tercero hover:animate-lightup w-[450px] ml-10 mb-10"
          onClick={handleNavigateToAnuncio}
        >
          <h5 className="flex items-center justify-between uppercase font-bold bg-tercero text-white px-2 py-2">
            MIS ANUNCIOS <i className="fa-solid fa-circle-plus text-white"></i>
          </h5>
          <div className="ml-1 overflow-hidden">
            {userProperties &&
              userProperties.map((properties: any, index: number) => (
                <p key={properties.id}>{`${index + 1}) ${properties.title}`}</p>
              ))}
          </div>
        </div>

        <div
          className="row-span-2 border hover:border-tercero hover:animate-lightup w-[450px] ml-10 mb-10"
          onClick={handleNavigateToReservas}
        >
          <h5 className="flex items-center justify-between uppercase font-bold bg-tercero text-white px-2 py-2">
            RESERVARON MI PROPIEDAD{" "}
            <i className="fa-solid fa-circle-plus text-white"></i>
          </h5>
          <div className="h-40 overflow-hidden">
            {user.properties &&
              user.properties.map((property: any) => {
                if (property.rents && property.rents.length > 0) {
                  return property.rents.map((rent: any, index: number) => (
                    <p key={rent.id}>{`${index + 1}) Reservada desde el ${
                      rent.start_date
                    } hasta el ${rent.end_date}`}</p>
                  ));
                }
                return null;
              })}
          </div>
        </div>

        <div className="row-span-2 border hover:border-tercero hover:animate-lightup w-[450px] ml-10 mb-10">
          <h5 className="flex items-center justify-between uppercase font-bold bg-tercero text-white px-2 py-2">
            PAGOS Y COBROS{" "}
            <i className="fa-solid fa-circle-plus text-white"></i>
          </h5>
          <div className="h-40  overflow-hidden">
            Aca va la logica para traer los pagos realizados y los cobros
            recibidos
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

{
  /* <div className="grid grid-cols-3 grid-rows-6 gap-3 w-4/5 mx-auto font-cairo mt-20">
        <div className="row-span-2 rounded-xl p-2 border hover:border-argentina hover:animate-lightup">
          <div className="grid grid-cols-2 w-1/4">
            <div>
              {user.image ? (
                <img src={user.image} alt="User Avatar" className="text-9xl text-gray-200 mt-2" />
              ) : (
                <i className="fa-solid fa-image-portrait text-9xl text-gray-200 mt-2"></i>
              )}
            </div>
            <div className="mt-2 w-72 ml-14 cursor-pointer" onClick={handleNavigateToProfile}>
              <p>
                Nombre y Apellido: {user.name} {user.surname}
              </p>
              <p>E-mail: {user.email}</p>
              <p>Ubicación: {user.location}</p>
              <p>Teléfono: {user.number}</p>
              <p>Fecha de Nacimiento: {user.Date}</p>
              <p>Género: {user.gender}</p>
              <h5 className="uppercase font-bold">
                PERFIL <i className="fa-solid fa-circle-plus text-argentina"></i>
              </h5>
            </div>
            
          </div>
        </div>
        <div className="bg-gray-300 row-span-5 rounded-xl p-2">Favoritos Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem maxime ut nesciunt accusantium. Nihil quo debitis, maxime beatae eos ipsam nostrum similique voluptatibus ab. Corporis aut dolor iusto tenetur sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a quos voluptatibus impedit est consectetur eum, nisi ipsam inventore eos possimus illo, veniam rem unde velit libero sint mollitia aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima a esse delectus quod illum quae nisi odio est quaerat velit, sapiente nostrum nam animi deleniti labore exercitationem voluptatum eius omnis.</div>
        <div className="border hover:border-argentina row-span-2 rounded-xl p-2 cursor-pointer" onClick={handleNavigateToAnuncio}>
          <h1 className="uppercase font-bold">
            Anuncios <i className="fa-solid fa-pen-to-square text-argentina"></i>
          </h1>
          {userProperties && userProperties.map((properties:any, index:number) => (
          <p key={properties.id}>{`${index+1}) ${properties.title}`}</p>
        ))}
        </div >
        <div className="border hover:border-argentina row-span-2 rounded-xl p-2 cursor-pointer" onClick={handleNavigateToVacaciones}>
          <h1 className="uppercase font-bold">Mis viajes <i className="fa-solid fa-plane-departure text-argentina"></i>
            </h1>
            {user.Rents && user.Rents.map((rent:any, index: number) => (
              <p key={rent.id}>{`${index+1}) Me voy de vacaciones desde el ${rent.start_date} hasta el ${rent.end_date}`}</p>
            ))}
            </div>

        <div className="bg-gray-300 row-span-1 rounded-xl p-2">Pagos y Cobros</div>

        <div className="border hover:border-argentina row-span-2 rounded-xl p-2 cursor-pointer" onClick={handleNavigateToReservas}>
  <h1 className="uppercase font-bold">Reservaron mi Propiedad <i className="fa-regular fa-calendar-check text-argentina"></i></h1>
  {userProperties && userProperties.map((property: any) => (
    property.Rents && property.Rents.map((rent: any, index: number) => (
      <p key={rent.id}>{`${index+1}) Reservada desde el ${rent.start_date} hasta el ${rent.end_date}`}</p>
    ))
  ))}
</div>
        <div className="bg-gray-300 row-span-1 rounded-xl p-2">
          <h1 className="uppercase font-bold">mensajes</h1>
          <h3>(no tenes mensajes nuevos)</h3>
        </div>
      </div> */
}
