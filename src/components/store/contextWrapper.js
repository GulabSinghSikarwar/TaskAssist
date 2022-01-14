import React , {useState} from "react";

import AuthContext from "./context";

const AuthContextProvider=(props)=>{
    
    const [token,setToken]=useState(null);
    const [userId,setUserId]=useState(null);

    const updateUserId=(userId)=>{
        setUserId(userId)

    }

    const isLoggedIn=!!token;

    const loginHandeler=(token)=>{
        setToken(token);

    }
    const logoutHAndeler=()=>{
        alert("LogOut Successful ")
        setToken(null)

    }
    const contextValues={
        token:token,
        userId:userId,
        setUserId:updateUserId,
        isLoggedIn:isLoggedIn,
        logIn:loginHandeler,
        logOut:logoutHAndeler
    }
    return <AuthContext.Provider value={contextValues}> { props.children} </AuthContext.Provider>

}
export default AuthContextProvider;