import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Maintenance from "./pages/Maintenance";

// components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mantenimientos" element={<Maintenance />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
