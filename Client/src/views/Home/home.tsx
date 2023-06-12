import SearchBar from "../../components/searchBar/searchBar"
import Card from "../../components/card/Card"
import ScrollToTopButton from "../../components/scrollButton/ScrollToTopButton"

function Home() {
    return(
        <div>
            <SearchBar />
            <Card />
            <ScrollToTopButton/>
        </div>

    )
}

export default Home