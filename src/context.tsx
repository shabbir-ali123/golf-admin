import React, {  useCallback, useEffect, useState } from 'react';

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

