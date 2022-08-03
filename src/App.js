
import './App.css';
import{Routes,Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import Tarifs from "./components/Tarifs/Tarifs";
import Contact from "./components/contact/contact"
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <>
    <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Gallery' element={<Gallery/>} />
      <Route path='/Tarifs' element={<Tarifs/>} />
      <Route path='/Contact' element={<Contact/>} />
      </Routes>
   
    </>
  );
}

export default App;
