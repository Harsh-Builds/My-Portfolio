import axios from 'axios';

// 1. Get the live URL of your backend from environment variables
//    It will default to your localhost for development
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001'; // Adjust 5000 if needed

// 2. Create a re-usable "instance" of axios
const api = axios.create({
  baseURL: API_URL
});

// 3. Export it
export default api;