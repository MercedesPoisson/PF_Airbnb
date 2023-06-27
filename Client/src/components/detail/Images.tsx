import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import getPropertyDetail from '../../redux/actions/getPropertyDetail';

const Images = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const property = useSelector((state: any) => state.detail);
  const carouselImages = property && property.images ? property.images : [];

  useEffect(() => {
    console.log(id);
    dispatch(getPropertyDetail(id));
  }, [dispatch, id]);

  return (
    <div className='w-full max-w-5xl mx-auto gap-5 grid grid-cols-3 mt-6'>
      {/* Primera columna */}
      <div className="col-span-1">
        <img
          className="w-full h-96 object-cover mb-5"
          src={carouselImages[0]}
          alt={`Image 1`}
        />
      </div>

      {/* Segunda columna */}
      <div className="col-span-1 grid grid-rows-2 gap-5">
        <img
          className="w-full h-52 object-cover"
          src={carouselImages[1]}
          alt={`Image 2`}
        />
        <img
          className="w-full h-[155px] object-cover"
          src={carouselImages[2]}
          alt={`Image 3`}
        />
      </div>

      {/* Tercera columna */}
      <div className="col-span-1">
        <img
          className="w-full h-96 object-cover mb-5"
          src={carouselImages[3]}
          alt={`Image 4`}
        />
      </div>
    </div>
  );
}

export default Images;