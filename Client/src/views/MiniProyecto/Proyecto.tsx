import Glaciares from "./glaciares.jpg";
import Norte from "./norte.jpg";
import Salinas from "./salinas.jpg";
import { useState } from "react";

const Proyecto = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const textToRead = "Bienvenidos a Aire benebe. Una aplicación pensada para conectar dueños de propiedades a lo largo de Argentina con personas que desean alojarse en distintos puntos del país con el objetivo de viajar sintiéndose como en casa. Con unos pocos clicks podrán encontrar el alojamiento perfecto para su siguiente estadía, reservarla, abonarla y comunicarse con el propietario en caso de necesitarlo. Al finalizar su estadía tendrán la posibilidad de brindar su opinión para que otros usuarios puedan tener una referencia al momento de decidirse por una propiedad. Los propietarios podrán fácilmente publicar sus propiedades, gestionando las reservas, la disponibilidad y los pagos. Asimismo, tendrán la posibilidad de realizar modificaciones sobre la información publicada. Atender las consultas de los inquilinos y reportar opiniones fuera de lugar. Una de sus grandes fortalezas, es la de realizar transacciones en nuestra moneda local. De esta manera tanto el huésped como el propietario saben exactamente cuál es el monto que se va a debitar de la transacción y cuál es el pago que van a recibir.";

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
    <div className="flex flex-col justify-center items-center h-screen bg-white font-Poppins tracking-[5px]">
    <div className="flex gap-4">
      <button onClick={handlePlay} disabled={isPlaying}>
        <div className="relative">
          <img src={Glaciares} alt="Glaciares" className="w-72 h-48 object-cover shadow-md" />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity">
            <p className="text-xl font-bold uppercase text-gray-600">La Aplicacion</p>
          </div>
        </div>
            </button>
          
        <div className="relative">
          <img src={Norte} alt="Norte" className="w-72 h-48 object-cover shadow-md" />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity">
            <p className="text-xl font-bold uppercase text-gray-600">Stack</p>
          </div>
        </div>
        <div className="relative">
          <img src={Salinas} alt="Salinas" className="w-72 h-48 object-cover shadow-md" />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity">
            <p className="text-xl font-bold uppercase text-gray-600">Team</p>
          </div>
        </div>
      </div>
      <div className="flex font-Poppins uppercase tracking-[5px] bg-white text-4xl text-heding-color px-[35px] py-[20px] h-[80px] shadow-xl mt-4">
        <p className="font-bold">Aire</p>
        <div className="grid ml-[8px] animate scroll overflow-hidden">
          <span className="animate-scroll font-bold">bnb</span>
          <span className="animate-scroll">de mar</span>
          <span className="animate-scroll">de montaña</span>
          <span className="animate-scroll">de vacaciones</span>
          <span className="animate-scroll font-bold">bnb</span>
        </div>
        <i className="fa-solid fa-arrow-right text-argentina"></i>
      </div>
    </div>
  );
};

export default Proyecto;