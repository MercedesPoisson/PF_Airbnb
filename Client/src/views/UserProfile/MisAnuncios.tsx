import Card from "../../components/card/card";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const MisAnuncios = () => {
  const user = useSelector((state: any) => state.user);
  const [properties, setProperties] = useState([]);
  console.log(properties);


  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://airebnb.onrender.com/users/${user.id_user}`
      );
      setProperties(
        response.data.properties.filter(
          (properties: any) => properties.is_active
        )
      );
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div>
      <div></div>
      <div className="ml-10 mt-10 font-cairo">
        <div className="uppercase font-bold mb-3">mis anuncios</div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 ml-4">
          {properties &&
            properties.map((property: any) => (
              <Card
                key={property.id_property}
                title={property.title}
                location={property.location}
                province={property.province}
                price_per_night={property.price_per_night}
                rating={property.rating}
                images={property.images}
                id_property={property.id_property}
                // showLink={false}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MisAnuncios;
