import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './PageComponents/Header';
import Home from './Pages/Home';
import Fun from './Pages/Fun';
import Tools from './Pages/Tools'
import './App.css';
import Footer from './PageComponents/Footer';
import ServerCalc from './Projects/WaitStaffCalc/ServerCalc';
import Nav from "./PageComponents/Nav";

function App() {
  return (
    <Router>
    <div className="App">
     <Header />
     <Nav />
     <Route exact path='/' component={Home} />
     <Route path='/Fun' component={Fun} />
     <Route path='/Tools' component={Tools} />
     <Footer />
    </div>
    </Router>
  );
}

export default App;
