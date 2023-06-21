import UserNavBar from "./UserNavBar";
import { useSelector } from "react-redux";

const Account = () => {
  const user = useSelector((state:any) => state.user);
  const properties = useSelector((state:any) => state.properties)
  const userProperties = properties && properties.filter((property: any) => property.id_user === user.id_user);

  return (
    <div>
      <UserNavBar />
      <div className="grid grid-cols-3 grid-rows-6 gap-3 w-4/5 mx-auto font-cairo mt-10">
        <div className="row-span-4 rounded-xl p-2 border hover:border-argentina hover:animate-lightup">
          <div className="grid grid-cols-2 w-1/4">
            <div>
              {user.image ? (
                <img src={user.image} alt="User Avatar" className="text-9xl text-gray-200 mt-2" />
              ) : (
                <i className="fa-solid fa-image-portrait text-9xl text-gray-200 mt-2"></i>
              )}
            </div>
            <div className="mt-2 w-72 ml-14">
              <p>Nombre y Apellido: {user.name} {user.surname}</p>
              <p>E-mail: {user.email}</p>
              <p>Ubicación: {user.location}</p>
              <p>Teléfono: {user.number}</p>
              <p>Fecha de Nacimiento: {user.Date}</p>
              <p>Género: {user.gender}</p>
              <h5>PERFIL <i className="fa-solid fa-circle-plus text-argentina"></i></h5>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 row-span-6 rounded-xl p-2">Favoritos Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem maxime ut nesciunt accusantium. Nihil quo debitis, maxime beatae eos ipsam nostrum similique voluptatibus ab. Corporis aut dolor iusto tenetur sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a quos voluptatibus impedit est consectetur eum, nisi ipsam inventore eos possimus illo, veniam rem unde velit libero sint mollitia aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima a esse delectus quod illum quae nisi odio est quaerat velit, sapiente nostrum nam animi deleniti labore exercitationem voluptatum eius omnis.</div>
        <div className="border hover:border-argentina row-span-2 rounded-xl p-2">
          <h1 className="uppercase font-bold">Anuncios <i className="fa-solid fa-pen-to-square text-argentina"></i></h1>
          {userProperties && userProperties.map((properties:any, index:number) => (
          <p key={properties.id}>{`${index+1} ${properties.title}`}</p>
        ))}
        </div>
        <div className="bg-gray-300 row-span-2 rounded-xl p-2">pagos</div>
        <div className="bg-gray-100 row-span-2 rounded-xl p-2">viajes</div>
        <div className="bg-gray-300 row-span-2 rounded-xl p-2">
          <h1 className="uppercase font-bold">mensajes</h1>
          <h3>(no tenes mensajes nuevos)</h3>
        </div>
      </div>
    </div>
  );
};

export default Account;