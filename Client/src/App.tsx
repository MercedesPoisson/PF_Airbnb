import './App.css'
import { Route, Routes } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import Home from "../../Client/src/views/Home/home";


function App() {
  console.log("esto se ve?");
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/property/:id" element={<Detail/>} */}
        {/* <Route path="/post" exact component={<Form/>} /> */}
      </Routes>  
    </div>
  );
}

export default App;

