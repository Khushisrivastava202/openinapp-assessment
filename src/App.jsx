import { BrowserRouter,Routes,Route } from "react-router-dom";
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import { AuthContextProvider } from "./components/AuthContext";

export default function App() {
  return (
     <BrowserRouter>
     <AuthContextProvider>
     <Routes>
     <Route path="/" element={<SignIn/>}/>
     <Route path="/home" element={<Home/>}/>
     </Routes>
     </AuthContextProvider>
     </BrowserRouter>
  )
}
