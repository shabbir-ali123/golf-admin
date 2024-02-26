import axios from "axios";
import { API_ENDPOINTS } from "./apiConfig";

export const fetchEvents = async (setEvents:any,setCount:any, token:any, pageNumber:number, pageSize:any ) => {
    try {
    
      const response = await axios.get(API_ENDPOINTS.GETALLEVENT, {
        headers: {
            Authorization: `Bearer ${token}`,
          },   
          params: {
            page: pageNumber,
            pageSize: pageSize,
            eventStartDate: '',
            eventEndDate: '',
            status: '',
            place: '',
          },     
      });
      setCount(response.data.count)
      setEvents(response.data.events);
    } catch (error) {
      throw error; 
    }
  };