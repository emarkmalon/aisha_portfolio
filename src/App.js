
import "./Styles/style.css"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Work from "./Pages/Work"
import Contact from "./Pages/Contact"
import Error from "./Pages/Error"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
