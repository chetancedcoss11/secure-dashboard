// src/pages/ProtectedDashboard.tsx

import React, { useEffect } from 'react';
import { useAuthStore } from '../../store/useAuthStore';  // Zustand store (or replace with your state management solution)
import { useNavigate } from 'react-router-dom';

const ProtectedDashboard: React.FC = () => {
  const { token, logout } = useAuthStore();  // Zustand store to get token and logout functionality
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/signin');  // Redirect to SignIn if not authenticated
    }
  }, [token, navigate]);

  const handleLogout = () => {
    logout();  // Call logout method from Zustand store
    navigate('/signin');  // Redirect to SignIn page after logout
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-6">Welcome to the Dashboard</h2>
        <p className="mb-4">You are successfully logged in.</p>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProtectedDashboard;
