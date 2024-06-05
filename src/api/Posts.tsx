import axios from "axios";
import { API_ENDPOINTS } from "./apiConfig";



  export const fetchAllPosts = async(setPosts:any,setTotalPosts: any, token: any) => {
    try {
      const response = await axios.get(`${API_ENDPOINTS.GETTOTALPOSTS}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { category:"all" , page: 1, pageSize: 500 },

      });
      if (response.status == 200) {
        setTotalPosts(response.data.count);
        setPosts(response.data.posts);
      }
    }

    catch(error) {
      console.log(error, 'error')
    }
  }