import axios from 'axios';

const API_URL = 'http://localhost:8000' 

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Propagate the error so that the caller can handle it
  }
};

