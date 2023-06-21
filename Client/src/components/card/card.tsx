import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  location: string;
  province: string;
  price_per_night: number;
  rating: number;
  images: string[];
  id_property: number;
  // showLink:boolean;
}

function Card({ id_property, title, location, province, price_per_night, rating, images }: CardProps) {
  const truncateTitle = (text: string, maxLenght: number) => {
    if (text.length > maxLenght) {
      return text.substring(0, maxLenght) + "...";
    }
    return text;
  }
  
  const renderCarousel = () => {
    if (Array.isArray(images) && images.length > 0) {
      return (
        <div className="carousel-container ">
          <div >
            <Carousel
              showThumbs={false}
              emulateTouch={true}
              showStatus={false}
              className="carousel"
              
            >
              {images.map((image, index) => (
                <div key={index}>
                  <img className="carousel-image h-72 object-cover rounded-xl" src={image} alt={`Image ${index}`} />
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
  console.log(id_property);

  return (
    <div className="mt-14 font-cairo border rounded-xl w-80 sm:w-90 md:w-80 lg:w-90 hover:shadow-md z-0">
      <div className="w-full">
        {renderCarousel()}
        
        <div className='p-4'>
          <Link to={`/propiedad/${id_property}`}>
         <button className="justify-between">
          <div className='grid grid-cols-4 w-72'>
            <div className='col-span-3'>
              <h2 className="mb-1 text-left">{truncateTitle(title, 25)}</h2>
              </div>
          <div className='col-span-1 justify-right'>
            <i className="ml-3 fa-regular fa-heart text-argentina"></i>
            </div>
          </div>
                     
          <h3 className="text-left text-base">{location}</h3>
          <h3 className="text-left text-sm"> {province}</h3>
          <div className='grid grid-cols-4 w-72'>
            <div className='col-span-3'>
              <h3 className="text-left">
            <span className="font-bold">
              $ {price_per_night}
            </span>{" "}
             noche
          </h3>
            </div>
            <div className='col-span-1 justify-right'>
              <span>
              
              <i className="ml-4 fa-regular fa-star text-argentina" />
              {rating}
            </span>
            </div>
            
          </div>
          
        </button>
        </Link>
        </div>
        
       
      </div>
    </div>
  );
}

export default Card;

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