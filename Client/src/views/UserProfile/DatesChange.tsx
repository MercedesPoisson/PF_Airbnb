import { useState, useEffect } from "react";
import updateProperty from "../../redux/actions/updateProperty";

const DateChange = (props) => {
  const { propertyData } = props; // Datos existentes de la propiedad

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
  const [errors, setErrors] = useState({ end_date: "" });

  // NO permitir fechas anteriores a la actual
  const dayOptions = Array.from({ length: 31 }, (_, index) => {
    const day = index + 1;
    return (
      <option key={day} value={day}>
        {day}
      </option>
    );
  });

  const monthOptions = Array.from({ length: 12 }, (_, index) => {
    const month = index + 1;
    return (
      <option key={month} value={month}>
        {month}
      </option>
    );
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
    // Establecer valores iniciales de las fechas
    if (propertyData) {
      const startDate = new Date(propertyData.start_date);
      const endDate = new Date(propertyData.end_date);

      setSelectedStartDay(startDate.getDate().toString());
      setSelectedStartMonth((startDate.getMonth() + 1).toString());
      setSelectedStartYear(startDate.getFullYear().toString());
      setSelectedEndDay(endDate.getDate().toString());
      setSelectedEndMonth((endDate.getMonth() + 1).toString());
      setSelectedEndYear(endDate.getFullYear().toString());
    }
  }, [propertyData]);

  useEffect(() => {
    // Si se seleccionaron valores para end_date, borrar error
    if (selectedEndDay && selectedEndMonth && selectedEndYear) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        end_date: ""
      }));
    }
  }, [selectedEndDay, selectedEndMonth, selectedEndYear]);

  const handleSaveDates = async () => {
    // Validación antes de guardar
    if (!selectedEndDay || !selectedEndMonth || !selectedEndYear) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        end_date: "Debes elegir una fecha de finalización"
      }));
      return;
    }

    const startDate = new Date(`${selectedStartYear}-${selectedStartMonth}-${selectedStartDay}`);
    const endDate = new Date(`${selectedEndYear}-${selectedEndMonth}-${selectedEndDay}`);

    if (startDate > endDate) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        end_date: "La fecha de finalización debe ser posterior a la fecha de inicio"
      }));
      return;
    }

    // Datos actualizados de la propiedad
    const updatedProperty = {
      ...propertyData,
      start_date: startDate.toISOString(),
      end_date: endDate.toISOString()
    };

    try {
      await updateProperty(updatedProperty);
      // Manejar el resultado exitoso (por ejemplo, mostrar una notificación)
    } catch (error) {
      console.log("Error al actualizar la propiedad:", error);
      // Manejar el error (por ejemplo, mostrar un mensaje de error)
    }

    // Continuar con el siguiente paso
    props.nextStep();
  };

  // Resto del código
};
export default DateChange;