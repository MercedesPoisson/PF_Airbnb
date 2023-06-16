import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CardProps {
  title: string;
  location: string;
  province: string;
  price_per_night: number;
  rating: number;
  images: string[];
}

function Card({ title, location, province, price_per_night, rating, images }: CardProps) {
  const truncateTitle = (text: string, maxLenght: number) => {
    if (text.length > maxLenght) {
      return text.substring(0, maxLenght) + "...";
    }
    return text;
  }
  
  const renderCarousel = () => {
    if (Array.isArray(images) && images.length > 0) {
      return (
        <div className="carousel-container">
          <div >
            <Carousel
              showThumbs={false}
              emulateTouch={true}
              showStatus={false}
              className="carousel"
              
            >
              {images.map((image, index) => (
                <div key={index}>
                  <img className="carousel-image h-72 object-cover" src={image} alt={`Image ${index}`} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="carousel-dots">
            {images.map((_, index) => (
              <div key={index} className="dot" />
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  // const renderImages = () => {
  //   if (Array.isArray(images) && images.length > 0) {
  //     return (
  //       <div className="flex items-center justify-center">
  //         <img
  //           className="h-60 w-60 rounded-md mr-2 object-cover"
  //           src={images[0]}
  //           alt={`Image 0`}
  //         />
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  return (
    <div className="mt-14 font-cairo border rounded-md h-[300]">
      <div className="w-full">
        {renderCarousel()}
        <button className="justify-between">
          <h2 className="mb-2 text-left">{truncateTitle(title, 25)}
             <span>
              <i className="ml-4 fa-regular fa-star text-argentina" />
              {rating}
            </span>
          </h2>
          
          <h3 className="text-left">{location}</h3>
          <h3 className="text-left"> {province}</h3>
          <h3 className="text-left">
            <span className="font-bold">
              $ {price_per_night}
            </span>{" "}
            precio por noche
          </h3>
        </button>
      </div>
    </div>
  );
}

export default Card;