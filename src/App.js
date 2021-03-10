// import logo from './logo.svg';
import './App.css';
import Navbar from './commons/Navbar';
import Sidebar from './commons/Sidebar';
import Footer from './commons/Footer';
import Main from './commons/Main';
import Home from './pages';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Navbar/>
          <Sidebar/>
          <Main/>
          <Footer/>
        </>
      </Router>
    </div>
  );
}

export default App;
