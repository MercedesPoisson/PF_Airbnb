import { useSelector } from "react-redux"

const CardDetails = () => {
    const properties = useSelector((state: any) => state.detail);
    console.log(properties);
    return <>
    Hola
    </>
   
}



export default CardDetails