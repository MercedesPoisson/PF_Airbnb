import { useEffect, useState } from "react";
import axios from "axios";


const DashRent = () => {

    const [rents, setRents] = useState([]);



    useEffect(() => {
        async function fetchProperties() {
            try {
                const response = await axios.get("http://localhost:3001/property/all"); // Ajusta la URL de la solicitud según corresponda
                setRents(response.data.Rents);
            } catch (error) {
                console.error(error);
            }
        }

        fetchProperties();
    }, [open]);





    return (
        <div>
            <table className="w-full text-gray-700">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Id_Rent</th>
                        <th>start_date</th>
                        <th>end_date</th>
                        <th>guests_number</th>
                        <th>amount</th>
                        <th>creation_date</th>



                    </tr>
                </thead>
                <tbody>
                    {rents && rents.map((rents: any, index: number) => (
                        <tr key={rents.id_property} className="text-center">
                            <td >#{index + 1}</td>
                            <td >{rents.rent_id}</td>
                            <td>{rents.start_date}</td>
                            <td>{rents.end_date}</td>
                            <td>{rents.guests_number}</td>
                            <td>{rents.amount}</td>
                            <td>{rents.creation_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>



    )
}
export default DashRent;