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
    properties?.filter((property: any) => property.id_user === user.id_user);
  const activeUserProperties = userProperties?.filter((property: any) => property.is_active === true)
  const favorites = useSelector((state: any) => state.favorites);
  const navigate = useNavigate();

  const rents =  user.properties.filter((property: any) => property.rents.length > 0)
    
    
  console.log(rents);
  
    

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

  const handleNavigateToFavoritos = () => {
    navigate("/usuario/favoritos")
  }

  // const handleNavigateToTransacciones = () => {
  //   navigate("/usuario/transacciones")
  // }

  return (
    <div>
      {/* <UserNavBar /> */}

      <div className="flex justify-center mt-20" style={{ zIndex: "0" }}>
        <div className="row-span-2 border hover:border-tercero hover:animate-lightup w-[450px] ml-10 mb-10 cursor-pointer" onClick={handleNavigateToProfile}>
          <h5 className="flex items-center justify-between uppercase font-bold bg-tercero text-white px-2 py-2">
            PERFIL <i className="fa-solid fa-circle-plus text-white"></i>
          </h5>
          <div >
            {/* <div className="relative">
      {user.image ? (
        <img
          src={user.image}
          alt="User Avatar"
          className="text-9xl text-gray-200 mt-2"
        />
      ) : (
        <i className="fa-solid fa-image-portrait text-9xl text-gray-200 mt-2"></i>
      )}
    </div> */}
            <div className="flex flex-col justify-center px-4 overflow-hidden">
              <p>
                Nombre y Apellido: {user.name} {user.surname}
              </p>
              <p>E-mail: {user.email}</p>
              <p>Ubicación: {user.address}</p>
              <p>Teléfono: {user.number}</p>
              <p>Fecha de Nacimiento: {user.date}</p>
              <p>Género: {user.gender}</p>
            </div>
          </div>
        </div>

        <div
          className="row-span-2 border hover:border-tercero hover:animate-lightup w-[450px] ml-10 mb-10 cursor-pointer"
          onClick={handleNavigateToVacaciones}
        >
          <h5 className="flex items-center justify-between uppercase font-bold bg-tercero text-white px-2 py-2 ">
            MIS VIAJES <i className="fa-solid fa-circle-plus text-white"></i>
          </h5>
          <div className="h-40 overflow-hidden">
            {user.Rents &&
              user.Rents.map((rent: any, index: number) => (
                <p key={rent.id}>{`${index + 1
                  }) Me voy de vacaciones desde el ${rent.start_date} hasta el ${rent.end_date
                  }`}</p>
              ))}
          </div>
        </div>

        {
          (favorites.length > 0) && <div className="row-span-2 border hover:border-tercero hover:animate-lightup w-[450px] ml-10 mb-10 cursor-pointer"
            onClick={handleNavigateToFavoritos}>
            <h5 className="flex items-center justify-between uppercase font-bold bg-tercero text-white px-2 py-2">
              MIS FAVORITOS <i className="fa-solid fa-circle-plus text-white"></i>
            </h5>
            <div className="h-40 overflow-hidden">
              {favorites &&
                favorites.map((property: any, index: number) => (
                  <p key={property.id_property}>{`${index + 1}) ${property.Property.title
                    }, ${property.Property.location}`}</p>
                ))}
            </div>
          </div>
        }
      </div>

      <div className="flex justify-center">
        {activeUserProperties.length > 0 &&
          <div className="row-span-2 border hover:border-tercero hover:animate-lightup w-[450px] ml-10 mb-10 cursor-pointer"
            onClick={handleNavigateToAnuncio}
          >
            <h5 className="flex items-center justify-between uppercase font-bold bg-tercero text-white px-2 py-2">
              MIS ANUNCIOS <i className="fa-solid fa-circle-plus text-white"></i>
            </h5>
            <div className="ml-1 overflow-hidden">
              {userProperties &&
                userProperties.map((property: any, index: number) => {
                  if (property.is_active) {
                    return <p key={property.id}>{`${index + 1}) ${property.title}`}</p>;
                  } else {
                    return null;
                  }
                })}
            </div>
          </div>
        }

        {rents.length > 0 && <div className="row-span-2 border hover:border-tercero hover:animate-lightup w-[450px] ml-10 mb-10 cursor-pointer"
        onClick={handleNavigateToReservas}>
          <h5 className="flex items-center justify-between uppercase font-bold bg-tercero text-white px-2 py-2">
            RESERVARON MI PROPIEDAD{" "}
            <i className="fa-solid fa-circle-plus text-white"></i>
          </h5>
          <div className="h-40 overflow-hidden ">
            {user.properties &&
              user.properties.map((property: any) => {
                if (property.rents && property.rents.length > 0) {
                  return property.rents.map((rent: any, index: number) => (
                    <p key={rent.id}>{`${index + 1}) Reservada desde el ${rent.start_date
                    } hasta el ${rent.end_date}`}</p>
                    ));
                  }
                  return null;
                })}
          </div>
        </div>
              }

        {/* <div className="row-span-2 border hover:border-tercero hover:animate-lightup w-[450px] ml-10 mb-10 cursor-pointer" onClick={handleNavigateToTransacciones}>
          <h5 className="flex items-center justify-between uppercase font-bold bg-tercero text-white px-2 py-2">
            TRANSACCIONES{" "}
            <i className="fa-solid fa-circle-plus text-white"></i>
          </h5>
          <div className="h-40  overflow-hidden flex items-center justify-center">
            Tenés movimientos para revisar
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Account;