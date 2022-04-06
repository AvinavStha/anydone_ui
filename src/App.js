import "./App.css";
import Home from "./components/home/Home";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
       <Topbar/>
    
    
      <Routes>
      <Route exact path ="/" element={<Home/>}/>
      </Routes>
    
       
      </Router>
       <Footer/> 
    </div>
  );
}

export default App;
