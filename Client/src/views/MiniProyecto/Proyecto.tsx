
const Proyecto = () => {
    return(
        <div className="flex justify-center items-center h-screen bg-segundo ">
            <div className="flex font-Poppins uppercase tracking-[5px] bg-segundo text-4xl text-argentina px-[35px] py-[20px] h-[80px] shadow-xl ">
                <p className="font-bold">Aire</p>
                <div className="grid ml-[8px] animate scroll overflow-hidden  ">
                    <span className="animate-scroll font-bold">bnb</span>
                    <span className="animate-scroll">de mar</span>
                    <span className="animate-scroll">de montaña</span>
                    <span className="animate-scroll">de vacaciones</span>
                    <span className="animate-scroll font-bold">bnb</span>
                </div>
                <i className="fa-solid fa-arrow-right text-argentina"></i>
            </div>
            <div>
            </div>
        </div>
    )
}
export default Proyecto;

// tailwind.config = {
//     theme: {
//         FontFamily: {
//             "Poppins": ["Poppins", "sans-serif"]
//         },
//         extend: {
//             keyframes: {
//               scroll: {
//                 "10%": {
//                     transform: "translateY(-112%)"
//                 },
//                 "25%": {
//                     transform: "translateY(-104%)"
//                 },
//                 "35%": {
//                     transform: "translateY(-212%)"
//                 },
//                 "50%": {
//                     transform: "translateY(-204%)"
//                 },              
//                 "60%": {
//                     transform: "translateY(-312%)"
//                 },
//                 "75%": {
//                     transform: "translateY(-304%)"
//                 },
//                 "85%": {
//                     transform: "translateY(-412%)"
//                 },
//                 "100%": {
//                     transform: "translateY(-404%)"
//                 }                                                
//             },
//             animation: {
//                 scroll: "scroll 8s infinite"

//             }  
//             }
            
//         }
//     }
// }