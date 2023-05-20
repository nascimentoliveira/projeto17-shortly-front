import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import View from "./components/View.js";
import Logo from "./components/Logo.js";

import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";
import MyLinks from "./pages/MyLinks.js";
import Ranking from "./pages/Ranking.js";

import UserProvider from "./context/UserContext.js";

import "./assets/styles/reset.css";
import "./assets/styles/style.css";

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <View>
          <Navbar />
          <Logo />
          <Routes>
            <Route index element={<Navigate replace to="/ranking" />} />
            <Route path="/auth" element={<SignIn />} />
            <Route path="/users" element={<SignUp />} />
            <Route path="/urls" element={<MyLinks />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="*" element={<Ranking />} />
          </Routes>
        </View>
      </UserProvider>
    </BrowserRouter>
  );
}