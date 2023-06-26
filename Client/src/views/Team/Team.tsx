// import UserBar from "../../components/searchBar/UserBar";
// import { useNavigate } from "react-router-dom";
import Perfil from "./perfil.png";

const Team = () => {
    // const navigate = useNavigate();
    // const handleNavigateToHome = () => {
    //     navigate("/");
    //   };
    
    return (
        <div>
            {/* <div className="sticky top-0">
        <div className="grid grid-cols-2 gap-3 h-16 mb-1 bg-white">
          <div className="col-span-1 flex items-center justify-start">
            <div
              className="flex items-center cursor-pointer"
              onClick={handleNavigateToHome}
            >
              <i className="fa fa-sun text-argentina ml-4 text-2xl"></i>
              <span className="ml-1 text-argentina font-comfortaa text-lg">
                argentina
              </span>
            </div>
          </div>
          <div className="col-span-1 font-cairo-play flex items-center justify-end mr-10">
            <button className="mr-4">
            <UserBar />
            </button>
          </div>
        </div>
      </div> */}
      <div className="font-Poppins bg-dark_purple text-white ">
        <div className="text-center py-10">
            <h5 className="text-4xl w-96 mx-auto leading-normal font-bold mb-12">El Equipo</h5>
            
            <div className="flex max-w-full ml-16 mr-16 gap-8 group">
                <div className="bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 p-8 rounded-xl mix-blend-luminosity">
                <img src={Perfil} className="h-20 mx-auto rounded-full" />
                <h4 className="uppercase text-xl font-bold">Mercedes Poisson</h4>
                <p className="text-sm leading-7 my-3 font-light opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eius earum sequi omnis tempore nesciunt odio!</p>
                    <div className="mt-10">
                        <a href="https://github.com/MercedesPoisson" target="blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github text-btn_primary text-2xl mr-4"></i>
                            </a>
                            <a href="https://linkedin.com/in/mercedespoisson" target="blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin text-btn_primary text-2xl"></i> 
                            </a>
                    </div>
                    
                    <button className="bg-btn_primary py-2.5 px-8 rounded-full">Contactar</button>
                </div>
            
                <div className="bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 p-8 rounded-xl mix-blend-luminosity">
                <img src={Perfil} className="h-20 mx-auto rounded-full" />
                <h4 className="uppercase text-xl font-bold">Augusto Orsi</h4>
                <p className="text-sm leading-7 my-3 font-light opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eius earum sequi omnis tempore nesciunt odio!</p>
                    <div className="mt-10">
                       <i className="fa-brands fa-github text-btn_primary text-2xl mr-4"></i>
                        <i className="fa-brands fa-linkedin text-btn_primary text-2xl"></i> 
                    </div>
                    <button className="bg-btn_primary py-2.5 px-8 rounded-full">Contactar</button>
                </div>
            
                <div className="bg-white/10 duration-500 p-8 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 rounded-xl mix-blend-luminosity">
                <img src={Perfil} className="h-20 mx-auto rounded-full" />
                <h4 className="uppercase text-xl font-bold">Francisco Galliani</h4>
                <p className="text-sm leading-7 my-3 font-light opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eius earum sequi omnis tempore nesciunt odio!</p>
                    <div className="mt-10">
                       <i className="fa-brands fa-github text-btn_primary text-2xl mr-4"></i>
                        <i className="fa-brands fa-linkedin text-btn_primary text-2xl"></i> 
                    </div>
                    <button className="bg-btn_primary py-2.5 px-8 rounded-full">Contactar</button>
                </div>
            
                <div className="bg-white/10 duration-500 p-8 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 rounded-xl mix-blend-luminosity">
                <img src={Perfil} className="h-20 mx-auto rounded-full" />
                <h4 className="uppercase text-xl font-bold">Alejandro López</h4>
                <p className="text-sm leading-7 my-3 font-light opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eius earum sequi omnis tempore nesciunt odio!</p>
                    <div className="mt-10">
                       <i className="fa-brands fa-github text-btn_primary text-2xl mr-4"></i>
                        <i className="fa-brands fa-linkedin text-btn_primary text-2xl"></i> 
                    </div>
                    <button className="bg-btn_primary py-2.5 px-8 rounded-full">Contactar</button>
                </div>
             
                <div className="bg-white/10 duration-500 p-8 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 rounded-xl mix-blend-luminosity">
                <img src={Perfil} className="h-20 mx-auto rounded-full" />
                <h4 className="uppercase text-xl font-bold">Benny Wiliams Reyes Mancebo</h4>
                <p className="text-sm leading-7 my-3 font-light opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eius earum sequi omnis tempore nesciunt odio!</p>
                    <div> 
                        <button>
                            <i className="fa-brands fa-github text-btn_primary text-2xl mr-4"></i>
                            </button>
                            <button>
                                <i className="fa-brands fa-linkedin text-btn_primary text-2xl"></i> 
                            </button>
                       
                    </div>
                    <button className="bg-btn_primary py-2.5 px-8 rounded-full">Contactar</button>
                </div>
            </div>

        </div>
      </div>         
        </div>
    )
}
export default Team;