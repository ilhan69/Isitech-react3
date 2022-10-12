import React from "react";
import {
  BrowserRouter, Navigate, Route, Routes
} from "react-router-dom";
import ProtectedRoute from "./components/layouts/ProtectedRoute";
import Dashboard from "./components/views/Dashboard";
import InputPage from "./components/views/InputPage";
import Login from "./components/views/Login";

import userContext from './components/contexts/userContext';
import userReducer from './components/reducer/user';

const App = () => {

  const [user, dispatchUser] = React.useReducer(userReducer, { logged: localStorage.getItem('loggedIn'), email: '', password: '' })

  return (
    <userContext.Provider value={{ user, dispatchUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={'/login'} />} />

          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute page={<Dashboard />} />} />
          <Route path="/inputpage" element={<ProtectedRoute page={<InputPage />} />} />
        </Routes>
      </BrowserRouter >
    </userContext.Provider>
  );
}

export default App;
