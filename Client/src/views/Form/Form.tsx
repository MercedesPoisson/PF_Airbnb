// import { useDispatch } from "react-redux"
// import QuantityCounter from "./QuantityCounter";
// import ServicesCheck from "./ServicesCheck";
// import Location from "./Location";
// import Cloudinary from "./Cloudinary";
// import PropertyType from "./PropertyType";
// import Title from "./TitleAndDescription";

import Price from "./Price";
import ScrollToTopButton from "../../components/scrollButton/ScrollToTopButton";
import Intro from "./FirstView";
import Discount from "./Discount";
import NavBar from "./navBar";


const Form = () => {

    // const dispatch = useDispatch();

    return (
      <div>
        <div className="sticky top-0">
            <NavBar />
        </div>

        <Intro />
        
        {/* <PropertyType />         */}

        {/* <div className="h-[470px]">
            <Location />
        </div> */}
{/* 
        <div>
            <QuantityCounter />
        </div> */}
{/* 
        <div>
            <ServicesCheck />
        </div> */}
        {/* <div>          
            <Cloudinary />
        </div>
        <div>
            <Title/>
        </div> */}
        {/* <div>
            
            <Price />
        </div> */}
        {/* <div>
            <Discount />
        </div> */}
        <div>
            <div className="font-cairo text-2xl mt-8">Revisá tu anuncio</div>
            <p className="font-cairo">Así es como van a verlo tus huéspedes</p>
        </div>
        
        <div className="col-span-1 font-cairo-play flex items-center justify-start mr-10">
              <button className="border border-argentina rounded p-1 w-32">Finalizar</button>
            </div>
            <div>
             <ScrollToTopButton />   
            </div>
        
      </div>
    );
  };
  
  export default Form;