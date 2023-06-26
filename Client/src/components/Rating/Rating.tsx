import { useState } from "react";

const Rating = () => {
  const [ratings, setRatings] = useState({
    limpieza: 0,
    comunicacion: 0,
    precioCalidad: 0,
    veracidad: 0,
  });

  const handleStarClick = (category:any, starIndex: any) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [category]: starIndex,
    }));
  };

  return (
    <div className="font-cairo m-0 items-center justify-center bg-white w-80 mt-4 mr-10">
      <p className="uppercase font-bold text-white bg-segundo py-2 px-3 mb-2">Contanos tu experiencia</p>

      <div id="stars-limpieza" className="relative p-2 text-base items-center">
        <p>Limpieza</p>
        <div className="flex items-center gap-1 text-gray-200 text-base cursor-pointer p-2">
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <i
              key={starIndex}
              className={`fa-solid fa-star${starIndex <= ratings.limpieza ? " text-argentina" : ""}`}
              onClick={() => handleStarClick("limpieza", starIndex)}
            ></i>
          ))}
        </div>
      </div>

      <div className="relative p-2 text-base items-center">
        <p>Comunicación</p>
        <div id="stars-comunicacion" className="flex items-center gap-1 text-gray-200 text-base cursor-pointer p-2">
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <i
              key={starIndex}
              className={`fa-solid fa-star${starIndex <= ratings.comunicacion ? " text-argentina" : ""}`}
              onClick={() => handleStarClick("comunicacion", starIndex)}
            ></i>
          ))}
        </div>
      </div>

      <div className="relative p-2 text-base items-center">
        <p>Precio - Calidad</p>
        <div id="stars-precio-calidad" className="flex items-center gap-1 text-gray-200 text-base cursor-pointer p-2">
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <i
              key={starIndex}
              className={`fa-solid fa-star${starIndex <= ratings.precioCalidad ? " text-argentina" : ""}`}
              onClick={() => handleStarClick("precioCalidad", starIndex)}
            ></i>
          ))}
        </div>
      </div>

      <div className="relative p-2 text-base items-center">
        <p>Veracidad</p>
        <div id="stars-veracidad" className="flex items-center gap-1 text-gray-200 text-base cursor-pointer p-2">
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <i
              key={starIndex}
              className={`fa-solid fa-star${starIndex <= ratings.veracidad ? " text-argentina" : ""}`}
              onClick={() => handleStarClick("veracidad", starIndex)}
            ></i>
          ))}
        </div>
      </div>

      <div className="relative p-2 text-base items-center">
        <p>Opinión:</p>
        <textarea className="w-[290px] h-20 border"></textarea>
      </div>
    </div>
  );
};

export default Rating;

// <i class="fa-solid fa-star"></i>
//<i class="fa-regular fa-star"></i>