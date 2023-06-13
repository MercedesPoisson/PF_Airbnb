import './App.css'
import { Route, Routes } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import Home from "../../Client/src/views/Home/home";
import Form from "../../Client/src/views/Form/Form";


function App() {
  console.log("esto se ve?");
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Form/>} />
        {/* <Route path="/property/:id" element={<Detail/>} */}
        
      </Routes>  
    </div>
  );
}

export default App;

