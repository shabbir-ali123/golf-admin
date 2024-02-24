import axios from "axios";
import { API_ENDPOINTS } from "./apiConfig";

export const fetchTeachers = async (setTeachers:any,setTeachersCount:any, token:any) => {
    try {
    let endpoint = API_ENDPOINTS.GETALLTEACHERSPUBLIC;
    if (token && token !== "undefined") {
      endpoint = API_ENDPOINTS.GETALLTEACHERS;
    }
    const response = await axios.get(endpoint, {
      headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
        params: {
          page: 1,
          pageSize: 20,
        },
      });

      if (response.data && response.data.teachers) {
        setTeachersCount(response.data.count);
        setTeachers(response.data.teachers);
        // if (response.data.teachers.length > 0) {
        //   setSelectedTeacher(response.data.teachers[0]);
        // }
      }
    } catch (error) {
      console.error('Error fetching teachers:', error);
    //   toast.error('Error fetching teachers');
    }
  };