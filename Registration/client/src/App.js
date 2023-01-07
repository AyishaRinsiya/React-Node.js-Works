import './App.css';
import Reg from './components/Register';
import Log from './components/Login';
import Home from './components/Home';
import {Route,Routes,Link,BrowserRouter} from 'react-router-dom';
import React from 'react'
import { render } from '@testing-library/react';

class App extends React.Component {
  render() {
  return (
    <div>
      <ul className="nav nav-tabs">
  <li className="nav-item">
    <Link className="nav-link" to="home">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="register">Register</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="login">Login</Link>
  </li>
</ul>
<Routes>
        <Route path="/" element={<App/>} />
        <Route path="/register" element={<Reg/>} />
        <Route path="/login" element={<Log/>} />
        <Route path="/home" element={<Home/>} />
        </Routes>

    </div>
  );
}
}
export default App;