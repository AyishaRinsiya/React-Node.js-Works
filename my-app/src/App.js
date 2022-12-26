import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
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
    <Link className="nav-link" to="about">About</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="Contact">Contact</Link>
  </li>
</ul>
<Routes>
        <Route path="/" element={<App/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>

    </div>
  );
}
}
export default App;
