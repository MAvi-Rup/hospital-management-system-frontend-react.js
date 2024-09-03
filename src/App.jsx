import { Route, Routes } from "react-router-dom";
import AboutUs from "./app/pages/AboutUs";
import Home from "./app/pages/Home";
import Login from "./app/shared/auth/login";
import Register from "./app/shared/auth/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
