import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Report, { ReviewProps } from "../../components/detail/Report";
import { Link } from "react-router-dom"

interface Review {
  date_rating: string;
  description: string;
  total_rating: number;
  cleaning_rating: number;
  communication_rating: number;
  price_quality_rating: number;
  veracity_rating: number;
  is_reported: boolean;
  rating_id: number;
}

const AllReviews = () => {
  const { propertyId } = useParams();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://airebnb.onrender.com/rating/${propertyId}`);
        console.log("que esta haciendo?", response.data);
        setReviews(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, [propertyId]);

  const splitDescription = (description: string) => {
    const words = description.split(" ");
    const lines = [];
    let line = "";
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (line.length + word.length <= 50) {
        line += word + " ";
      } else {
        lines.push(line.trim());
        line = word + " ";
      }
    }
    if (line.length > 0) {
      lines.push(line.trim());
    }
    return lines;
  };

  function reportReview(ratingId: number) {
    setSelectedRating(ratingId);
    setIsOpen(true);
  }

  const closeModal = () => {
    setSelectedRating(null);
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-start mt-10">
      <div className="px-4 pt-3 pb-4 rounded-sm flex-1 font-cairo w-full max-w-8xl">
        <div className="text-white uppercase font-bold bg-segundo w-full h-10">
          evaluaciones
        </div>
        <div className="border-x border-gray-200 rounded-sm mt-3">
          <table className="w-full max-w-8xl text-gray-700 mx-auto">
            <thead>
              <tr>
                <th>Número</th>
                <th>Fecha</th>
                <th>Descripción</th>
                <th>
                  <div>Rating</div>
                  <div>Total</div>
                </th>
                <th>Limpieza</th>
                <th>Comunicación</th>
                <th>
                  <div>Precio</div>
                  <div>Calidad</div>
                </th>
                <th>Veracidad</th>
                <th>Reportar</th>
              </tr>
            </thead>
            <tbody className="leading-loose">
              {reviews.map((review, index) => (
                <tr key={index} className="text-center border-b">
                  <td>#{index + 1}</td>
                  <td>{review.date_rating}</td>
                  <td>
                    {splitDescription(review.description).map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </td>
                  <td>
                    <i className="fa-solid fa-star text-argentina"></i>{" "}
                    {review.total_rating}
                  </td>
                  <td>
                    <i className="fa-solid fa-star text-argentina"></i>{" "}
                    {review.cleaning_rating}
                  </td>
                  <td>
                    <i className="fa-solid fa-star text-argentina"></i>{" "}
                    {review.communication_rating}
                  </td>
                  <td>
                    <i className="fa-solid fa-star text-argentina"></i>{" "}
                    {review.price_quality_rating}
                  </td>
                  <td>
                    <i className="fa-solid fa-star text-argentina"></i>{" "}
                    {review.veracity_rating}
                  </td>
                  <td>
                    {review.is_reported ? (
                      <span><i className="fa-regular fa-square-check mr-2 text-xl text-argentina"></i>Reportada</span>
                    ) : (
                      <button
                        onClick={() => reportReview(review.rating_id)}
                        className="text-argentina"
                      >
                        <i className="fa-solid fa-bantext-xl text-argentina mr-2"></i>Reportar
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> 
        <div className="mt-4 flex justify-center">
           <Link to="/usuario/reservas"><i className="fa-solid fa-angles-left text-base ml-2 mt-2 text-argentina">volver</i>
        </Link>
        </div>
      </div>
      <Report
          isOpen={isOpen && selectedRating !== null}
          setIsOpen={closeModal}
          SelectedRating={selectedRating}
        />   
       
         </div>
  );
};

export default AllReviews;