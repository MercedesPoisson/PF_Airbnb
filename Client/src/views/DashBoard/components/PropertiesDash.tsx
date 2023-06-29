
import { useEffect, useState } from "react";
import axios from "axios";

const PropertiesDash = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
      async function fetchProperties() {
        try {
          const response = await axios.get("pfback-production-a519.up.railway.app/property/all"); // Ajusta la URL de la solicitud según corresponda          setProperties(response.data);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchProperties();
    }, []);

 console.log(properties);

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Properties</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>Property ID</th>
              <th>User ID</th>
              <th>Is Active</th>
              <th>Property Province</th>
              <th>Property Location</th>
              <th>Property Type</th>
              <th>Price per Night</th>
            </tr>
          </thead>
          <tbody>
            {properties && properties.map((property: any) => (
              <tr key={property.id_property} className="text-center">
                <td >{property.id_property}</td>
                <td>{property.id_user}</td>
                <td>{property.is_active ? "True" : "False"}</td>
                <td>{property.province}</td>
                <td>{property.location}</td>
                <td>{property.property_type}</td>
                <td>{property.price_per_night}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertiesDash;