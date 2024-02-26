import React, {  useEffect, useState } from 'react';
import { getAllUsers } from '../api/Users';
import { fetchAllPosts } from '../api/Posts';


const TotalPostsContext = React.createContext<any>({});

export const TotalPosts = ({children}:any)=>{
  
    const store_token: string = localStorage.getItem('token') || '';
    const [totalPosts, setTotalPosts] = useState<any[]>();

    useEffect(() => {
        fetchAllPosts( setTotalPosts, store_token);
        console.log(totalPosts, 'total posts')
    }, []);

    const value =  { totalPosts}

    return <TotalPostsContext.Provider  value={value}> {children}</TotalPostsContext.Provider>
}

export const totalPostStore = ()=> React.useContext(TotalPostsContext);

