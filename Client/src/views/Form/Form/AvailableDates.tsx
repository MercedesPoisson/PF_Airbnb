import { useState } from "react";

const AvailableDates = (props) => {
  const [selectedStartDay, setSelectedStartDay] = useState('');
  const [selectedStartMonth, setSelectedStartMonth] = useState('');
  const [selectedStartYear, setSelectedStartYear] = useState('');
  const [selectedEndDay, setSelectedEndDay] = useState('');
  const [selectedEndMonth, setSelectedEndMonth] = useState('');
  const [selectedEndYear, setSelectedEndYear] = useState('');

  // selector de dias
  const dayOptions = [];
  for (let i = 1; i <= 31; i++) {
    dayOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  // selector de meses
  const monthOptions = Array.from({ length: 12 }, (_, index) => (
    <option key={index + 1} value={index + 1}>
      {index + 1}
    </option>
  ));

  // selector de año del presente 3 años en adelante
  const currentYear = new Date().getFullYear();
  const maxYear = currentYear + 3;
  const yearOptions = Array.from({ length: maxYear - currentYear + 1 }, (_, index) => (
    <option key={currentYear + index} value={currentYear + index}>
      {currentYear + index}
    </option>
  ));

  const handleSaveDates = () => {
    const startDate = `${selectedStartYear}-${selectedStartMonth}-${selectedStartDay}`;
    const endDate = `${selectedEndYear}-${selectedEndMonth}-${selectedEndDay}`;
    props.setFormData(prevFormData => ({
      ...prevFormData,
      start_date: startDate,
      end_date: endDate
    }));
    props.nextStep(); 
  };

  return (
    <div>
      <div className="font-cairo gap-2 w-3/4 mx-auto">
      <div>
          <div className="font-cairo text-2xl">Personalizá las fechas disponibles</div>
          <p className="font-cairo">Podés elegir las fechas en las que queres que tu propiedad este disponible </p>
        </div>
        <div className="font-cairo">Seleccioná la fecha en que empieza su disponibilidad</div>
        <select className="w-20 border rounded p-1" value={selectedStartDay} onChange={e => setSelectedStartDay(e.target.value)}>
          <option value="" >Día</option>
          {dayOptions}
        </select>
        <select className="w-20 border rounded p-1" value={selectedStartMonth} onChange={e => setSelectedStartMonth(e.target.value)}>
          <option value="">Mes</option>
          {monthOptions}
        </select>
        <select className="w-20 border rounded p-1" value={selectedStartYear} onChange={e => setSelectedStartYear(e.target.value)}>
          <option value="">Año </option>
          {yearOptions}
        </select>
        <div>
        <div className="font-cairo">Seleccioná la fecha en que deja de estar disponible</div>
        <select className="w-20 border rounded p-1" value={selectedEndDay} onChange={e => setSelectedEndDay(e.target.value)}>
          <option value="">Día</option>
          {dayOptions}
        </select>
        <select className="w-20 border rounded p-1" value={selectedEndMonth} onChange={e => setSelectedEndMonth(e.target.value)}>
          <option value="">Mes</option>
          {monthOptions}
        </select>
        <select className="w-20 border rounded p-1" value={selectedEndYear} onChange={e => setSelectedEndYear(e.target.value)}>
          <option value="">Año</option>
          {yearOptions}
        </select>
      </div>
      <div className="col-span-2 font-cairo-play flex justify-start ml-10">
        <button
          className="border border-argentina rounded p-1 w-32 mt-4 mr-2"
          onClick={props.previousStep}
        >
          Anterior
        </button>
        <button
          className="border border-argentina rounded p-1 w-32 mt-4"
          onClick={handleSaveDates}
        >
          Siguiente
        </button>
      </div>
      </div>

      

      
    </div>
  );
};

export default AvailableDates;


// import 'react-date-range/dist/styles.css';
// import 'react-date-range/dist/theme/default.css';
// import { DateRange } from 'react-date-range';
// import { useState } from 'react';

// const AvailableDates = (props) => {
//   const [state, setState] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: 'selection'
//     }
//   ]);
//   const [showDateRange, setShowDateRange] = useState(false);
//   const [buttonText, setButtonText] = useState('Selecciona las fechas');
  

//   const handleDateButtonClick = () => {
//     setShowDateRange(!showDateRange);
//   };

//   const handleDateRangeChange = (ranges: any) => {
//     if (typeof ranges === 'object' && ranges !== null) {
//       const transformedState = Object.values(ranges).map((range: any) => ({
//         startDate: range['startDate'] ? range['startDate'].toISOString().split('T')[0] : '',
//         endDate: range['endDate'] ? range['endDate'].toISOString().split('T')[0] : '',
//         key: range['key'] || 'selection'
//       }));
//       setState(transformedState);
  
//       if (transformedState.length > 0) {
//         const startDateFormatted = transformedState[0].startDate;
//         const endDateFormatted = transformedState[0].endDate;
//         props.setFormData((prevFormData) => ({
//           ...prevFormData,
//           start_date: startDateFormatted,
//           end_date: endDateFormatted
//         }));
  
//         setButtonText(`${startDateFormatted} - ${endDateFormatted}`);
//       }
//     }
//   };


//   return (
//     <div>
//       <span className="w-px h-6 bg-gray-200 justify"></span>
//       <button
//         className="text-black p-3 bg-white w-60 h-12 border-t border-b border-gray-200 shadow-md font-cairo flex items-center"
//         onClick={() => {
//           handleDateButtonClick();
//          }}
//       >
//         <i className="fas fa-calendar-alt text-gray-300 mr-2"></i>
//         {buttonText}
//       </button>

//       <DateRange
//         editableDateInputs={true}
//         onChange={handleDateRangeChange}
//         moveRangeOnFirstSelection={false}
//         ranges={state}
//       />

//       <div className="col-span-2 font-cairo-play flex justify-start ml-10">
//         <button
//           className="border border-argentina rounded p-1 w-32 mt-4 mr-2"
//           onClick={props.previousStep}
//         >
//           Anterior
//         </button>
//         <button
//           className="border border-argentina rounded p-1 w-32 mt-4"
//           onClick={props.nextStep}
//         >
//           Siguiente
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AvailableDates;