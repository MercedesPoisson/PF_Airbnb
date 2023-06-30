import { Link } from "react-router-dom"
const Footer = () => {
    return(
        <div className="flex flex-col w-full">
            <footer className="bg-argentina font-cairo text-white h-12 p-3 my-4">
                
                <ul className="flex gap-6 ">
                    <li >&copy; airebnb</li>
                    <li className="cursor-pointer"><Link to="/privacidad">Privacidad</Link></li>
                    <li className="cursor-pointer"><Link to="/terminos">Términos</Link></li>
                    <li className="cursor-pointer"><Link to="/ayuda">Ayuda</Link></li>

                </ul>
            </footer>
            
        </div>
    )
}
export default Footer;