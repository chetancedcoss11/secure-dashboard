/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const API_BASE_URL = 'https://reqres.in/api';

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to the headers if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Function to login user
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post('/login', { email, password });
    const { token } = response.data;

    // Store token in local storage or secure storage
    localStorage.setItem('authToken', token);

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Login failed');
  }
};

// Function to register a new user
export const registerUser = async (email: string, password: string) => {
  try {
    const response = await api.post('/register', { email, password });
    const { token } = response.data;

    // Store token in local storage or secure storage
    localStorage.setItem('authToken', token);

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Registration failed');
  }
};

// Function to log out the user (removes token from storage)
export const logoutUser = () => {
  localStorage.removeItem('authToken');
};

// Function to get current user data (protected route)
export const getUserProfile = async () => {
  try {
    const response = await api.get('/users/2');  // Example: Fetch user with ID 2
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Failed to fetch user profile');
  }
};

// Function to fetch a list of users (example usage of ReqRes API)
export const getUsers = async (page: number = 1) => {
  try {
    const response = await api.get(`/users?page=${page}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Failed to fetch users');
  }
};

// Add more services as needed for your application...
