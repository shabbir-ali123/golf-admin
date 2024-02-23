import axios from 'axios';
import { API_ENDPOINTS } from './apiConfig';

export interface IUser {
  nickName: string;
  email: string;
  imageUrl: string;
}

export const getUser = async (
  id: string,
  token: string,
  setUser: (posts: IUser[]) => void,
) => {
  console.log(id);
  if (id) {
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
  }
};

export const loginUser = async (formData: any, setToken: any): Promise<boolean> => {
  try {
    const response = await axios.post(API_ENDPOINTS.LOGIN, formData);
    if (response.status === 200) {
      localStorage.setItem('token', response.data.jwtToken);
      localStorage.setItem('id', response.data.id);
      setToken(true);
      return true; 
    }
    return false;
  } catch (error) {
    // Handle errors here
    console.error('Login error:', error);
    return false; 
  }
};


