import { useSelector } from "react-redux"

const CardDetails = () => {
    const properties = useSelector(state => state);
    console.log(properties);

    return <>Hola</>
}



export default CardDetails