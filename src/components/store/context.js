import React ,{useState} from "react";

const AuthContext=React.createContext(
    {
        token:'',
        isLoggedIn:false,
        logIn:(token)=>{},
        logOut:()=>{}
    }
    );

    export default AuthContext;
