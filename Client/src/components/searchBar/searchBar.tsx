import '@fortawesome/fontawesome-free/css/all.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange, RangeKeyDict } from 'react-date-range';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import Filters from '../filters/filters';
import LocationSearch from '../locationSearch/locationSearch';

function SearchBar() {
    const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ]);
    const [showDateRange, setShowDateRange] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [buttonText, setButtonText] = useState('¿Cuándo?');
    const [showFiltersModal, setShowFiltersModal] = useState(false); // Estado para controlar la visibilidad de la ventana emergente
    const [showSearchLocation, setShowSearchLocation] = useState(false);
    const navigate = useNavigate();
  
    const handleDateButtonClick = () => {
      setShowDateRange(!showDateRange);
    };
  
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
    const handlePostProperty = () => {
      navigate("/formulario");
    }
  
    return (
      <div className='sticky top-0'>
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
                    <i className="fas fa-map-marker-alt text-gray-300 mr-2"></i>¿A dónde vamos?
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
                  <button className="text-black p-3 bg-white w-48 h-12 border-t border-b border-gray-200 shadow-md font-cairo">
                    <i className="fas fa-users text-gray-300 mr-2 "></i>¿Cuántos somos?
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
              <i className="fa-regular fa-circle-user text-argentina text-xl"></i>
            </button>
          </div>
          <div className="flex items-center col-span-5">
  <div>
    <button>
      <i className="fa-solid fa-arrow-left text-gray-600 border border-gray-600 rounded-full p-1"></i>
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
  <div>
  <button className="flex flex-col items-center justify-center bg-transparent w-28">
              <span className="mb-2">
              <i className="fa-solid fa-person-skiing text-gray-600"></i>
              </span>
              <span className="text-center font-cairo">Ski</span>
            </button>
  </div>
  <div>
  <button className="flex flex-col items-center justify-center bg-transparent w-28">
              <span className="mb-2">
              <i className="fa-solid fa-golf-ball-tee text-gray-600"></i>
              </span>
              <span className="text-center font-cairo">Golf</span>
            </button>
  </div>
  <div>
  <button className="flex flex-col items-center justify-center bg-transparent w-28">
              <span className="mb-2">
              <i className="fa-solid fa-kitchen-set text-gray-600"></i>
              </span>
              <span className="text-center font-cairo">Cocina</span>
            </button>
  </div>
  <div>
  <button className="flex flex-col items-center justify-center bg-transparent w-28">
              <span className="mb-2">
              <i className="fa-brands fa-accessible-icon text-gray-600"></i>
              </span>
              <span className="text-center font-cairo">Accesibilidad</span>
            </button>
  </div>
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
  <div>
                <button className="flex flex-col items-center justify-center bg-transparent w-28 ml-8" onClick={handleFiltersModalToggle}>
              <i className="text-argentina text-xl fa-solid fa-sort"></i>
              Más filtros
            </button>
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
              padding: '20px'
            }
          }}
        >
          <DateRange
            editableDateInputs={true}
            onChange={handleDateRangeChange}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </Modal>
        <Modal
          isOpen={showFiltersModal} // Mostrar la ventana emergente de los filtros si showFiltersModal es true
          onRequestClose={handleFiltersModalToggle}
          style={{
            content: {
              width: '400px',
              height: '400px',
              maxHeight: 'none',
              margin: '30px auto',
              padding: '20px'
            }
          }}
        >
          <Filters />
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
              padding: '20px'
          }
        }}
        >
          <LocationSearch/>
        </Modal>
      </div>
    );
  }
  
  export default SearchBar;