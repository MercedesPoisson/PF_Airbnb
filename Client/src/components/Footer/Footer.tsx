import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Footer = () => {
  const { isAuthenticated, user } = useAuth0();

  const allowedEmails = [
    "fjgalliani@hotmail.com",
    "alelopez.13.97@gmail.com",
    "mercedespoisson@yahoo.com",
    "bennyreyea@gmail.com",
    "augusford@hotmail.com"
  ];

  const shouldRenderDashboard = isAuthenticated && user && user.email && allowedEmails.includes(user.email);

  return (
    <div className="flex flex-col w-full">
      <footer className="bg-argentina font-cairo text-white h-12 p-3 my-4">
        <ul className="flex gap-6">
          <li>&copy; airebnb</li>
          <li className="cursor-pointer">
            <Link to="/privacidad">Privacidad</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/terminos">Términos</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/ayuda">Ayuda</Link>
          </li>
          {shouldRenderDashboard && (
            <li className="cursor-pointer">
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;