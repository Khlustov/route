import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Description from './components/description'
import Square from './components/Square'
import Text from './components/ItalicText'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/square">Square</Link>
            </li>
            <li>
              <Link to="/italictext">Italic text</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/italictext">
            <Homework2 />
          </Route>

          <Route path="/square">
            <Homework1 />
          </Route>
         
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className = 'content'>
      <h2>Home</h2>
    </div>
  );
}

function Homework1() {
  return (
    <div className = 'content'>
      <Description
      text = 'Стили и текст внутри квадратов передаються с помощью props'
      />
      
      <Square 
        text = 'Big'
        cssClass = 'big'
      />
      <Square 
        text = 'Medium'
        cssClass = 'medium'
      />
      <Square 
        text = 'Small'
        cssClass = 'small'
      />
    </div>
  );
}

function Homework2() {
  return (
    <div className = 'content'>
       <Description
      text = 'По клику на текст он становится курсивом, по клику еще раз, становится нормальным'
      />
      <Text text = 'REACT' />
    </div>
  );
}

export default App


