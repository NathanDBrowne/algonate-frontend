import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./views/Auth/login";
import { Home } from "./views/Home";
import { Navigation } from "./components/Navbar";
import { Logout } from "./views/Auth/logout";

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
