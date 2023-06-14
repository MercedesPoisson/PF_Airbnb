import SearchBar from "../../components/searchBar/searchBar"
import CardsContainer from "../../components/CardContainer/CardContainer"
import ScrollToTopButton from "../../components/scrollButton/ScrollToTopButton"

interface Property {
    id_property: number,
    title: string;
    province: string;
    price_per_night: number;
    rating: number;
    images: string[];
  }


function Home({properties}: { properties: Property[]}) {
    
    return(
        <div>
            <SearchBar />
            <CardsContainer properties={properties}/>
            <ScrollToTopButton/>
        </div>
    )
}
export default Home