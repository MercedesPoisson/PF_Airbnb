import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

interface LocationProps {
  formData: {
    province: string;
    location: string;
    address: string;
    zip_code: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      province: string;
      location: string;
      address: string;
      zip_code: string;
    }>
  >;
  nextStep: () => void;
  previousStep: () => void;
}

const Location = (props: LocationProps) => {
  const [provinces, setProvinces] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState<{ value: string; label: string } | null>(
    props.formData.province ? { value: props.formData.province, label: props.formData.province } : null
  );
  const [selectedLocation, setSelectedLocation] = useState<{ value: string; label: string } | null>(
    props.formData.location ? { value: props.formData.location, label: props.formData.location } : null
  );
  const [searchValue, setSearchValue] = useState("");
  const [errors, setErrors] = useState({
    province: "",
    location: "",
    address: "",
    zip_code: "",
  });

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get("http://localhost:3001/locations");
        const data = response.data;
        const options = data.map((province: any) => ({
          value: province.nombre,
          label: province.nombre,
        }));
        options.sort((a: any, b: any) => a.label.localeCompare(b.label));
        setProvinces(options);
      } catch (error) {
        console.log("Error fetching provinces:", error);
      }
    };
    fetchProvinces();
  }, []);

  useEffect(() => {
    if (searchValue.length > 0) {
      const fetchLocations = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/locations/${selectedProvince?.value}?city=${searchValue}`
          );
          const data = response.data[0];
          const options = data.ciudades.map((location: any) => ({
            value: location.nombre,
            label: location.nombre,
          }));
          setLocations(options);
        } catch (error) {
          console.log("Error fetching locations:", error);
        }
      };
      if (selectedProvince) {
        fetchLocations();
      } else {
        setLocations([]);
      }
    }
  }, [selectedProvince, searchValue]);

  const handleProvinceChange = (selectedOption: any) => {
    setSelectedProvince(selectedOption);
    setSelectedLocation(null);
    setSearchValue("");
    props.setFormData((prevState) => ({
      ...prevState,
      province: selectedOption.value,
      location: "",
    }));
  };

  const handleLocationChange = (selectedOption: any) => {
    setSelectedLocation(selectedOption);
    props.setFormData((prevState) => ({
      ...prevState,
      location: selectedOption.value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!selectedProvince) {
      newErrors.province = "Debes seleccionar una provincia";
      valid = false;
    } else {
      newErrors.province = "";
    }

    if (!selectedLocation) {
      newErrors.location = "Debes seleccionar una localidad";
      valid = false;
    } else {
      newErrors.location = "";
    }

    if (!props.formData.address) {
      newErrors.address = "Debes ingresar una dirección";
      valid = false;
    } else {
      newErrors.address = "";
    }

    if (!props.formData.zip_code) {
      newErrors.zip_code = "Debes ingresar un código postal";
      valid = false;
    } else {
      newErrors.zip_code = "";
    }

    setErrors(newErrors);
    return valid;
  };

  useEffect(() => {
    // Guarda los datos en el local storage cuando se actualiza formData
    localStorage.setItem("locationFormData", JSON.stringify(props.formData));
    console.log("FormData saved:", props.formData);
  
    // Actualiza los estados selectedProvince y selectedLocation con los valores del formData
    setSelectedProvince(
      props.formData.province
        ? { value: props.formData.province, label: props.formData.province }
        : null
    );
    setSelectedLocation(
      props.formData.location
        ? { value: props.formData.location, label: props.formData.location }
        : null
    );
  }, [props.formData]);
  

  useEffect(() => {
    // Carga los datos del local storage al iniciar el componente
    const storedFormData = localStorage.getItem("locationFormData");
    if (storedFormData) {
      props.setFormData(JSON.parse(storedFormData));
    }
    console.log("FormData loaded:", storedFormData)
  }, []);
  

  return (
    <div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto ">
        <div>
          <div className="font-cairo text-2xl">¿Dónde queda tu propiedad?</div>
          <p className="font-cairo">
            Solo vamos a compartir tu dirección exacta una vez confirmada la
            reserva.
          </p>
        </div>
        <div className="items-center">
          <div className="mb-2">
            <div className="relative">
              <Select
                options={provinces}
                value={selectedProvince}
                onChange={handleProvinceChange}
                placeholder="Selecciona una provincia"
              />
            </div>
            {errors.province && (
              <div className="text-red-500 text-sm">{errors.province}</div>
            )}
          </div>
          <div className="mb-2">
            <div className="relative">
              <Select
                options={locations}
                value={selectedLocation}
                onChange={handleLocationChange}
                onInputChange={(newValue) => {
                  setSearchValue(newValue);
                }}
                placeholder="Selecciona una localidad"
              />
            </div>
            {errors.location && (
              <div className="text-red-500 text-sm">{errors.location}</div>
            )}
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Dirección"
              className="border border-gray-400 rounded w-full py-2 px-3"
              value={props.formData.address}
              onChange={(e) =>
                props.setFormData((prevState) => ({
                  ...prevState,
                  address: e.target.value,
                }))
              }
            />
            {errors.address && (
              <div className="text-red-500 text-sm">{errors.address}</div>
            )}
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Código postal"
              className="border border-gray-400 rounded w-full py-2 px-3"
              value={props.formData.zip_code}
              onChange={(e) =>
                props.setFormData((prevState) => ({
                  ...prevState,
                  zip_code: e.target.value,
                }))
              }
            />
            {errors.zip_code && (
              <div className="text-red-500 text-sm">{errors.zip_code}</div>
            )}
          </div>
        </div>
        <div className="col-span-1 font-cairo-play flex justify-start ml-10">
          <button
            className="border border-argentina rounded p-1 w-32 mt-4 mr-2"
            onClick={props.previousStep}
          >
            Anterior
          </button>
          <button
            className="border border-argentina rounded p-1 w-32 mt-4"
            onClick={() => {
              if (validateForm()) {
                props.nextStep();
              }
            }}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;