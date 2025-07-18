import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Booking from './pages/Booking.jsx';
import Account from './pages/Account.jsx';
import Trip from './pages/Trip.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<App />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path='/booking'
            element={<Booking />}
          />
          <Route
            path='/account'
            element={<Account />}
          />
          <Route
            path='/trip'
            element={<Trip />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
