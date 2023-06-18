import '@fortawesome/fontawesome-free/css/all.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select'
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";

function LocationSearch() {

    const provinces = useSelector((state: any) => state.provinces);
    let orderProvinces = provinces.sort((a: any, b: any) => a.nombre.localeCompare(b.nombre))
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    

    const [prov, setProv] = useState('');
    const [city, setCity] = useState('');
    const [isDisabled, setIsDisabled] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [options, setOptions]: any = useState([])


    const optionProvs = [{ value: '', label: 'Todas las provincias'}, ...orderProvinces.map((prov: any) => {
        return { value: prov.nombre, label: prov.nombre }
    })]

    const handleProvChange = (selectedProv: any) => {
        setProv(selectedProv.value)
        if(selectedProv.value === '') setIsDisabled(true)
        setIsDisabled(false)
    }

    const handleCityChange = (selectedCity: any) => {
        setCity(selectedCity.value)
    }

    const queryHandler = () => { 
        if(prov.length){
            searchParams.set("province", prov)
            searchParams.set("page", "0");
        }
        else searchParams.delete("province")
        if(city.length) searchParams.set("location", city)
        else searchParams.delete("location")
        navigate(`?${searchParams.toString()}`);
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/locations/${prov}?city=${searchValue}`)
            const data = response.data[0];
            const newOptions: any = [{ value: '', label: 'Todas las ciudades'}, ... data.ciudades.map((city: any) => ({
                value: city.nombre,
                label: city.nombre
            }))]
            setOptions(newOptions)
        } catch (error) {
            console.log('error catching locations')
        }
    }

    useEffect(() => {
        if(searchValue.length >= 1) fetchData()
        else {
            
            setOptions([{ value: '', label: 'Todas las ciudades'}])
        }
    }, [searchValue])

    const handleInputChange = (newValue: any) => {
        setSearchValue(newValue)
    };

    const selectedProv = optionProvs.find((option) => option.value === prov);

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
                <label className='text-black p3 font-cairo'>Provincia</label>
                <Select 
                options={optionProvs} 
                value={selectedProv} 
                placeholder="Selecciona una provincia" 
                onChange={handleProvChange} isSearchable={true} 
                ></Select>
            </div>
            <br/>
            <div className='flex flex-col gap2'>
                <label className='text-black p3 font-cairo'>Ciudad</label>
                <Select
                isDisabled={isDisabled}
                value={city}
                options={options}
                onInputChange={handleInputChange}
                onChange={handleCityChange}
                ></Select>
            </div>
            <button onClick={queryHandler}>Aceptar</button>
            <div>
                
            </div>
        </div>
    )
}

export default LocationSearch