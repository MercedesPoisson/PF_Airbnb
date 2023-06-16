interface CardProps {
  title: string;
  province: string;
  price_per_night: number;
  rating: number;
  images: string[];
}

function Card({title, province, price_per_night, rating, images }: CardProps) {

  const renderImages = () => {
    if(Array.isArray(images)) {
      return images.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index}`} />
      ))
    }
    return null;
  }

  return (
    <div className="mt-14">
      <button>
      <h2>Titulo: {title}</h2>
      <h3>Provincia: {province}</h3>
      <h3>Precio por noche: {price_per_night}</h3>
      <p>Puntuacion: {rating}</p>
      {renderImages()} 
      </button>
    </div>
  );
}

export default Card;
