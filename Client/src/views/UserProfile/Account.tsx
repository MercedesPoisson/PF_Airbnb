import { useNavigate } from "react-router-dom";
import UserNavLoged from "../../components/searchBar/UserNavLoged";

const Account = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="sticky top-0">
        <div className="grid grid-cols-2 gap-3 h-16 mb-1 bg-white">
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
          <div className="col-span-1 font-cairo-play flex items-center justify-end mr-10">
            <button className="mr-4">
              <UserNavLoged />
            </button>
            {/* <button className="border border-argentina rounded p-1 w-32">
              Guardar y Salir
            </button> */}
          </div>
        </div>
      </div>
      <div>Aca van las cards de perfil</div>
    </div>
  );
};

export default Account;