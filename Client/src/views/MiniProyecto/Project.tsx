import Norte from "./norte.jpg";
import Salinas from "./salinas.jpg";
import Perito from "./perito.jpg";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-gray-100 h-2/6 flex items-center">
        <div className="text-gray-400 opacity-10 text-9xl p-4 font-Rubik font-extrabold ml-10 mt-44">
          airebnb
        </div>
        <div className="flex flex-1 justify-end relative mt-[550px] mr-40 gap-2">
          <div className="w-2/5 flex items-center justify-center">
            <img src={Norte} alt="Imagen 1" className="h-full object-cover" />
          </div>
          <div className="w-1/4 flex flex-col justify-between bg-dark_purple gap-2">
            <div className="flex-1 flex items-center justify-center">
              <img
                src={Salinas}
                alt="Imagen 2"
                className="h-full object-cover"
              />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={Perito}
                alt="Imagen 3"
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-dark_purple flex ">
        <div className="animation-area flex font-Poppins uppercase tracking-[5px] bg-dark_purple text-4xl text-argentina px-[35px] py-[20px] h-[80px] shadow-xl ml-10 mt-[10px]">
          <p className="font-bold">Aire</p>
          <div className="grid ml-[8px] animate scroll overflow-hidden">
            <span className="animate-scroll font-bold">bnb</span>
            <span className="animate-scroll">de mar</span>
            <span className="animate-scroll">de montaña</span>
            <span className="animate-scroll">de vacaciones</span>
            <span className="animate-scroll font-bold">bnb</span>
          </div>
          <i
            className="fa-solid fa-arrow-right text-btn-primary cursor-pointer"
            onClick={() => navigate("/")}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Project;