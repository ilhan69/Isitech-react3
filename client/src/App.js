import {
  BrowserRouter, Navigate, Route, Routes
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import InputPage from "./components/InputPage";
import Login from "./components/Login";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/login'} />} />

        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inputpage" element={<InputPage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
