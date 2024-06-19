import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { Toaster } from "react-hot-toast";
import SignUp from "./pages/signup/Signup";
import { useAuthContext } from "./context/AuthContext";

function App() {
  // @ts-ignore
  const { authUser } = useAuthContext();
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
    </div>
  );
}

export default App;
