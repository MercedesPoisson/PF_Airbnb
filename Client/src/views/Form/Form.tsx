// import { useDispatch } from "react-redux"
// import QuantityCounter from "./QuantityCounter";
// import ServicesCheck from "./ServicesCheck";
// import Location from "./Location";
// import Cloudinary from "./Cloudinary";
// import PropertyType from "./PropertyType";
// import Title from "./TitleAndDescription";
// import Discount from "./Discount";
// import Price from "./Price";
import ScrollToTopButton from "../../components/scrollButton/ScrollToTopButton";
import Intro from "./FirstView";
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
             <ScrollToTopButton />   
            </div>
        
      </div>
    );
  };
  
  export default Form;