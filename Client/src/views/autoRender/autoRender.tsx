import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getServices } from "../../redux/actions/actions";
import { AnyAction } from "redux";

function AutoRender(){
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getServices() as unknown as AnyAction);
        };
        fetchData();
    }, [dispatch]);

    
    return(
        <>
        </>
        )
}

export default AutoRender