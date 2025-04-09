import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Signup from "./SignUp.jsx"; 
import Homepage from "./Home.jsx";
import Page from "./page.jsx";

     //importing components from their files, routing for easy navigation
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/SignUp" element={<Signup />} /> 
        <Route path="/Login" element={<Login />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;