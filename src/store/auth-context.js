import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email,password) => {}
})

export default function AuthContextProvider(props){
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    useEffect(() => {
        const storedLog = localStorage.getItem("heheLog");
    
        if (storedLog === "1") {
          setIsLoggedIn(true);
        }
      }, []);
    function logoutHandler() {
        localStorage.removeItem("heheLog")
        setIsLoggedIn(false)
    }

    function loginHandler(){
        localStorage.setItem("heheLog", "1");
        setIsLoggedIn(true)
    }

    return (<AuthContext.Provider value = {{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
    }}>
        {props.children}
    </AuthContext.Provider>)
}