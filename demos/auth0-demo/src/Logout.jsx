import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Logout() {

    const { logout } = useAuth0();

    return (
        <button onClick={() => logout({ logoutParams: { returnTo: 'https://proyectofinalairbnb.vercel.app/'}})}>
            Log Out
        </button>
    )
}

export default Logout;