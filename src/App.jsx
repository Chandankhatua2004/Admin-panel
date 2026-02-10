import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

const App = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/*" element={
        <Layout>
          <div className="animate-in fade-in duration-700">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* Add more dashboard routes here if needed */}
              <Route path="*" element={<Dashboard />} />
            </Routes>
          </div>
        </Layout>
      } />
    </Routes>
  );
}

export default App;