import { useDispatch } from "react-redux";
import { useParams } from "react-router"
import getPropertyDetail from "../../redux/actions/getPropertyDetail";
import { useEffect } from "react";
import { AnyAction } from "redux";
import CardDetails from "../../components/detail/CardDetail";




const Details = () => {
    const { idProperty } = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getPropertyDetail(idProperty) as unknown as AnyAction)
        };
        fetchData()
    }, [dispatch])




    return (
    <>
    <CardDetails />
    </>
    )
}



export default Details