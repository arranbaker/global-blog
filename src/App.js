import React from 'react';
import Header from './components/header';
import Home from './pages/home';
import Info from './pages/info';
import Blog from './pages/blog';
import Footer from './components/footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './sass/main.scss';




function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/info' component={Info} />
        <Route path='/blog' component={Blog} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;