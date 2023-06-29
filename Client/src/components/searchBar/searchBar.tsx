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
    const [buttonText, setButtonText] = useState('¿Cuándo?');
    const [btnLocation, setBtnLocation] = useState('¿A dónde vamos?')
    const [btnGuest, setBtnGuest] = useState('¿Cuántos somos?')
    const [showFiltersModal, setShowFiltersModal] = useState(false); // Estado para controlar la visibilidad de la ventana emergente
    const [showSearchLocation, setShowSearchLocation] = useState(false);
    const [showMaxGuest, setShowMaxGuest] = useState(false)
    const [orderPrice, setOrderPrice] = useState('');
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    
    const navigate = useNavigate();
    const location = useLocation();
    const urlSearchParams = new URLSearchParams(window.location.search);

    useEffect(() => {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const startDate = urlSearchParams.get('start_date');
      const endDate = urlSearchParams.get('end_date');
      if (!startDate || !endDate) {
        setButtonText('¿Cuándo?');
        setState([{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
      } else {
        const startDateFormatted = new Date(startDate).toLocaleDateString();
        const endDateFormatted = new Date(endDate).toLocaleDateString();
        setButtonText(`${startDateFormatted} - ${endDateFormatted}`);
      }
    }, [location]);
    
    const handleOrderClick = (event:any) => {
      console.log("Hace click");
      
      const value = event.target.value;
      if (value !== undefined) {
        setOrderPrice(value);
        urlSearchParams.set('order_price', value);
        navigate(`?${urlSearchParams.toString()}`);
      }
    };

    const handleDateButtonClick = () => {
      setShowDateRange(!showDateRange);
    };

    const handleMoreFilters = ()  => {
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
    
    const locations = (prov: string, city: string) => {
      setBtnLocation(`${prov}, ${city}`)
    };

    const maxGuestBtn = (value: string) => {
      setBtnGuest(value)
    };

    const handleSearchLocationModalToggle = () => {
      setShowSearchLocation(!showSearchLocation)
      
    }

    const handleMaxGuestToggle = () => {
      setShowMaxGuest(!showMaxGuest)
    }
    const handlePostProperty = () => {
      if(isAuthenticated) {
        navigate("/formulario");
      } else {
        loginWithRedirect();
      }
    };
  
    return (
      <div className='sticky top-0 z-0'>
        <div className="grid grid-cols-5 gap-3 h-32 mb-1 bg-white">
          <div className="col-span-1  flex items-center justify-start">
            <div className="flex items-center">
              <i className="fa fa-sun text-argentina ml-4 text-2xl"></i>
              <span className="ml-1 text-argentina font-comfortaa text-lg">argentina</span>
            </div>
          </div>
          <div className="col-span-3 ">
            <div className="h-12 relative ">
              <div className="container mx-auto p-3 flex items-center justify-center sticky top-0 z-10">
                <div className="flex items-center justify-center rounded">
                  <button
                    className="text-black p-3 rounded-l-full bg-white w-48 h-12 border-t border-b border-l border-gray-200 shadow-md font-cairo"
                    onClick={() => handleSearchLocationModalToggle()}
                  >
                    <i className="fas fa-map-marker-alt text-gray-300 mr-2"></i>{!showSearchLocation ? btnLocation : '¿A dónde vamos?'}
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
                  onClick={() => {handleMaxGuestToggle()}}>
                    <i className="fas fa-users text-gray-300 mr-2 "></i>{!showMaxGuest ? `${btnGuest}`  : '¿Cuántos somos?'}
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
          <div className="flex items-center col-span-5 -z-1">
  
          <div>
            <button>
              <i className="fa-solid fa-arrow-left text-gray-600 border border-gray-600 rounded-full p-1"></i>
            </button>
          </div>

          <div>
              <button onClick={(event) => handleOrderClick(event)} value="asc" className="flex flex-col items-center justify-center bg-transparent ml-10 w-28">
                <span  className="mb-2">
                <i className="fa-solid fa-arrow-down-short-wide text-gray-600"></i>
                </span>
                <span className="text-center font-cairo">Menor Precio</span>
              
            </button>
            
            
          </div>

          <div>
            <button onClick={(event) => handleOrderClick(event)} value="des" className="flex flex-col items-center justify-center bg-transparent w-28">
              <span className="text-center font-cairo">
            <i className="fa-solid fa-arrow-down-wide-short text-gray-600"></i>
            </span>
          <span className="mt-2 text-center font-cairo">Mayor Precio</span>
            </button>
            </div>       

          <div>
            <button className="flex flex-col items-center justify-center bg-transparent w-28">
              <span className="mb-2">
                <i className="fa-solid fa-house text-gray-600"></i>
              </span>
              <span className="text-center font-cairo">Casa</span>
            </button>
          </div>

          <div>
          <button className="flex flex-col items-center justify-center bg-transparent w-28">
              <span className="mb-2">
                <i className="fa-solid fa-building text-gray-600"></i>
              </span>
              <span className="text-center font-cairo">Departamento</span>
            </button>
          </div>

          <div>
          <button className="flex flex-col items-center justify-center bg-transparent w-28">
                      <span className="mb-2">
                        <i className="fa-solid fa-bed text-gray-600"></i>
                      </span>
                      <span className="text-center font-cairo">Habitación</span>
                    </button>
          </div>
          <div>
          <button className="flex flex-col items-center justify-center bg-transparent w-28">
                      <span className="mb-2">
                      <i className="fa-solid fa-umbrella-beach text-gray-600"></i>
                      </span>
                      <span className="text-center font-cairo">Playa</span>
                    </button>
          </div>
          <div>
          <button className="flex flex-col items-center justify-center bg-transparent w-28">
                      <span className="mb-2">
                      <i className="fa-solid fa-mountain text-gray-600"></i>
                      </span>
                      <span className="text-center font-cairo">Montaña</span>
                    </button>
          </div>
          <div>
          <button className="flex flex-col items-center justify-center bg-transparent w-28">
                      <span className="mb-2">
                      <i className="fa-solid fa-water text-gray-600"></i>
                      </span>
                      <span className="text-center font-cairo">Lago</span>
                    </button>
          </div>
          <div>
          <button className="flex flex-col items-center justify-center bg-transparent w-28">
                      <span className="mb-2">
                      <i className="fa-solid fa-person-swimming text-gray-600"></i>
                      </span>
                      <span className="text-center font-cairo">Pileta</span>
                    </button>
          </div>
          {/* <div>
          <button className="flex flex-col items-center justify-center bg-transparent w-28">
                      <span className="mb-2">
                      <i className="fa-solid fa-person-skiing text-gray-600"></i>
                      </span>
                      <span className="text-center font-cairo">Ski</span>
                    </button>
          </div> */}
          {/* <div>
          <button className="flex flex-col items-center justify-center bg-transparent w-28">
                      <span className="mb-2">
                      <i className="fa-solid fa-golf-ball-tee text-gray-600"></i>
                      </span>
                      <span className="text-center font-cairo">Golf</span>
                    </button>
          </div> */}
          <div>
          <button className="flex flex-col items-center justify-center bg-transparent w-28">
                      <span className="mb-2">
                      <i className="fa-solid fa-kitchen-set text-gray-600"></i>
                      </span>
                      <span className="text-center font-cairo">Cocina</span>
                    </button>
          </div>
          {/* <div>
          <button className="flex flex-col items-center justify-center bg-transparent w-28">
                      <span className="mb-2">
                      <i className="fa-brands fa-accessible-icon text-gray-600"></i>
                      </span>
                      <span className="text-center font-cairo">Accesibilidad</span>
                    </button>
          </div> */}
          <div>
          <button className="flex flex-col items-center justify-center bg-transparent w-28">
                      <span className="mb-2">
                      <i className="fa-solid fa-paw text-gray-600"></i>
                      </span>
                      <span className="text-center font-cairo ">Mascotas</span>
                    </button>
                    
          </div>
          <div>
            <button>
              <i className="fa-solid fa-arrow-right text-gray-600 mr-4 border border-gray-600 rounded-full p-1"></i>
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
          <Filters close={handleFiltersModalToggle}/>
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
          <LocationSearch close={handleSearchLocationModalToggle} locations={locations}/>
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
          <MaxGuestModal close={handleMaxGuestToggle} maxGuestBtn={maxGuestBtn} />
        </Modal>
      </div>
    );
  }
  
  export default SearchBar;