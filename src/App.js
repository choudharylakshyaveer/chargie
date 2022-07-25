import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/' element={<Login/>} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
