import '@fortawesome/fontawesome-free/css/all.css';
import { useState } from 'react';
import Select from 'react-select'
import axios from 'axios';
import { Location, useLocation, useNavigate } from "react-router-dom";

function MaxGuestModal (props: any) {
    const { close } = props

    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);

    const [maxGuest, setMaxGuest] = useState(1)

    const guestOptions: any = []

    for(let i = 1; i <= 20; i++){
        guestOptions.push({ value: i, label: i })
    }

    const maxGuestHandler = (selectedValue: any) => {
        setMaxGuest(selectedValue.value)
    }

    const applyFilter = () => {
        searchParams.set('max_guests', `${maxGuest}`)
        navigate(`?${searchParams.toString()}`)
        close()
    }

    return (
        <div>
            <label>Seleccione la cantidad de personas</label>
            <Select
            options={guestOptions}
            value={maxGuest}
            onChange={maxGuestHandler}
            placeholder={maxGuest}
            ></Select>
            <button onClick={applyFilter}>Aplicar</button>
        </div>
    )
}

export default MaxGuestModal