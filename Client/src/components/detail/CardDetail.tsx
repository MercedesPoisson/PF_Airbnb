import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getPropertyDetail from '../../redux/actions/getPropertyDetail';
import NavBar from '../../views/Form/Form/navBar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const CardDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const property = useSelector((state: any) => state.detail);

  useEffect(() => {
    console.log(id);
    dispatch(getPropertyDetail(id));
  }, [dispatch, id]);

  console.log(property);

  return (
    <div>
      <NavBar />
      {property && property.images && (
        <div className="max-w-2xl mx-auto rounded-r-30">
          <Carousel>
            {property.images.map((image, index) => (
              <div key={index}>
                <img className="w-full h-full object-cover" src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      )}
      {property && (
        <div>
          <h1>{property.title}</h1>
          <p>{property.description}</p>
          <p>{property.services}</p>
        </div>
      )}
    </div>
  );
};

export default CardDetails;