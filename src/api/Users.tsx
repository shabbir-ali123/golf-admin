import axios from "axios";
import { API_ENDPOINTS } from "./apiConfig";

export interface Post {
    id: string;
    tags: string[];
    text: string;
    mediaFile: string[];
    imageUrl: string[];
    PostComments: string[];
    PostLikes: string[];
}

export const getUser = async (id: string, token: string, setUser: (posts: Post[]) => void) => {
    try {
        const response = await axios.get(`${API_ENDPOINTS.GET_USER}${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setUser(response.data.user);
    } catch (error) {
        throw error;
    }
};