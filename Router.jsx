import {BrowserRouter, Routes, Route,Link} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Products from "./Products";
import Nopage from "./Nopage";
function Router() {
    return(<>
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/about">About us</Link>
    <Link to="/Products">Products</Link>
    <Link to="/Contact">contact us</Link>
    <hr/>
    <Router>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="*" element={<Nopage/>}/>
        
    </Router>
    </BrowserRouter>
    </>)
}