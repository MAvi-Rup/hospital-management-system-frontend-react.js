import { Route, Routes } from "react-router-dom";
import Home from "./app/pages/Home";
import Login from "./app/shared/auth/login";
import Register from "./app/shared/auth/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
