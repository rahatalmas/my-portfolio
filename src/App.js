import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
         <Nav/>
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
