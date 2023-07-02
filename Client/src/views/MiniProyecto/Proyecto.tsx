import Stack from "./Stack";
import Glaciares from "./glaciares.jpg";
import Norte from "./norte.jpg";
import Salinas from "./salinas.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Proyecto = () => {
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(false);
    const textToRead = "Bienvenidos a Aire benebe. Una aplicación pensada para conectar dueños de propiedades a lo largo de Argentina con personas que desean alojarse en distintos puntos del país con el objetivo de viajar sintiéndose como en casa. Con unos pocos clicks podrán encontrar el alojamiento perfecto para su siguiente estadía, reservarla, abonarla y comunicarse con el propietario en caso de necesitarlo. Al finalizar su estadía tendrán la posibilidad de brindar su opinión para que otros usuarios puedan tener una referencia al momento de decidirse por una propiedad. Los propietarios podrán fácilmente publicar sus propiedades, gestionando las reservas, la disponibilidad y los pagos. Asimismo, tendrán la posibilidad de realizar modificaciones sobre la información publicada. Atender las consultas de los inquilinos y reportar opiniones fuera de lugar. Una de sus grandes fortalezas, es la de realizar transacciones en nuestra moneda local. De esta manera tanto el huésped como el propietario saben exactamente cuál es el monto que se va a debitar de la transacción y cuál es el pago que van a recibir.";
    const [showIcons, setShowIcons] = useState(false);

    const handleStackClick = () => {
    setShowIcons(!showIcons);
    };

    const handlePlay = () => {
        if (!isPlaying && textToRead) {
          setIsPlaying(true);
          const utterance = new SpeechSynthesisUtterance(textToRead);
          utterance.rate= 0.8;
          const voices = speechSynthesis.getVoices();
            const voice = voices.find((v) => v.name === 'Nombre de la voz'); // Reemplaza 'Nombre de la voz' por el nombre de la voz que deseas utilizar
            utterance.voice = voice; // Establecer la voz seleccionada
          utterance.onend = () => {
            setIsPlaying(false);
          };
          speechSynthesis.speak(utterance);
        }
      };

  return (
    <div className="flex flex-col items-center h-screen bg-dark_purple font-Poppins tracking-[5px]">
    <div className="relative w-full max-w-lg">
        <div className="absolute top-28 -left-36 w-80 h-80 bg-tercero rounded-full filter blur-2xl opacity-50 animate-blob" ></div>
        <div className="absolute top-28 -right-14 w-80 h-80 bg-tercero rounded-fullfilter blur-2xl opacity-50 animate-blob animation-delay-2000 "></div>
        <div className="absolute top-28 left-36  w-80 h-80 bg-btn_primary rounded-full  filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>
    </div>
    <div className="flex gap-4 cursor-pointer mt-40">
      <button onClick={handlePlay} disabled={isPlaying}>
        <div className="relative">
          <img src={Glaciares} alt="Glaciares" className="w-72 h-52 object-cover shadow-md rounded-xl" />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity rounded-xl">
            <p className="text-xl font-bold uppercase text-gray-600">La Aplicacion</p>
          </div>
        </div>
            </button>
          
        <div className="relative" onClick={handleStackClick} >
          <img src={Norte} alt="Norte" className="w-72 h-52 object-cover shadow-md rounded-xl" />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity rounded-xl">
            <p className="text-xl font-bold uppercase text-gray-600">Stack</p>
          </div>
        </div>
        <div className="relative" onClick={() => navigate('/ayuda')}>
          <img src={Salinas} alt="Salinas" className="w-72 h-52 object-cover shadow-md rounded-xl" />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity rounded-xl">
            <p className="text-xl font-bold uppercase text-gray-600">Team</p>
          </div>
        </div>
      </div>
      <div className="flex font-Poppins uppercase tracking-[5px] bg-dark_purple text-4xl text-argentina px-[35px] py-[20px] h-[80px] shadow-xl mt-4">
        <p className="font-bold">Aire</p>
        <div className="grid ml-[8px] animate scroll overflow-hidden">
          <span className="animate-scroll font-bold">bnb</span>
          <span className="animate-scroll">de mar</span>
          <span className="animate-scroll">de montaña</span>
          <span className="animate-scroll">de vacaciones</span>
          <span className="animate-scroll font-bold">bnb</span>
        </div>
        <i className="fa-solid fa-arrow-right text-btn-primary cursor-pointer" onClick={() => navigate("/")}></i>
      </div>
      <div>
      {showIcons && (
          <div className="stack-icons absolute flex justify-center items-center left-1/2 transform -translate-x-1/2 mt-10">
            <Stack />
          </div>
        )}
      </div>
    </div>
  );
};

export default Proyecto;

// TbBrandTypescript
// TbBrandVite
//SiTailwindcss
//FaReact
//SiPostgresql
//SiSequelize
// FaNodeJs
//SiAuth0



