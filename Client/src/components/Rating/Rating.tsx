import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import getUser from "../../redux/actions/getUser";
import axios from "axios";
import { AnyAction } from "redux";
import Modal from "react-modal";

interface RatingProps {
  id_property: number;
  id_user: string;
  rent_id: number;
  setIsOpen: any;
  isOpen: boolean;
}

const Rating = (props: RatingProps) => {
  const { id_property, id_user, rent_id, setIsOpen, isOpen } = props;
  const dispatch = useDispatch();

  function closeModal() {
    setIsOpen(false);
  }

  const [ratings, setRatings] = useState({
    id_user,
    id_property,
    description: "",
    total_rating: 0,
    cleaning_rating: 0,
    communication_rating: 0,
    price_quality_rating: 0,
    veracity_rating: 0,
    date_rating: new Date().toISOString().slice(0, 10),
  });

  const [error, setError] = useState(false);

  const handleStarClick = (category: any, starIndex: any) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [category]: starIndex,
    }));
    setError(false);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      description: e.target.value,
    }));
  };

  useEffect(() => {
    const {
      cleaning_rating,
      communication_rating,
      price_quality_rating,
      veracity_rating,
    } = ratings;
    const average =
      parseFloat(
        (
          (cleaning_rating +
            communication_rating +
            price_quality_rating +
            veracity_rating) /
          4
        ).toFixed(2)
        // le agregue el toFixed para que permita dos decimales
      );
    setRatings((prevRatings) => ({
      ...prevRatings,
      total_rating: average,
    }));
  }, [
    ratings.cleaning_rating,
    ratings.communication_rating,
    ratings.price_quality_rating,
    ratings.veracity_rating,
  ]);

  const handleSendRating = async () => {
    try {
      if (
        ratings.cleaning_rating === 0 ||
        ratings.communication_rating === 0 ||
        ratings.price_quality_rating === 0 ||
        ratings.veracity_rating === 0
      ) {
        setError(true);
        return;
      }

      const response = await axios.post(
        "https://pf-airbnb.vercel.app/?rating",
        ratings
      );

      dispatch(getUser(id_user) as unknown as AnyAction);
      console.log(response.data);

      await axios.put(`https://pf-airbnb.vercel.app/?rent/${rent_id}/review-status`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      className="absolute font-cairo m-0 items-center justify-center bg-white w-80 mt-4 mr-10"
    >
      <p className="uppercase font-bold text-white bg-segundo py-2 px-3 mb-2">
        Contanos tu experiencia
      </p>

      <div id="stars-limpieza" className="relative p-2 text-base items-center">
        <p>Limpieza</p>
        <div className="flex items-center gap-1 text-gray-200 text-base cursor-pointer p-2">
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <i
              key={starIndex}
              className={`fa-solid fa-star${
                starIndex <= ratings.cleaning_rating ? " text-argentina" : ""
              }`}
              onClick={() => handleStarClick("cleaning_rating", starIndex)}
            ></i>
          ))}
        </div>
      </div>

      <div className="relative p-2 text-base items-center">
        <p>Comunicación</p>
        <div
          id="stars-comunicacion"
          className="flex items-center gap-1 text-gray-200 text-base cursor-pointer p-2"
        >
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <i
              key={starIndex}
              className={`fa-solid fa-star${
                starIndex <= ratings.communication_rating
                  ? " text-argentina"
                  : ""
              }`}
              onClick={() => handleStarClick("communication_rating", starIndex)}
            ></i>
          ))}
        </div>
      </div>

      <div className="relative p-2 text-base items-center">
        <p>Precio - Calidad</p>
        <div
          id="stars-precio-calidad"
          className="flex items-center gap-1 text-gray-200 text-base cursor-pointer p-2"
        >
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <i
              key={starIndex}
              className={`fa-solid fa-star${
                starIndex <= ratings.price_quality_rating
                  ? " text-argentina"
                  : ""
              }`}
              onClick={() => handleStarClick("price_quality_rating", starIndex)}
            ></i>
          ))}
        </div>
      </div>

      <div className="relative p-2 text-base items-center">
        <p>Veracidad</p>
        <div
          id="stars-veracidad"
          className="flex items-center gap-1 text-gray-200 text-base cursor-pointer p-2"
        >
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <i
              key={starIndex}
              className={`fa-solid fa-star${
                starIndex <= ratings.veracity_rating ? " text-argentina" : ""
              }`}
              onClick={() => handleStarClick("veracity_rating", starIndex)}
            ></i>
          ))}
        </div>
      </div>

      <div className="relative p-2 text-base items-center">
        <p>Opinión:</p>
        <textarea
          className="w-[290px] h-20 border"
          maxLength={200}
          placeholder="Ingresa hasta 200 caracteres"
          onChange={handleDescriptionChange}
        ></textarea>
      </div>
      {error && (
        <p className="text-red-500">Debe calificar en todas las categorías</p>
      )}
      <button
        className="border border-red-500 px-4 rounded-md"
        onClick={handleSendRating}
      >
        Enviar
      </button>
    </Modal>
  );
};

export default Rating;

// <i class="fa-solid fa-star"></i>
//<i class="fa-regular fa-star"></i>
