import React from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import Logout from "./Logout";

function Homepage() {

    const { user, isAuthenticated, isLoading } = useAuth0();

    useEffect(() => {
        if(isAuthenticated) {
            let id = (user.sub.split('|')[1]);
            axios.get(`http://localhost:3000/user/${id}`)
        }
    }, [isAuthenticated])

    if(isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        isAuthenticated && (
            <div> 
                <h1>HomePage</h1>
                <Logout/>
            </div>         
        )
    )
}

export default Homepage;