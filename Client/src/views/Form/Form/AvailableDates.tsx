import { useState, useEffect } from "react";

const AvailableDates = (props) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  const [selectedStartDay, setSelectedStartDay] = useState(currentDay.toString());
  const [selectedStartMonth, setSelectedStartMonth] = useState(currentMonth.toString());
  const [selectedStartYear, setSelectedStartYear] = useState(currentYear.toString());
  const [selectedEndDay, setSelectedEndDay] = useState("");
  const [selectedEndMonth, setSelectedEndMonth] = useState("");
  const [selectedEndYear, setSelectedEndYear] = useState("");
  const [errors, setErrors] = useState({
    end_date: ""
  });

  // NO permir fechas anteriores a la actual
  const dayOptions = [];
  for (let i = currentDay; i <= 31; i++) {
    dayOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const monthOptions = Array.from({ length: 12 }, (_, index) => {
    const month = index + 1;
    if (currentMonth <= month) {
      return (
        <option key={month} value={month}>
          {month}
        </option>
      );
    }
    return null;
  });

  const yearOptions = Array.from({ length: 4 }, (_, index) => {
    const year = currentYear + index;
    if (currentMonth === 12 && currentDay === 31) {
      return (
        <option key={year} value={year}>
          {year}
        </option>
      );
    } else if (index === 0 || index < 3) {
      return (
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return null;
  });

  useEffect(() => {
    // si se seleccionaron valores para end_date borrar error
    if (selectedEndDay && selectedEndMonth && selectedEndYear) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        end_date: ""
      }));
    }
  }, [selectedEndDay, selectedEndMonth, selectedEndYear]);

  const handleSaveDates = () => {
    // validacion antes de guardar
    if (!selectedEndDay || !selectedEndMonth || !selectedEndYear) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        end_date: "Debes elegir una fecha de finalización"
      }));
      return;
    }

    const startDate = `${selectedStartYear}-${selectedStartMonth}-${selectedStartDay}`;
    const endDate = `${selectedEndYear}-${selectedEndMonth}-${selectedEndDay}`;

    props.setFormData((prevFormData) => ({
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
          <p className="font-cairo">Podés elegir las fechas en las que querés que tu propiedad esté disponible</p>
        </div>
        <div className="font-cairo">Seleccioná la fecha en que empieza su disponibilidad</div>
        <select
          className="w-20 border rounded p-1"
          value={selectedStartDay}
          onChange={(e) => setSelectedStartDay(e.target.value)}
        >
          <option value="">Día</option>
          {dayOptions}
        </select>
        <select
          className="w-20 border rounded p-1"
          value={selectedStartMonth}
          onChange={(e) => setSelectedStartMonth(e.target.value)}
        >
          <option value="">Mes</option>
          {monthOptions}
        </select>
        <select
          className="w-20 border rounded p-1"
          value={selectedStartYear}
          onChange={(e) => setSelectedStartYear(e.target.value)}
        >
          <option value="">Año</option>
          {yearOptions}
        </select>
        <div>
          <div className="font-cairo">Seleccioná la fecha en que deja de estar disponible</div>
          <select
            className="w-20 border rounded p-1"
            value={selectedEndDay}
            onChange={(e) => setSelectedEndDay(e.target.value)}
          >
            <option value="">Día</option>
            {dayOptions}
          </select>
          <select
            className="w-20 border rounded p-1"
            value={selectedEndMonth}
            onChange={(e) => setSelectedEndMonth(e.target.value)}
          >
            <option value="">Mes</option>
            {monthOptions}
          </select>
          <select
            className="w-20 border rounded p-1"
            value={selectedEndYear}
            onChange={(e) => setSelectedEndYear(e.target.value)}
          >
            <option value="">Año</option>
            {yearOptions}
          </select>
          {errors.end_date && <p className="text-red-500">{errors.end_date}</p>}
        </div>
        <div className="col-span-2 font-cairo-play flex justify-start ml-10">
          <button className="border border-argentina rounded p-1 w-32 mt-4 mr-2" onClick={props.previousStep}>
            Anterior
          </button>
          <button className="border border-argentina rounded p-1 w-32 mt-4" onClick={handleSaveDates}>
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