import { useState, useEffect } from 'react';
import axios from 'axios';


const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(()=> !!localStorage.getItem('authToken'));

  const API_URL = 'http://localhost:8000'; 
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
   
  
  const login = async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/token/`,{
      username: credentials.username,
      password: credentials.password,
    });
      console.log(response.data.access)
      localStorage.setItem('authToken', response.data.access); 
      setIsAuthenticated(true);
      return response.status;
    } catch (error) {
      console.error('Error fetching data in use-auth:');
      throw error; // Propagate the error so that the caller can handle it
    }
  };

  const logout = () => {
    // Perform logout actions (e.g., clear stored authentication token)
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return {API_URL,isAuthenticated,setIsAuthenticated, login, logout };
};

export default useAuth;
