import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import moment from 'moment';

import Description from './components/description'
import Square from './components/Square'
import Text from './components/ItalicText'
import SomeList from './components/some-list'
import SignIn from './components/sign-in'
import Input from './components/input'
import Button from './components/button'
import Clock from './components/clock'
import Counter from './components/counter'
import UsersList from './components/users-list'
import Registration from './components/registration'
import CheckList from './components/checklist'
import Currency from './components/currency';

function App() {
  return (
    <Router>
      <div className = 'content'>
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
            <li>
              <Link to="/somelist">Some list</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/input">Input</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/users">Users list</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
            <li>
              <Link to="/checklist">Check list</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
        <Switch>

          <Route path="/checklist">
            <Homework10 />
          </Route>

          <Route path="/registration">
            <Homework9 />
          </Route>

          <Route path="/users">
            <Homework8 />
          </Route>

          <Route path="/counter">
            <Homework7 />
          </Route>

          <Route path="/button">
            <Homework6 />
          </Route>
          
          <Route path="/input">
            <Homework5 />
          </Route>
          
          <Route path="/signin">
            <Homework4 />
          </Route>
          
          <Route path="/somelist">
            <Homework3 />
          </Route>
          
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
    <div  className = 'pages pages__main'>
      <h2>{moment().format('LL')}</h2>
      <Clock />
      <Currency />
    </div>
  );
}

function Homework1() {
  return (
    <div  className = 'pages'>
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
    <div  className = 'pages'>
      <Description
      text = 'По клику на текст он становится курсивом, по клику еще раз, становится нормальным'
      />
      <Text text = 'CLICK ME' />
    </div>
  );
}

function Homework3() {
  return (
    <div  className = 'pages'>
      <Description
       text = 'Нужно вывести имена и фамилии из массива, который находится во вложениях в json-формате.'
      />
      <SomeList />
    </div>
  );
}

function Homework4() {
  return (
    <div  className = 'pages'>
      <Description
       text = 'Сделать кнопку с надписью Sign In, по нажатию на которую спустя 3 секунды появляется надпись Hello user'
      />
      <SignIn />
    </div>
  );
}

function Homework5() {
  return (
    <div  className = 'pages'>
      <Description
       text = 'Наша задача на каждое событие изменения этот value сетать в стейт нашего компонента. И значение стейта в нашем компоненте одновременно передать в value инпута. В результате если набирать текст в инпуте, то меняется и наш стейт. И если менять стейт, то и изменяется текст в инпуте'      
      />
      <Input />
    </div>
  );
}

function Homework6() {
  return (
    <div  className = 'pages'>
      <Description
       text = 'Нажимаем на кнопку "сказать привет" - появляется лоадер и через три секунды появляется надпись "привет" и лоадер исчезает.'
      />
      <Button />
    </div>
  );
}

function Homework7() {
  return (
    <div  className = 'pages'>
      <Description
       text = 'Стейт в функциональном компоненте. Хук useState'
      />
      <Counter />
    </div>
  );
}

function Homework8() {
  return (
    <div  className = 'pages'>
      <Description
       text = 'Получить данные о пользователе с помощью API запроса на сервер'
      />
      <UsersList />
    </div>
  );
}

function Homework9() {
  return (
    <div  className = 'pages'>
      <Description
       text = 'Написать компонент для регистрации пользователя'
      />
      <Registration />
    </div>
  );
}

function Homework10() {
  return (
    <div  className = 'pages'>
      <CheckList title="plan for today" />
    </div>
  );
}



export default App


