import axios from "axios";
import { API_ENDPOINTS } from "./apiConfig";

export interface IUser {
    nickName: string;
    email: string;
    imageUrl: string;
}

export const getUser = async (id: string, token: string, setUser: (posts: IUser[]) => void) => {
    console.log("sadasd")
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
export const loginUser =async (formData:any, setToken: any)=>{
    
    try {
        // setLoading(true);  
        const response = await axios.post(API_ENDPOINTS.LOGIN, formData);
        if (response.status === 200) {
          localStorage.setItem("token", response.data.jwtToken);
          localStorage.setItem("id", response.data.id);
        //   updateTokenState(true);
        setToken(true);
        console.log("jee")
          router('/');
        }
        
        // setError(null);
      } catch (error) {
        let apiError =
          (error as any)?.response?.data?.message || "We are not able to Login";
      } finally {
      }
     
    
}

function router(arg0: string) {
    throw new Error("Function not implemented.");
}
