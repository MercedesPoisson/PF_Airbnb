import Stack from "./Stack";
import Glaciares from "./glaciares.jpg";
import Norte from "./norte.jpg";
import Salinas from "./salinas.jpg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Proyecto = () => {
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
    const textToRead =
      "Bienvenidos a Aire benebe. Una aplicación pensada para conectar dueños de propiedades a lo largo de Argentina con personas que desean alojarse en distintos puntos del país con el objetivo de viajar sintiéndose como en casa. Con unos pocos clicks podrán encontrar el alojamiento perfecto para su siguiente estadía, reservarla, abonarla y comunicarse con el propietario en caso de necesitarlo. Al finalizar su estadía tendrán la posibilidad de brindar su opinión para que otros usuarios puedan tener una referencia al momento de decidirse por una propiedad. Los propietarios podrán fácilmente publicar sus propiedades, gestionando las reservas, la disponibilidad y los pagos. Asimismo, tendrán la posibilidad de realizar modificaciones sobre la información publicada. Atender las consultas de los inquilinos y reportar opiniones fuera de lugar. Una de sus grandes fortalezas, es la de realizar transacciones en nuestra moneda local. De esta manera tanto el huésped como el propietario saben exactamente cuál es el monto que se va a debitar de la transacción y cuál es el pago que van a recibir.";
    const [showIcons, setShowIcons] = useState(false);
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const [currentSubtitle, setCurrentSubtitle] = useState<string>('');
  
    useEffect(() => {
      const handleVoicesChanged = () => {
        const availableVoices = speechSynthesis.getVoices();
        console.log("Available Voices:", availableVoices);
        if (availableVoices.length > 0) {
          setVoices(availableVoices);
        }
      };
  
      speechSynthesis.addEventListener("voiceschanged", handleVoicesChanged);
  
      return () => {
        speechSynthesis.removeEventListener("voiceschanged", handleVoicesChanged);
      };
    }, []);
  
    const handleStackClick = () => {
      setShowIcons(!showIcons);
    };
  
    const handlePlay = () => {
        if (!isPlaying) {
          setIsPlaying(true);
          setCurrentSubtitleIndex(0);
          setCurrentSubtitle('');
      
          const sentences = textToRead.match(/[^.!?]+[.!?]+/g);
          if (!sentences) {
            // Si no se encontraron oraciones, muestra un mensaje de error o realiza la acción correspondiente.
            console.error("No se encontraron oraciones en el texto.");
            setIsPlaying(false);
            return;
          }
      
          const totalSentences = sentences.length;
      
          let currentSentenceIndex = 0;
      
          const utterance = new SpeechSynthesisUtterance(sentences[currentSentenceIndex]);
          utterance.addEventListener("boundary", handleBoundary);
          utterance.onend = () => {
            currentSentenceIndex++;
            if (currentSentenceIndex === totalSentences) {
              setIsPlaying(false);
            } else {
              utterance.text = sentences[currentSentenceIndex];
              speechSynthesis.speak(utterance);
            }
          };
      
          speechSynthesis.speak(utterance);
        } else {
          setIsPlaying(false);
          speechSynthesis.cancel();
        }
      };
  
    const handleBoundary = (event) => {
      const currentSentence = event.target.text.substring(0, event.charIndex + event.charLength);
      setCurrentSubtitle(currentSentence);
      setCurrentSubtitleIndex((prevIndex) => prevIndex + 1);
    };
  

  return (
    <div className="flex flex-col items-center h-screen bg-dark_purple font-Poppins tracking-[5px]">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-28 -left-36 w-80 h-80 bg-tercero rounded-full filter blur-2xl opacity-50 animate-blob"></div>
        <div className="absolute top-28 -right-14 w-80 h-80 bg-tercero rounded-full filter blur-2xl opacity-50 animate-blob animation-delay-2000 "></div>
        <div className="absolute top-28 left-36  w-80 h-80 bg-btn_primary rounded-full filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      <div className="flex gap-4 cursor-pointer mt-40">
        <button onClick={handlePlay}>
          <div className="relative">
            <img
              src={Glaciares}
              alt="Glaciares"
              className="w-72 h-52 object-cover shadow-md rounded-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity rounded-xl">
              <p className="text-xl font-bold uppercase text-gray-600">
                La Aplicacion
              </p>
            </div>
          </div>
        </button>

        <div className="relative" onClick={handleStackClick}>
          <img
            src={Norte}
            alt="Norte"
            className="w-72 h-52 object-cover shadow-md rounded-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity rounded-xl">
            <p className="text-xl font-bold uppercase text-gray-600">Stack</p>
          </div>
        </div>
        <div className="relative" onClick={() => navigate("/ayuda")}>
          <img
            src={Salinas}
            alt="Salinas"
            className="w-72 h-52 object-cover shadow-md rounded-xl"
          />
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
        <i
          className="fa-solid fa-arrow-right text-btn-primary cursor-pointer"
          onClick={() => navigate("/")}
        ></i>
      </div>
      <div>
        {showIcons && (
          <div className="stack-icons absolute flex justify-center items-center left-1/2 transform -translate-x-1/2 mt-10">
            <Stack />
          </div>
        )}
      </div>
      <div className="mt-10 subtitles justify-center items-center left-1/2 text-argentina text-lg w-full max-w-5xl mx-auto">
      {isPlaying && (
          <p>{currentSubtitle}</p>
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
