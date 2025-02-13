import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/DBoard';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
        {/* The root path uses your existing App component */}
        <Route path="/" element={<App />} />
        {/* The /auth path uses your authentication page */}
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
  </BrowserRouter>
);
