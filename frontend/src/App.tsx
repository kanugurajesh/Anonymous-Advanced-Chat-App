import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { Toaster } from "react-hot-toast";
import SignUp from "./pages/signup/Signup";

function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
