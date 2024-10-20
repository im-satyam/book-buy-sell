import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/Navbar";
import ListingPage from "./pages/List";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Homepage from "./pages/home";

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/book/list" element={<ListingPage />} />
      </Routes>
    </div>
  );
}

export default App;
