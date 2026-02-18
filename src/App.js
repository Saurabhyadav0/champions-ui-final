import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AgencyHome from "./pages/AgencyHome";
import Inquiry from "./pages/Inquiry";
import Framework from "./pages/Framework";
import Insight from "./pages/Insight";
import About from "./pages/About";
import Services from "./pages/Services";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<AgencyHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/framework" element={<Framework />} />
        <Route path="/insights" element={<Insight />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

