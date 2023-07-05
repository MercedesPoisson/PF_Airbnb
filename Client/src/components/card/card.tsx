import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from "react-router-dom";
import postFavorites from '../../redux/actions/postFavorites';
import { AnyAction } from 'redux';
import deleteFavorites from '../../redux/actions/deleteFavorites';
import getFavorites from '../../redux/actions/getFavorites';
import getUser from '../../redux/actions/getUser';
import { useAuth0 } from '@auth0/auth0-react';

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
  const {isAuthenticated} = useAuth0()
  const user = useSelector((state:any)=> state.user )
  const favorites = useSelector((state:any)=> state.favorites)
  const dispatch = useDispatch()
  
  console.log(isAuthenticated);
  

  const [ isSaved, SetIsSaved ] = useState(favorites?.some((property:any)=> property.id_property === id_property));
  console.log(favorites);

  const handleSaveClick = async() => {
    if(isAuthenticated){
      await SetIsSaved(!isSaved)
      if(!isSaved){
        await dispatch(postFavorites(user.id_user,id_property)as unknown as AnyAction)
        await dispatch(getFavorites(user.id_user)as unknown as AnyAction)
      }
      else{
        await dispatch(deleteFavorites(user.id_user,id_property)as unknown as AnyAction)
        await dispatch(getFavorites(user.id_user)as unknown as AnyAction)
      }
    }    
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

  const isHomePage = window.location.pathname === "/";

  const getLinkPath = () => {
    if(user.properties?.some((prop: any) => prop.id_property === id_property)) {
      return `/usuario/anuncio/${id_property}`
    } else {
      return `/propiedad/${id_property}`;
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      SetIsSaved(favorites?.some((property: any) => property.id_property === id_property));
    }
  }, [isAuthenticated, favorites, id_property]);

  return (
    <div className="mt-14 font-cairo border rounded-xl w-80 sm:w-90 md:w-80 lg:w-90 hover:shadow-md z-0">
      <div className="w-full">
        {renderCarousel()}
          <div className='col-span-1 justify-right'>
          <i className={`ml-3 mr-1 cursor-pointer ${isSaved ? 'fa-solid fa-heart' : 'fa-regular fa-heart'} text-argentina`} onClick={handleSaveClick} ></i>
            </div>
        <div className='p-4'>
          <Link to={getLinkPath()}>
          <button className="justify-between">
          <div className='grid grid-cols-4 w-72'>
            <div className='col-span-3'>
              <h2 className="mb-1 text-left">{truncateTitle(title, 25)}</h2>
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
//     if (Array.isArray(images) && images.length > 0) {
//       return (
//         <div className="flex items-center justify-center">
//           <img
//             className="h-60 w-60 rounded-md mr-2 object-cover"
//             src={images[0]}
//             alt={`Image 0`}
//           />
//         </div>
//       );
//     }
//     return null;
//   };