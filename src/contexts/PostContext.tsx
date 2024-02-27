import React, { useCallback, useEffect, useState } from 'react';
import { fetchAllPosts } from '../api/Posts';


interface IPost {
    createdAt: string;
    id: 1;
    mediaFile: [];
    tags:"#fsdfdsfsdffd";
    text:"new post";
    updatedAt:"2024-01-29T08:33:13.000Z";
    userId: 1;
}

const PostCont = React.createContext<any>({});

export const PostContext = ({ children }: any) => {

    const [posts, setPosts] = useState<IPost[]>([]);
    const [postsCount, setPostsCount] = useState<string>();
    const store_token: string = localStorage.getItem('token') || '';

    useEffect(() => {
        fetchAllPosts(setPosts, setPostsCount, store_token);
    }, []);

    const handlePost = useCallback((value: any) => {
        return setPosts(value);
    }, [posts]);

    const value = { handlePost, posts, postsCount }

    return <PostCont.Provider value={value}> {children}</PostCont.Provider>
}

export const postContextStore = () => React.useContext(PostCont);

