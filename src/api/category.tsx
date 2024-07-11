import axios from "axios";
import { API_ENDPOINTS } from "./apiConfig";
import toast from "react-hot-toast";

export const postCategory = async (formdata:any,setLoading:any) => {
    try {
    
      const response = await axios.post(API_ENDPOINTS.POSTCATEGORY,formdata, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },   
         
      });
      setLoading(response.data);
    } catch (error) {
      throw error; 
    }
  };
export const getCategory = async (setCategory:any,setLoading:any) => {
    try {
    
      const response = await axios.get(API_ENDPOINTS.GETCATEGORY, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },   
         
      });
      setCategory(response.data);
    } catch (error) {
      throw error; 
    }finally{
        setLoading(false)
    }
  };
export const getCategories = async (setCategories:any,setLoading:any) => {
    try {
    
      const response = await axios.get(API_ENDPOINTS.GETALLCATEGORIES, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },   
         
      });
      setCategories(response.data);
    } catch (error) {
      throw error; 
    }finally{
        setLoading(false)
    }
  };
export const putCategories = async (formdata:any,userId:any) => {
    try {
    
      const response = await axios.put(API_ENDPOINTS.PUTCATEGORY + userId, formdata, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },   
         
      });
    } catch (error) {
      throw error; 
    }
  };
export const deleteCategories = async (formdata:any,userId:any, setLoading:any) => {
    try {
    
      const response = await axios.put(API_ENDPOINTS.DELETECATEGORY + userId, formdata, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },   
         
      });
      setLoading(response.data);
    } catch (error) {
      throw error; 
    }finally{
        setLoading(false)
    }
  };
