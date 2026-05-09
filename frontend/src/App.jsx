import {Routes,Route,Navigate} from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage"
import {Toaster} from "react-hot-toast"
import { useAuthStore } from "./store/useAuthStore"
import {useEffect} from "react";
const App = () => {
  const {user,checkAuth}=useAuthStore();
  useEffect(()=>{
    checkAuth();
  },[]);
  return (
    <div>
     
      <Routes>
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/signin"
          element={!user ? <Signin /> : <Navigate to="/" />}
        />
        <Route path="/" element={user?<Home />:<LandingPage/>} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App