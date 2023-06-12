import './App.css'
import SearchBar from './components/searchBar/searchBar';
import ScrollToTopButton from './components/scrollButton/ScrollToTopButton';
import Card from './components/card/Card';
import 'tailwindcss/tailwind.css';


function App() {
  
  return (
    <div>
      <SearchBar />
      <Card />
      <ScrollToTopButton/>
    </div>
  )
}

export default App
