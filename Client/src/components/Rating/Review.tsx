const Review = ({ rating }) => {
  const renderStars = (ratingValue) => {
    const fullStars = ratingValue >= 1 && ratingValue <= 5 ? Math.floor(ratingValue) : 0;
    const halfStar = ratingValue % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const stars = [];

    // renderizado estrella completa
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={`star-${i}`} className="fa-solid fa-star text-argentina mr-2"></i>
      );
    }

    // renderizado media estrella
    if (halfStar) {
      stars.push(
        <i key="half-star" className="fa-solid fa-star-half text-argentina mr-2"></i>
      );
    }

    // renderizado de estrellas vacias
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={`empty-star-${i}`} className="fa-solid fa-star text-gray-300 mr-2"></i>
      );
    }

    return stars;
  };

  return (
    <section className="flex justify-center items-center gap-x-16 text-white mt-10 mb-10">
      <div className="w-[420px] h-[150px] bg-white border cursor-pointer group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden flex items-center justify-center p-2">
          {rating.User.image ? (
              <img src={rating.User.image} className="rounded-full w-12 h-12" alt="User" />
            ) : (
              <i className="fa-regular fa-face-smile text-3xl text-argentina"></i>
            )}

            <div className="ml-4">
              <p className="text-gray-800 flex items-center">
              <i className="fa-solid fa-star text-argentina mr-2"></i>
                {rating.total_rating} - {rating.date_rating}
              </p>
              <p className="text-gray-800 text-sm">
                {rating.description} - {rating.User.name} {rating.User.surname}
              </p>
            </div>
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden bg-white overflow-hidden border w-[420px] h-[150px] ">
            <div className="text-center flex flex-col items-center justify-center text-gray-800 px-2 pb-2">
              <p className="my-2">Rating por servicio</p>
              <p>
                Limpieza: {renderStars(rating.cleaning_rating)}
              </p>
              <p>
                Comunicación: {renderStars(rating.communication_rating)}
              </p>
              <p>
                Precio - Calidad: {renderStars(rating.price_quality_rating)}
              </p>
              <p>
                Veracidad: {renderStars(rating.veracity_rating)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;