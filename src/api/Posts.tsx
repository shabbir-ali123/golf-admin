import axios from "axios";
import { API_ENDPOINTS } from "./apiConfig";

export const fetchPosts = async (setPosts:any, getToken:any,token:any ) => {
    try {
      let endpoint = API_ENDPOINTS.GETPUBLICPOSTS;
      const headers:any= {}
      if (getToken && getToken !== "undefined" ) {
        headers["Authorization"] = `Bearer ${token}`;
        endpoint = API_ENDPOINTS.GETPOSTS; 
      }
      const response = await axios.get(endpoint, {
        headers,
        params: {
            category: "party"
        }
      });

      setPosts(response.data.posts);
    } catch (error) {
      throw error; 
    }
  };