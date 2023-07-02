import { useState } from "react";

const TextToSpeech = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const textToRead = "¡Hola! Soy una IA y estoy leyendo este texto.";

  const handlePlay = () => {
    if (!isPlaying && textToRead) {
      setIsPlaying(true);
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.onend = () => {
        setIsPlaying(false);
      };
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div>
      <button onClick={handlePlay} disabled={isPlaying}>
        {isPlaying ? "Playing..." : "Play"}
      </button>
    </div>
  );
};

export default TextToSpeech;