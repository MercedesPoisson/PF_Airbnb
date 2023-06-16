import SearchBar from "../../components/searchBar/searchBar"
import CardsContainer from "../../components/cardContainer/cardContainer"
import ScrollToTopButton from "../../components/scrollButton/ScrollToTopButton"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AnyAction } from "redux";
import getProperties from "../../redux/actions/getProperties";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
    const dispatch = useDispatch();
    const properties = useSelector((state: any) => state.properties);
    const location = useLocation();
    const navigate = useNavigate();
    const pages = useSelector((state: any) => state.pages)

    // Obtener el valor actual del parámetro "page" de la URL
    const searchParams = new URLSearchParams(location.search);
    const currentPage = parseInt(searchParams.get("page") || "0", 10);

    const [querys, setQuerys] = useState(`?page=${currentPage}`);
    

    const changeQuery = (increment: number) => {
        // Calcular el nuevo valor de la página
        const newPage = currentPage + increment;

        // Actualizar el valor del parámetro "page" en la URL
        searchParams.set("page", newPage.toString());
        navigate(`?${searchParams.toString()}`);

        // Actualizar el estado local
        setQuerys(`?page=${newPage.toString()}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getProperties(querys) as unknown as AnyAction);
        };
        fetchData();
    }, [dispatch, querys]);

    return (
        <div>
            <SearchBar />
            <CardsContainer properties={properties} />
            {currentPage > 0 && <button name="Prev" onClick={() => changeQuery(-1)}>{`<--`}</button>}
            <br />
            {currentPage < pages - 1 && <button name="Next" onClick={() => changeQuery(1)}>{`-->`}</button>}
            <ScrollToTopButton />
        </div>
    );
}

export default Home;