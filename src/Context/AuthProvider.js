import {createContext, useEffect, useState} from 'react';
const AuthContext = createContext({})


export const AuthProvider = ({children}) => {
    const [auth,setAuth] = useState({})
    const [timeoutId, setTimeoutId] = useState(null);

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
        const newTimeoutId = setTimeout(logout, 100000); //10m
        setTimeoutId(newTimeoutId);
    };



    
    return (
        <AuthContext.Provider  value={{auth,setAuth,login,logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext