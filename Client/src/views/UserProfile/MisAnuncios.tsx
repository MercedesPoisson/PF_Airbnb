import Card from "../../components/Card/card";
import UserNavBar from "./UserNavBar";
import { useSelector } from "react-redux";

const MisAnuncios = () => {
    const user = useSelector((state:any) => state.user);
    const myProperties = user.Properties;

    return(
        <div>
            <div>
                <UserNavBar />
            </div>
            <div className="ml-10 mt-10 font-cairo">
                <div className="uppercase font-bold mb-3">
                   mis anuncios 
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 ml-4 z-0">
                    {myProperties.map((property:any) => (
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
}

export default MisAnuncios;