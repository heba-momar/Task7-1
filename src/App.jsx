
import "./App.css";

import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import About  from "./pages/About/About";
import Contact from './pages/Contact/Contact'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
