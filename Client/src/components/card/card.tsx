
interface CardProps {
  title: string;
  location: string;
  province: string;
  price_per_night: number;
  rating: number;
  images: string[];
}

function Card({ title, location, province, price_per_night, rating, images }: CardProps) {
  const renderImages = () => {
    if (Array.isArray(images) && images.length > 0) {
      return (
        <div className="flex items-center justify-center">
          <img
            className="h-60 w-60 rounded-md mr-2 object-cover"
            src={images[0]}
            alt={`Image 0`}
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mt-14 font-cairo">
      
      <button>
        {renderImages()}
        <h2 className="font-bold mb-2">{title}</h2>
        <h3>{location}</h3>
        <h3>{province}</h3>
        <h3>Precio por noche: {price_per_night}</h3>
        <p>Puntuacion: {rating}</p>
      </button>
    </div>
  );
}

export default Card;