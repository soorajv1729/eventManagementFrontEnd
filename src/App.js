import './App.css';
import { ButtonCustom } from './components/button';
import {   BrowserRouter as Router,
   Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
         
          <li>
            <Link to="/button">Button</Link>
          </li>
         
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/button">
          <ButtonCustom />
        </Route>
       
      </Switch>
    </div>
  </Router>
  );
}

export default App;
