// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './assets/pages/SignUp';
import SignIn from './assets/pages/SignIn';
import ProtectedDashboard from './assets/pages/ProtectedDashboard';
import ProtectedRoute from './components/ProtectedRoute';  // Import ProtectedRoute

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <ProtectedDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
