import '@fortawesome/fontawesome-free/css/all.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select'
import axios from 'axios';

function LocationSearch() {

    const provinces = useSelector((state: any) => state.provinces);
    let orderProvinces = provinces.sort((a: any, b: any) => a.nombre.localeCompare(b.nombre))
    

    const [prov, setProv] = useState('');
    const [isDisabled, setIsDisabled] = useState(true)

    const optionProvs = [{ value: '', label: 'Todas las provincias'}, ...orderProvinces.map((prov: any) => {
        return { value: prov.nombre, label: prov.nombre }
    })]

    const handleProvChange = (selectedOption: any) => {
        setProv(selectedOption.value)
        if(selectedOption.value === '') setIsDisabled(true)
        setIsDisabled(false)
    }

 

    const selectedOption = optionProvs.find((option) => option.value === prov);

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
                <label className='text-black p3 font-cairo'>Provincia</label>
                <Select 
                options={optionProvs} 
                value={selectedOption} 
                placeholder="Selecciona una provincia" 
                onChange={handleProvChange} isSearchable={true} 
                ></Select>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default LocationSearch