import axios from 'axios';
import useAuth from 'src/hooks/use-auth';
import {useRouter} from 'src/routes/hooks/use-router';

export default function(){
const API_URL = 'http://localhost:8000'; 
const router= useRouter(); 

const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Propagate the error so that the caller can handle it
  }
};
 
const fetchDataAthenticated = async (endpoint) => { 
    try {
      const authToken= localStorage.getItem('authToken');  
      const response = await axios.get(`${API_URL}/${endpoint}`,
      {
        headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
      }
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
    
  }
};
const postData= async (endpoint,data) => axios.post(`${API_URL}/${endpoint}`,{...data});

const checkAuth = () => {
  const storedToken = localStorage.getItem('authToken');
    postData('token/verify/',{token:storedToken})
    .then(response=>{
        console.log('response',response) 
      })
      .catch(error=>{
        localStorage.removeItem('authToken');
        console.log('error in verify token',error);
        router.replace('/login');
    })
};
return {postData,fetchData,fetchDataAthenticated,API_URL}
}
