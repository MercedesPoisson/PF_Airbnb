import Card from "../card/card";

interface Property {
    id_property: number,
    title: string;
    province: string;
    price_per_night: number;
    rating: number;
    images: string[];
  }

function CardsContainer({ properties }: { properties: Property[]}) {
  return (
    <div>
      {properties &&
        properties.map(({ id_property, title, province, price_per_night, rating, images }) => {
          return (
            <Card
              key={id_property} 
              title={title}
              province={province}
              price_per_night={price_per_night}
              rating={rating}
              images={images}
            />
          );
        })}
    </div>
  );
}

export default CardsContainer;