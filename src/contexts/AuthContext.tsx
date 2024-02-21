import React, { Children, memo, useCallback, useEffect, useState } from 'react';
import { getUser } from '../api/Users';
interface IUser {
    nickName: string;
    email: string;
    imageUrl: string;
}

const Context = React.createContext<any>({});

export const AuthContext = memo(({ children }: any) => {

    const store_token: string = localStorage.getItem('token') || "";
    const id: string = localStorage.getItem('id') || "";

    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [user, setUser] = useState<IUser | null>(null);

    const handleUser = useCallback((value: any) => {
        return setUser(value);
    }, [user]);

    useEffect(() => {
        debugger;
        fetchUser()
    }, []);

    const fetchUser = async () => {
        setIsLoading(true)
        await getUser(id, store_token, handleUser);
        setIsLoading(false)
    }

    const value = { handleUser, id, user, isLoading }

    return <Context.Provider value={value}> {children}</Context.Provider>
})

export const useAuth = () => React.useContext(Context);