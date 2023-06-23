import { useState } from 'react';
// import NumericInput from 'react-numeric-input';
// import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function MaxGuestModal(props:any) {
  const { close } = props;

  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);

  const [maxGuest, setMaxGuest] = useState(1);

  const maxGuestHandler = (value:any) => {
    setMaxGuest(value);
  };

  const increaseMaxGuest = () => {
    setMaxGuest((prevValue) => prevValue + 1);
  };

  const decreaseMaxGuest = () => {
    setMaxGuest((prevValue) => Math.max(prevValue - 1, 1));
  };

  const applyFilter = () => {
    searchParams.set('max_guests', `${maxGuest}`);
    navigate(`?${searchParams.toString()}`);
    close();
  };

  return (
    <div className="max-guest-modal flex justify-center  h-full font-cairo">
      <div className="w-64">
        <label >Seleccione la Cantidad de Huéspedes</label>
        <div className="flex items-center">
          <button
            className="px-3 py-1 border rounded-l"
            onClick={decreaseMaxGuest}
          >
            -
          </button>
          <input
            type="number"
            min={1}
            max={20}
            value={maxGuest}
            onChange={(e) => maxGuestHandler(parseInt(e.target.value))}
            className="form-input w-16 text-center"
          />
          <button
            className="px-3 py-1 border rounded-r"
            onClick={increaseMaxGuest}
          >
            +
          </button>
        </div>
        <button
          className="mt-4 px-4 py-2 border border-argentina rounded"
          onClick={applyFilter}
        >
          Aplicar
        </button>
      </div>
    </div>
  );
}

export default MaxGuestModal;


// import '@fortawesome/fontawesome-free/css/all.css';
// import { useState } from 'react';
// import Select from 'react-select'
// import axios from 'axios';
// import { Location, useLocation, useNavigate } from "react-router-dom";

// function MaxGuestModal (props: any) {
//     const { close } = props

//     const location = useLocation();
//     const navigate = useNavigate();

//     const searchParams = new URLSearchParams(location.search);

//     const [maxGuest, setMaxGuest] = useState(1)

//     const guestOptions: any = []

//     for(let i = 1; i <= 20; i++){
//         guestOptions.push({ value: i, label: i })
//     }

//     const maxGuestHandler = (selectedValue: any) => {
//         setMaxGuest(selectedValue.value)
//     }

//     const applyFilter = () => {
//         searchParams.set('max_guests', `${maxGuest}`)
//         navigate(`?${searchParams.toString()}`)
//         close()
//     }

//     return (
//         <div>
//             <label>Seleccione la cantidad de personas</label>
//             <Select
//             options={guestOptions}
//             value={maxGuest}
//             onChange={maxGuestHandler}
//             placeholder={maxGuest}
//             ></Select>
//             <button onClick={applyFilter}>Aplicar</button>
//         </div>
//     )
// }

// export default MaxGuestModal