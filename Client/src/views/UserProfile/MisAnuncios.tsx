import Card from "../../components/Card/card";
import UserNavBar from "./UserNavBar";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

const MisAnuncios = () => {
    // const properties = useSelector((state:any) => state.properties);
    const user = useSelector((state:any) => state.user);

    // const myProperties = properties.filter((property:any) => property.id_user === user.id_user);
    
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
                    {user.Properties && user.Properties.map((property:any) => (
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