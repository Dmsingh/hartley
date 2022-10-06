
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
import Protected from "./components/protected";
import Register from './components/register';


function App() {
  return (
    <div className="App">
    <Header/>

      <Router>

      <Routes>
          <Route path="/" element={<Protected><Home/></Protected>} />
          <Route path="/login" element={<Login/>} />
         
          <Route path="/register" element={<Register/>} />
          
          
        </Routes>
      
    </Router>
    <Footer/>

    </div>

      
  );
}

export default App;
