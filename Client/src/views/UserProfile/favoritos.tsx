import { useEffect } from "react";
import UserNavBar from "./UserNavBar";
import { useDispatch } from "react-redux";

const Favoritos = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getFavor)
    })
    return(
        <div>
            <UserNavBar />
        </div>
    )
}

export default Favoritos;