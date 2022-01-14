import React ,{useState} from "react";

const AuthContext=React.createContext(
    {
        token:'',
        userId:'',
        setUserId:(userId)=>{},
        isLoggedIn:false,
        logIn:(token)=>{},
        logOut:()=>{}
    }
    );

    export default AuthContext;
