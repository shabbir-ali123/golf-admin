import React, { Children, useCallback, useEffect, useState } from 'react';
import { fetchPosts } from './api/Posts';
interface IUser {
    nickName: string;
    email: string;
    imageUrl: string;
  }
const MyContext = React.createContext<any>({});
export const StoreContext = ({children}:any)=>{
    const token = localStorage.getItem('token');
    const [getToken, setToken] = useState<boolean>(Boolean(token));
    const id = localStorage.getItem('id');
    

    const handleToken = useCallback((value:boolean)=>{
        return setToken(value);
    },[token]);
    const [user, setUser] = useState<IUser[]>([]);

    const handleUser = useCallback((value: any) => {
        return setUser(value);
    }, [user]);
    const value =  {getToken, handleToken,handleUser, token, id, user, setUser}

    return <MyContext.Provider  value={value}> {children}</MyContext.Provider>
}

export const useStore = ()=> React.useContext(MyContext);


//posts


interface IPost {
    id: string;
    tags: string[];
    text: string;
    posts: any;
    mediaFile: string[];
    imageUrl: string[0];
    PostComments: string[],
    PostLikes: string[]
  }
  
const PostCont = React.createContext<any>({});

export const PostContext = ({children}:any)=>{
  
    const [posts, setPosts] = useState<IPost[]>([]);
    // const { token, getToken} = useStore();

    useEffect(() => {
        console.log("hello")
        // fetchPosts(setPosts,getToken, token);
    }, []);

    const handlePost = useCallback((value: any) => {
        return setPosts(value);
    }, [posts]);
    const value =  { handlePost, posts}

    return <PostCont.Provider  value={value}> {children}</PostCont.Provider>
}

export const postContextStore = ()=> React.useContext(PostCont);

