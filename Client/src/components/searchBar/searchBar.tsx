import '@fortawesome/fontawesome-free/css/all.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange, RangeKeyDict } from 'react-date-range';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import Filters from '../filters/filters';
import LocationSearch from '../locationSearch/locationSearch';
import UserMenu from './UserMenu';
import MaxGuestModal from './maxGuestModal';
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from 'react-redux';

function SearchBar() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [showDateRange, setShowDateRange] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [locationText, setlocationText] = useState('¿A dónde vamos?');
  const [buttonText, setButtonText] = useState('¿Cuándo?');
  const [guestText, setGuestText] = useState('¿Cuántos somos?');
  const [isOpen, setIsOpen] = useState(Boolean);
  const [showFiltersModal, setShowFiltersModal] = useState(false); // Estado para controlar la visibilidad de la ventana emergente
  const [showSearchLocation, setShowSearchLocation] = useState(false);
  const [showMaxGuest, setShowMaxGuest] = useState(false)
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { name, surname, number } = useSelector((state: any) => state.user)

  const navigate = useNavigate();
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const startDate = urlSearchParams.get('start_date');
    const endDate = urlSearchParams.get('end_date');
    const province = urlSearchParams.get('province');
    const guests = urlSearchParams.get('max_guests')
    if (!startDate || !endDate) {
      setButtonText('¿Cuándo?');
      setState([{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
    } else {
      const startDateFormatted = new Date(startDate).toLocaleDateString();
      const endDateFormatted = new Date(endDate).toLocaleDateString();
      setButtonText(`${startDateFormatted} - ${endDateFormatted}`);
    }
    if (!province) setlocationText('¿A dónde vamos?')
    else setlocationText(province)
    if (!guests) setGuestText('¿Cuántos somos?')
    else setGuestText(guests)

  }, [location]);


  //! HANDLERS --------------------------------------------------------------------------------------------------------------------

  const handleOrderClick = (type: string, event: any) => {
    const value = event;

    if (value !== undefined) {
      // Verificar si el parámetro está presente en la query
      const currentSearchParams = new URLSearchParams(window.location.search);
      const currentPrice = currentSearchParams.get('order_price');
      const currentRating = currentSearchParams.get('order_rating');

      if (type === 'price') {
        // Eliminar el parámetro de rating si está presente
        if (currentRating !== null) {
          currentSearchParams.delete('order_rating');
        }

        if (currentPrice === value) {
          // Eliminar el parámetro de precio si ya coincide con el valor seleccionado
          currentSearchParams.delete('order_price');
        } else {
          // Establecer el nuevo valor en el parámetro de precio
          currentSearchParams.set('order_price', value);
        }
      } else if (type === 'rating') {
        // Eliminar el parámetro de precio si está presente
        if (currentPrice !== null) {
          currentSearchParams.delete('order_price');
        }

        if (currentRating === value) {
          // Eliminar el parámetro de rating si ya coincide con el valor seleccionado
          currentSearchParams.delete('order_rating');
        } else {
          // Establecer el nuevo valor en el parámetro de rating
          currentSearchParams.set('order_rating', value);
        }
      }

      navigate(`?${currentSearchParams.toString()}`);
    }
  };

  const handleTypeClick = (event: any) => {
    const value = event
    if (value !== undefined) {
      // Verificar si el parámetro está presente en la query
      const currentSearchParams = new URLSearchParams(window.location.search);
      const currentType = currentSearchParams.get('property_type');

      if (currentType === value) {
        // Eliminar el parámetro de la URL
        currentSearchParams.delete('property_type');
      } else {
        // Establecer el nuevo valor en el parámetro
        currentSearchParams.set('property_type', value);
      }

      navigate(`?${currentSearchParams.toString()}`);
    }
  };


  const handlePetsClick = (event: any) => {
    const value = event
    if (value !== undefined) {
      urlSearchParams.set('allow_pets', value);
      // Verificar si el parámetro está presente en la query
      const currentSearchParams = new URLSearchParams(window.location.search);
      if (currentSearchParams.has('allow_pets')) {
        currentSearchParams.delete('allow_pets');
        navigate(`?${currentSearchParams.toString()}`);
      } else {
        navigate(`?${urlSearchParams.toString()}`);
      }
    }
  };

  const handleDateButtonClick = () => {
    setShowDateRange(!showDateRange);
  };

  const handleMoreFilters = () => {
    setShowFilters((prevShowFilters) => !prevShowFilters);
  }

  const handleDateRangeChange = (rangesByKey: RangeKeyDict) => {
    const transformedState = Object.values(rangesByKey).map((range) => ({
      startDate: range.startDate || new Date(),
      endDate: range.endDate || new Date(),
      key: range.key || 'selection'
    }));
    setState(transformedState);

    const startDateFormatted = transformedState[0].startDate.toLocaleDateString();
    const endDateFormatted = transformedState[0].endDate.toLocaleDateString();
    setButtonText(`${startDateFormatted} - ${endDateFormatted}`);
    urlSearchParams.set('start_date', transformedState[0].startDate.toISOString().slice(0, 10))
    urlSearchParams.set('end_date', transformedState[0].endDate.toISOString().slice(0, 10))
    navigate(`?${urlSearchParams.toString()}`);
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleFiltersModalToggle = () => {
    setShowFiltersModal(!showFiltersModal);
  };
  const handleSearchLocationModalToggle = () => {
    setShowSearchLocation(!showSearchLocation)
  }
  const handleMaxGuestToggle = () => {
    setShowMaxGuest(!showMaxGuest)
  }

  const handlePostProperty = () => {
    if (isAuthenticated && name && surname && number) {
      navigate("/formulario");
    } else if (!isAuthenticated) {
      loginWithRedirect();
    } else if (!name || !surname || !number) {
      dataMiss()
    }
  };

  const dataMiss = () => {
    setIsOpen(true)
    // window.alert(`Faltan Datos de tu Perfil`)
    return;
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  //! RENDER --------------------------------------------------------------------------------------------------------------------

  return (
    <div className='sticky top-0 z-0'>
      <div className="grid grid-cols-5 gap-3 h-32 mb-1 bg-white">
        <div className="col-span-1  flex items-center justify-start">
          <div className="flex items-center">
            {/* <i className="fa-regular fa-sun text-argentina ml-4 text-2xl"></i> */}
            <i className="fa fa-sun text-argentina ml-4 text-3xl"></i>
            <span className="ml-1 text-argentina font-comfortaa text-lg">airebnb</span>
          </div>
        </div>
        <div className="col-span-3 ">
          <div className="h-12 relative ">
            <div className="container mx-auto p-3 flex items-center justify-center sticky top-0 z-10">
              <div className="flex items-center justify-center rounded">
                <button
                  className="text-black p-3 rounded-l-full bg-white w-auto min-w-[12rem] h-12 border-t border-b border-l border-gray-200 shadow-md font-cairo"
                  onClick={() => handleSearchLocationModalToggle()}
                >
                  <i className="fas fa-map-marker-alt text-gray-300 mr-2"></i>
                  {locationText}
                </button>
                <span className="w-px h-6 bg-gray-200 justify"></span>
                <button
                  className="text-black p-3 bg-white w-60 h-12 border-t border-b border-gray-200 shadow-md font-cairo flex items-center"
                  onClick={() => {
                    handleDateButtonClick();
                    handleModalToggle();
                  }}
                >
                  <i className="fas fa-calendar-alt text-gray-300 mr-2"></i>
                  {buttonText}
                </button>
                <span className="w-px h-6 bg-gray-200"></span>
                <button className="text-black p-3 bg-white w-48 h-12 border-t border-b border-gray-200 shadow-md font-cairo"
                  onClick={() => { handleMaxGuestToggle() }}>
                  <i className="fas fa-users text-gray-300 mr-2 "></i>
                  {guestText}
                </button>
                <span className="w-px h-6 bg-gray-200"></span>
                <button className="text-black p-3 rounded-r-full bg-white w-14 h-12 border-t border-b border-r border-gray-200 shadow-md">
                  <i className="fas fa-search text-argentina"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-end">

          <button className="font-cairo-play mr-4" onClick={handlePostProperty}>Publicá tu Propiedad</button>
          <button className="mr-4">
            <UserMenu />
          </button>
        </div>
        <div className="flex justify-center items-center col-span-5 -z-1">
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={{
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
              },
            }}
            className="absolute font-cairo m-0 items-center justify-center bg-grey w-80 mt-4 mr-10" >
            <div>
              <p>Falta Completar el Perfil</p>
              <button
                onClick={() => { navigate("/usuario/profile") }}>Perfil</button>
            </div>
          </Modal>

          {/* <div>
            <button>
              <i className="fa-solid fa-arrow-left text-gray-600 border border-gray-600 rounded-full p-1"></i>
            </button>
          </div> */}

          <div onClick={() => handleOrderClick("price", "asc")}>
            <button className="flex flex-col items-center justify-center bg-transparent ml-10 w-28">
              <span className="mb-2">
                <i className="fa-solid fa-arrow-down-short-wide text-gray-600"></i>
              </span>
              <span className="text-center font-cairo">Menor Precio</span>
            </button>
          </div>

          <div onClick={() => handleOrderClick("price", "des")} >
            <button className="flex flex-col items-center justify-center bg-transparent w-28">
              <span className="text-center font-cairo">
                <i className="fa-solid fa-arrow-up-wide-short text-gray-600"></i>
              </span>
              <span className="mt-2 text-center font-cairo">Mayor Precio</span>
            </button>
          </div>

          <div onClick={() => handleOrderClick("rating", "asc")} >
            <button className="flex flex-col items-center justify-center bg-transparent w-28">
              <span className="text-center font-cairo">
                <i className="fa-solid fa-star-half-stroke text-gray-600"></i>
              </span>
              <span className="mt-2 text-center font-cairo">Menor Rating</span>
            </button>
          </div>

          <div onClick={() => handleOrderClick("rating", "des")} >
            <button className="flex flex-col items-center justify-center bg-transparent w-28">
              <span className="text-center font-cairo">
              <i className="fa-solid fa-star text-gray-600"></i>
              </span>
              <span className="mt-2 text-center font-cairo">Mayor Rating</span>
            </button>
          </div>

          <div onClick={() => handleTypeClick("House")}>
            <button className="flex flex-col items-center justify-center bg-transparent w-28">
              <span className="mb-2">
                <i className="fa-solid fa-house text-gray-600"></i>
              </span>
              <span className="text-center font-cairo">Casa</span>
            </button>
          </div>

          <div onClick={() => handleTypeClick("Apartment")}>
            <button className="flex flex-col items-center justify-center bg-transparent w-28">
              <span className="mb-2">
                <i className="fa-solid fa-building text-gray-600"></i>
              </span>
              <span className="text-center font-cairo">Departamento</span>
            </button>
          </div>

          <div onClick={() => handleTypeClick("Room")}>
            <button className="flex flex-col items-center justify-center bg-transparent w-28">
              <span className="mb-2">
                <i className="fa-solid fa-bed text-gray-600"></i>
              </span>
              <span className="text-center font-cairo">Habitación</span>
            </button>
          </div>

          <div onClick={() => handlePetsClick("true")}  >
            <button className="flex flex-col items-center justify-center bg-transparent w-28">
              <span className="mb-2">
                <i className="fa-solid fa-paw text-gray-600"></i>
              </span>
              <span className="text-center font-cairo ">Mascotas</span>
            </button>

          </div>

          <div >
            <button className="flex flex-col items-center justify-center bg-transparent w-28 ml-8" onClick={handleMoreFilters}>
              <div>
                <i className="text-argentina text-lg fa-solid a-solid fa-angles-down mr-2"></i>
                Más filtros
              </div>
            </button>
          </div>
          <div className='flex right-0 z-50 mt-24 '>
            {showFilters && (
              <div className="absolute right-0 mr-16">
                <Filters close={handleMoreFilters} />
              </div>
            )}
          </div>

        </div>
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={handleModalToggle}
        style={{
          content: {
            width: '400px',
            height: '400px',
            maxHeight: 'none',
            margin: '30px auto',
            padding: '20px',
            zIndex: "100",
            marginTop: "100px",
          }
        }}
      >
        <DateRange
          editableDateInputs={true}
          onChange={handleDateRangeChange}
          moveRangeOnFirstSelection={false}
          ranges={state}
          minDate={new Date()}
          maxDate={new Date('2026-01-01')}
        />
      </Modal>

      <Modal
        isOpen={showFiltersModal} // Mostrar la ventana emergente de los filtros si showFiltersModal es true
        onRequestClose={handleFiltersModalToggle}
        style={{
          content: {
            width: '400px',
            height: '6650px',
            maxHeight: 'none',
            marginTop: '130px',
            padding: '20px',
            left: 'calc(100% - 420px)',
            top: 0,
            position: "fixed",
            backgroundColor: "white",
            zIndex: "9999",
            overflowY: "auto",


          }
        }}
      >
        <Filters close={handleFiltersModalToggle} />
      </Modal>
      <Modal
        isOpen={showSearchLocation}
        onRequestClose={handleSearchLocationModalToggle}
        style={{
          content: {
            width: '400px',
            height: '400px',
            maxHeight: 'none',
            margin: '30px auto',
            padding: '20px',
            zIndex: "9999",
            marginTop: "100px",
          }
        }}
      >
        <LocationSearch close={handleSearchLocationModalToggle} />
      </Modal>
      <Modal
        isOpen={showMaxGuest}
        onRequestClose={handleMaxGuestToggle}
        style={{
          content: {
            width: '400px',
            height: '400px',
            maxHeight: 'none',
            margin: '30px auto',
            padding: '20px',
            zIndex: "9999",
            marginTop: "100px",
          }
        }}
      >
        <MaxGuestModal close={handleMaxGuestToggle} />
      </Modal>
    </div>
  );
}

export default SearchBar;