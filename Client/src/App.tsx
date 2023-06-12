import { Route } from "react-router-dom";
import Home from "./views/Home/Home";
import SearchBar from "./components/searchBar/searchBar";
import "./App.css"

function App() {
  
  return (
    <div>
      <SearchBar />
      <Route exact path="/" render={() => <Home />} />
     
    </div>
  )
}

export default App
