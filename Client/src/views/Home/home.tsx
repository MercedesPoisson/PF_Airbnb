import SearchBar from "../../components/searchBar/searchBar"
import CardsContainer from "../../components/CardContainer/CardContainer"
import ScrollToTopButton from "../../components/scrollButton/ScrollToTopButton"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AnyAction } from "redux";
import getProperties from "../../redux/actions/getProperties";


interface Property {
    id_property: number,
    title: string;
    province: string;
    price_per_night: number;
    rating: number;
    images: string[];
}

function Home({properties}: { properties: Property[]}) {

    const dispatch = useDispatch()
    const querys: string = "page=0"

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getProperties(querys) as unknown as AnyAction);
        };
        fetchData();
    }, [dispatch]);



    return(
        <div>
            <SearchBar />
            <CardsContainer properties={properties}/>
            <ScrollToTopButton/>
        </div>
    )
}
export default Home