import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
       <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/about" component={About} />
        <Route  path="/projects" component={Projects} />
        <Route  path="/skills" component={Skills}/>
        <Route  path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch> 
    </div>
  );
}

export default App;
