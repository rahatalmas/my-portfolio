import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
         <Nav/>
         <Route exact path="/" component={Home}/>
      </Router>
    </div>
  );
}

export default App;
