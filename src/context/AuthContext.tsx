import React, { createContext, useEffect, useState } from 'react';


interface AuthContextValue {
    loading: Boolean,
    accessToken: String,
    logOut() : void
}


export const AuthContext = createContext<AuthContextValue>({
    loading: true,
    accessToken: "",
    logOut() {
        //do something
    }
});


export interface AuthContextProviderProps {
    
}
 
const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {

    const [accessToken, setAccessToken] = useState<String>("");
    const [loading, setLoading] = useState<Boolean>(true)

    useEffect(() => {
        fetch("http://localhost:4000/refresh_token", {
          method: "POST",
          credentials: "include"
        }).then(async res => {
          const { accessToken } = await res.json();
          setAccessToken(accessToken);
          setLoading(false);
        });
      }, []);

    const logOut = () => {
        // do Something
    }

    const value : AuthContextValue = {
        accessToken,
        loading,
        logOut
    }

    return ( 
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;