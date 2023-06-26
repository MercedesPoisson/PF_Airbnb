import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";

const DateRangePicker = (props: any) => {
  const { handleDateChange } = props
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const { start_date, end_date, Rents } = useSelector((state: any) => state.detail);
  let start: Date = new Date(start_date);
  const end: Date = new Date(end_date);
  const currentDate: Date = new Date();
  const reservedDates: any = [];

  if (start < currentDate) start = currentDate;

  for (let i = 0; i < Rents?.length; i++) {
    const rent = Rents[i];
    const startDate = new Date(rent.start_date);
    const endDate = new Date(rent.end_date);
    endDate.setDate(endDate.getDate());
    const dateRange = { start: startDate, end: endDate };

    reservedDates.push(dateRange);
  }

  useEffect(() => {
    if (startDate) {
      setEndDate(null);
    }
  }, [startDate]);

  useEffect(() => {
    if (startDate && endDate) {
      const selectedRange = { start: startDate, end: endDate };
      const isReserved = reservedDates.some(
        (reservedRange: any) =>
          selectedRange.start <= reservedRange.end && selectedRange.end >= reservedRange.start
      );

      if (isReserved) {
        alert("Las fechas seleccionadas ya están reservadas.");
        setStartDate(null);
        setEndDate(null);
      }    
    }
  }, [startDate, endDate, reservedDates, start, end]);

  

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          handleDateChange(date, endDate);
          setStartDate(date);
        }}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Check-in"
        className="border rounded-md h-10"
        minDate={new Date(start)}
        maxDate={new Date(end)}
        excludeDateIntervals={reservedDates}
        dateFormat="dd/MM/yyyy"
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => {
          handleDateChange(startDate, date);
          setEndDate(date);
        }}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        maxDate={new Date(end)}
        placeholderText="check-out"
        className="border rounded-md h-10 ml-2"
        excludeDateIntervals={reservedDates}
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
};

export default DateRangePicker;