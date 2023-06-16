import Card from "../card/card";

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
    <div className="grid grid-cols-3 gap-4">
      {properties &&
        properties.map(
          ({ id_property, title, location, province, price_per_night, rating, images }) => {
            return (
              <div key={id_property}>
                <Card
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