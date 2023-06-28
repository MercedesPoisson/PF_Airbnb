import { useEffect } from "react";
import Card from "../../components/Card/card";
import UserNavBar from "./UserNavBar";
import { useDispatch, useSelector } from "react-redux";
import getProperties from "../../redux/actions/getProperties";
// import { Link } from "react-router-dom";
import { AnyAction } from "redux";

const MisAnuncios = () => {
    const properties = useSelector((state:any) => state.properties);
    const user = useSelector((state:any) => state.user);
    const dispatch = useDispatch()

    const myProperties = properties.filter((property:any) => property.id_user === user.id_user);

    useEffect(()=>{
        dispatch(getProperties("?page") as unknown as AnyAction)
    },[dispatch])
    
    return(
        <div>
            <div>
                <UserNavBar />
            </div>
            <div className="ml-10 mt-20 font-cairo">
                <div className="uppercase font-bold mb-3">
                   mis anuncios 
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 ml-4 z-0">
                    {myProperties && myProperties.map((property:any) => (
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