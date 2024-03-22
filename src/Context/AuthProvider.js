import {createContext, useEffect, useState} from 'react';
import { useCookies } from 'react-cookie';
const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [auth,setAuth] = useState({})
    const [timeoutId, setTimeoutId] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    useEffect(() => {
        const storedAuth = JSON.parse(localStorage.getItem('auth')) || {};
        setAuth(storedAuth);  

        console.log(localStorage.auth)

        if (storedAuth.account){
            resetTimeout();
        }        
        

    }, []);
    
    const login = (userData) => {
        setAuth(userData);
        localStorage.setItem('auth', JSON.stringify(userData));
        resetTimeout()
      };

    const logout = () => {
        setAuth({});
        localStorage.removeItem('auth');
        clearTimeout(timeoutId);
    };

    const resetTimeout = () => {
        clearTimeout(timeoutId);
        const newTimeoutId = setTimeout(logout, 7200000); //2h
        setTimeoutId(newTimeoutId);
    };



    
    return (
        <AuthContext.Provider  value={{auth,setAuth,login,logout,cookies,setCookie}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext