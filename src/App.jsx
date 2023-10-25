import './App.scss'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import MyProject from "./pages/MyProject/MyProject.jsx";

import ScrollToTop from "./utils/scrollToTop.jsx";


function App() {

  return (
    <div className="App">
        <Router>
            <ScrollToTop/>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/MyProject/:id" element={<MyProject/>}/>
                </Routes>
            <Footer/>
        </Router>
    </div>
  )
}

export default App
