import { Route, Routes } from "react-router-dom";
import Layout from "./app/components/Layout";
import AboutUs from "./app/pages/AboutUs";
import Home from "./app/pages/Home";
import Login from "./app/shared/auth/login";
import NotFound from "./app/shared/auth/NotFound";
import Register from "./app/shared/auth/Register";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
