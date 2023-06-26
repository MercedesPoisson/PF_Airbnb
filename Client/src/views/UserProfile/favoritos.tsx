import { useEffect } from "react";
import UserNavBar from "./UserNavBar";
import { useDispatch, useSelector } from "react-redux";
import getFavorites from "../../redux/actions/getFavorites";
import { useAuth0 } from "@auth0/auth0-react";
import { AnyAction } from "redux";
import CardsContainer from "../../components/cardContainer/cardContainer";

const Favoritos = () => {
    const {id_user} = useSelector((state:any)=> state.user )
    const favorites = useSelector((state:any)=> state.favorites)
    const dispatch = useDispatch()
    const {isAuthenticated} = useAuth0()

    console.log("Estoy en favorites")
    console.log(id_user);
    console.log(isAuthenticated);

    useEffect(()=>{
        dispatch(getFavorites(id_user)as unknown as AnyAction)
    },[dispatch])

    return(
        isAuthenticated && 
        <div>
            <UserNavBar />
            <CardsContainer properties={favorites} />
        </div>
    )
}

export default Favoritos;