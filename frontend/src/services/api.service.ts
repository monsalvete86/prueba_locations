import axios from 'axios';
import { Location } from '../types/location';

// Safer way to access environment variables that works with Jest
let API_URL = 'http://localhost:8000/api';
let API_KEY = '';

// Try to use environment variables if available
try {
  API_URL = import.meta.env.VITE_API_BASE_URL || API_URL;
  API_KEY = import.meta.env.VITE_API_KEY || API_KEY;
  
  if (import.meta.env.DEV) {
    console.log('Using API URL:', API_URL);
  }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (e) {
  // In Jest environment, import.meta is not available
  console.log('Using default API configuration (likely a test environment)');
}

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
  }
});

export const fetchLocations = async (): Promise<Location[]> => {
  try {
    const response = await apiClient.get<Location[]>('/locations');
    
    // Validate response data
    if (!Array.isArray(response.data)) {
      console.error('API returned unexpected data format');
      return [];
    }
    
    return response.data;
  } catch (error) {
    console.error('Error fetching locations:', error);
    throw error;
  }
}; 