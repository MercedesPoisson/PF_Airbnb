import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Back from "./back.png";
import Stack from "./Stack";

const Project = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [currentSubtitle, setCurrentSubtitle] = useState<string>("");
  const [isStackClicked, setIsStackClicked] = useState(false); // Estado para controlar si se hizo clic en STACK

  const textToRead = "..."; // Tu texto aquí

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
      speechSynthesis.removeEventListener(
        "voiceschanged",
        handleVoicesChanged
      );
    };
  }, []);

  const handlePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      setCurrentSubtitleIndex(0);
      setCurrentSubtitle("");

      const sentences = textToRead.match(/[^.!?]+[.!?]+/g);
      if (!sentences) {
        console.error("No se encontraron oraciones en el texto.");
        setIsPlaying(false);
        return;
      }

      const totalSentences = sentences.length;
      let currentSentenceIndex = 0;

      const utterance = new SpeechSynthesisUtterance(
        sentences[currentSentenceIndex]
      );
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

  const handleNavigateToHome = () => {
    navigate("/");
  };

  const handleNavigateToTeam = () => {
    navigate("/ayuda");
  };

  const handleBoundary = (event) => {
    const currentSentence = event.target.text.substring(
      0,
      event.charIndex + event.charLength
    );
    setCurrentSubtitle(currentSentence);
    setCurrentSubtitleIndex((prevIndex) => prevIndex + 1);
  };

  const handleStackClick = () => {
    setIsStackClicked(!isStackClicked);
  };

  const handlePause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      speechSynthesis.pause();
    }
  };

  return (
    <div>
      <div className="h-screen flex flex-col">
        <div className="bg-gray-100 h-2/6 flex items-center font-Poppins font-bold text-dark_purple">
          <div className="text-gray-400 opacity-10 text-9xl p-4 font-Rubik font-extrabold ml-10 mt-44">
            airebnb
          </div>
          <div>
          <ul className="fixed left-[1200px] mt-28 flex justify-between gap-10">
  <li className="cursor-pointer hover:text-argentina" onClick={handleNavigateToHome}>
    HOME
  </li>
  <li className="cursor-pointer hover:text-argentina" onClick={handleNavigateToTeam}>
    TEAM
  </li>
  <li className="cursor-pointer hover:text-argentina" onClick={handleStackClick}>
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
            {/* <div className="absolute mt-20">
              <div className="ml-2">
                <button onClick={handlePlay}>
                  <i className="fa-regular fa-circle-play text-argentina text-4xl mr-4"></i>
                </button>
                <button onClick={handlePause}>
                  <i className="fa-regular fa-circle-pause text-argentina text-4xl"></i>
                </button>
              </div>
              <div className="text-xs">PLAY Pausa</div>
              <div className="mt-10 subtitles justify-center items-center left-1/2 text-argentina text-lg w-full max-w-4xl mx-auto">
                {isPlaying && <p>{currentSubtitle}</p>}
              </div>
            </div> */}
          </div>
          <div className="flex justify-center items-center mt-auto mb-10">
            <Stack isClicked={isStackClicked} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
