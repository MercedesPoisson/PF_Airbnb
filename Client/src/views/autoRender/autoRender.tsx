import { useDispatch } from "react-redux";
import { useEffect } from "react";
import  getServices  from "../../redux/actions/getServices";
import { AnyAction } from "redux";
import getProvinces from "../../redux/actions/getProvinces";

function AutoRender(){
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getServices() as unknown as AnyAction);
            await dispatch(getProvinces() as unknown as AnyAction);
        };
        fetchData();
    }, [dispatch]);

    
    return(
        <>
        </>
        )
}

export default AutoRender