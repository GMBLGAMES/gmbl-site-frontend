// import logo from './logo.svg';
import './App.css';
import Header from './commons/Header';
// import Sidebar from './commons/Sidebar';
// import Footer from './commons/Footer';
import Main from './commons/Main';
// import Home from './pages';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header/>
          <Main/>
        </>
      </Router>
    </div>
  );
}

export default App;
