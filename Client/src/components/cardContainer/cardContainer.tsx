import { useEffect } from "react";
import Card from "../Card/card";
import { useDispatch, useSelector } from "react-redux";
import getFavorites from "../../redux/actions/getFavorites";
import { AnyAction } from "redux";

interface Property {
  id_property: number;
  title: string;
  location: string,
  province: string;
  price_per_night: number;
  rating: number;
  images: string[];
}

function CardsContainer({ properties }: { properties: Property[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 ml-4 z-0">
      {properties &&
        properties.map(
          ({ id_property, title, location, province, price_per_night, rating, images }) => {
            return (
              <div key={id_property}>
                <Card
                  id_property={id_property}
                  title={title}
                  location={location}
                  province={province}
                  price_per_night={price_per_night}
                  rating={rating}
                  images={images}
                />
              </div>
            );
          }
        )}
    </div>
  );
}

export default CardsContainer;