import { useState, useEffect } from 'react';
import { AuthContext } from '.';
import { me, signout } from '@/data';

const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState();
    const [checkSession, setCheckSession] = useState(true);

    const logout = async () => {
        await signout();
        setIsAuthenticated(false);
        setUser(null);
    };

    useEffect(() => {
        const getUser = async () => {
            try {
                const data = await me();

                setUser(data);
                setIsAuthenticated(true);
            } catch (error) {
                console.error(error);
            } finally {
                setCheckSession(false);
            }
        };

        checkSession && getUser();
    }, [checkSession]);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                user,
                setCheckSession,
                setIsAuthenticated,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
