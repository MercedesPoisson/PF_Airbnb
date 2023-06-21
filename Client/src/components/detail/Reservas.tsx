import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div>
      <div className="w-1/2">
          <div className="border rounded-xl w-96 mt-4 flex items-center justify-center">
            <div>
              <div>
                <i className="fa-solid fa-dollar-sign text-argentina mr-1"></i>
                {property.price_per_night} {" noche"}
              </div>
              <div>
                <i className="fa-regular fa-star text-argentina" />
                {property.rating}
              </div>
              <div className='mt-3'>
                <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Check-in"
        className="border rounded-md h-10"
        minDate={new Date(start)}
        maxDate={new Date(end)}
        excludeDateIntervals={reservedDates}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        maxDate={new Date(end)}
        placeholderText="check-out"
        className="border rounded-md h-10 ml-2"
        excludeDateIntervals={reservedDates}
      />
              </div>
              <div>
                <select className='border h-10 w-80 rounded-xl mt-3'>
                  <option disabled selected hidden>Viajeros: 1 huésped</option>
                </select>
                <div>
                  <button className="border border-argentina rounded p-1 w-32 mt-3">
                    Reservar
                  </button>
                  <button className="border border-argentina rounded p-1 w-32 mt-3 ml-3">
                    Pagar
                  </button>
                </div>
                <div className='text-sm'>No vamos a cobrarte ningún cargo por el momento</div>

                <div className='mt-6'>espacio para previsualizar, precio* cantidad de noches = total</div>
                <div>aplican promociones, si o no, total del descuento</div>
                <div className='mb-16'>muestro total a pagar de cantidad de noches - descuentos</div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default DateRangePicker;