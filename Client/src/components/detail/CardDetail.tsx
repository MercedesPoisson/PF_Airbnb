import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getPropertyDetail from '../../redux/actions/getPropertyDetail';
import NavBar from '../../views/Form/Form/navBar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CardDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const property = useSelector((state: any) => state.detail);
  const [ isSaved, SetIsSaved ] = useState(false);

  useEffect(() => {
    console.log(id);
    dispatch(getPropertyDetail(id));
  }, [dispatch, id]);

  console.log(property);

  const handleSaveClick = () => {
    SetIsSaved(!isSaved)
  }

  // Separar el array de imágenes para el carrusel y la previsualización
  const carouselImages = property && property.images ? property.images : [];
  const previewImages = property && property.images ? property.images.slice(0, 4) : [];

//  const renderServices = () => {
//     if (property && property.services && Array.isArray(property.services)) {
//       return property.services.map((service, index) => (
//         <div key={index} className="flex items-center">
//           <i className={`fa-solid ${service.icon} mr-1`} style={{ fontSize: '0.8em' }} />
//           {service.name}
//         </div>
//       ));
//     }  
//     return null;
//   };

  return (
    <div>
      <NavBar />

      <div className='flex items-start justify-between font-cairo ml-10 mr-20'>
  <div>
    {carouselImages.length > 0 && (
      <div className="max-w-2xl mx-auto rounded-r-30">
        <div className="max-w-sm mx-auto">
          <Carousel
            showThumbs={true}
            emulateTouch={true}
            showStatus={true}
            showArrows={true}
            className="carousel object-cover"
          >
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img className="w-full h-full object-cover" src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    )}
  </div>
  <div className='ml-4 flex-grow'>
    {property && (
      <div>
        <h1 className='text-2xl'>{property.title}</h1>
        <div className="flex items-center">
          <div><i className="fa-regular fa-star text-argentina" />{property.rating}</div>
          <div className='ml-4'>
            {property.property_type === 'House' ? 'Casa' : property.property_type === 'Apartment' ? 'Departamento' : property.property_type === 'Room' ? 'Habitación' : ''}
            {" en"} {property.location}, {property.province}
          </div>
          <div>
        <i className={`ml-3 mr-1 cursor-pointer ${isSaved ? 'fa-solid fa-heart' : 'fa-regular fa-heart'} text-argentina`} onClick={handleSaveClick} ></i>
        Guardar
      </div>
        </div>
        <div className="flex items-center">
          <div>{property.max_guests} {property.max_guests === 1 ? 'huésped' : 'huéspedes'}</div>
          <div className="ml-2 mr-2"><i className="fa-solid fa-circle text-argentina" style={{ fontSize: '0.3em' }} /></div>
          <div>{property.rooms_number} {property.rooms_number === 1 ? 'dormitorio' : 'dormitorios'}</div>
          <div className="ml-2 mr-2"><i className="fa-solid fa-circle text-argentina" style={{ fontSize: '0.3em' }} /></div>
          <div>{property.beds_number} {property.beds_number === 1 ? 'cama' : 'camas'}</div>
          <div className="ml-2 mr-2"><i className="fa-solid fa-circle text-argentina" style={{ fontSize: '0.3em' }} /></div>
          <div>{property.bathrooms_number} {property.bathrooms_number === 1 ? 'baño' : 'baños'}</div>
        </div>
        <div>
          <p className='mt-3'>{property.description}</p>
        </div>
        <div>
          <h2>Que ofrece este lugar</h2>
          <div>
            {property.services &&
              property.services.map((service, index) => (
                <i key={index} className={service.icon}>
                  {service.name}
                </i>
              ))}
          </div>
          <div className='mt-2'>
          {property.allow_pets && (
            <h3 className="font-semibold">
              Podes venir a disfrutar con tu mascota <i className="fa-solid fa-paw ml-2 text-argentina"></i>
            </h3>
          )}
          </div>
          <div>
            {property.monthly_discount || property.weekly_discount ? (
              <h3 className="font-semibold">
                Esta propiedad ofrece descuentos{" "}
                {property.monthly_discount && property.weekly_discount ? (
                  "en estadías semanales y/o mensuales"
                ) : property.monthly_discount ? (
                  "en estadías mensuales"
                ) : (
                  "en estadías semanales"
                )}
                <i className="fa-light fa-tag text-argentina" />
              </h3>
            ) : null}
          </div>
        </div>
      </div>
    )}
  </div>
</div>
    </div>
  );
};

export default CardDetails;