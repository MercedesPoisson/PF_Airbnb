import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Back from "./back.png";
import Stack from "./Stack";

const Project = () => {
  const navigate = useNavigate();
  const [isStackClicked, setIsStackClicked] = useState(false); // Estado para controlar si se hizo clic en STACK

  const words = [
    "viajar",
    "conectar",
    "airebnb",
    "alquilar",
    "vacaciones",
    "disfrutar",
    "casa",
    "departamento",
  ];

  const handleNavigateToHome = () => {
    navigate("/");
  };

  const handleNavigateToTeam = () => {
    navigate("/ayuda");
  };

  const handleStackClick = () => {
    setIsStackClicked(!isStackClicked);
  };

  // useEffect(() => {
  //   const wordElements = document.querySelectorAll(".word");
  //   let delay = 0;

  //   wordElements.forEach((wordElement, index) => {
  //     setTimeout(() => {
  //       wordElement.classList.remove("invisible");
  //       wordElement.classList.add("animate-fadeIn");
  //       setTimeout(() => {
  //         wordElement.classList.remove("animate-fadeIn");
  //         wordElement.classList.add("animate-fadeOut");
  //         setTimeout(() => {
  //           wordElement.classList.remove("animate-fadeOut");
  //           wordElement.classList.add("invisible");
  //         }, 1000);
  //       }, 2000);
  //     }, delay);
  //     delay += 1000;
  //   });
  // }, []);


  return (
    <div>
      <div className="h-screen flex flex-col">
        <div className="bg-gray-100 h-2/6 flex items-center font-Poppins font-bold text-dark_purple">
          <div className="text-gray-400 opacity-10 text-9xl p-4 font-Rubik font-extrabold ml-10 mt-44">
            airebnb
          </div>
          <div>
            <ul className="fixed left-[1200px] mt-28 flex justify-between gap-10">
              <li
                className="cursor-pointer hover:text-argentina"
                onClick={handleNavigateToHome}
              >
                HOME
              </li>
              <li
                className="cursor-pointer hover:text-argentina"
                onClick={handleNavigateToTeam}
              >
                TEAM
              </li>
              <li
                className="cursor-pointer hover:text-argentina"
                onClick={handleStackClick}
              >
                STACK
              </li>
            </ul>
          </div>
        </div>
        <div
          className="flex-1 bg-dark_purple flex"
          style={{ backgroundImage: `url(${Back})` }}
        >
          <div className="animation-area flex font-Poppins uppercase tracking-[5px] bg-transparent text-4xl text-argentina px-[35px] py-[20px] h-[80px] shadow-xl ml-10 mt-[10px]">
                      
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
          {/* {words.map((word, index) => (
              <span
                key={index}
                className="word invisible text-6xl font-bold animate-fadeIn animate-fadeOut"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${index * 2}s`,
                }}
              >
                {word}
              </span>
            ))} */}

          <div className="flex justify-center items-center mt-auto mb-10">
            <Stack isClicked={isStackClicked} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project