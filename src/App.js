import React from 'react';
import Header from './components/header';
import Dashboard from './pages/dashboard';
import UserLogin from './pages/login';
import Info from './pages/info';
import Blog from './pages/blog';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from './contexts/authContext';
import PrivateRoute from './components/privateRoute';
import PublicRoute from './components/publicRoute';
import ForgotPassword from './pages/forgotPassword';
import './styles/main.scss';


function App() {

  console.log(window.innerHeight)

  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <PrivateRoute path='/' exact component={Dashboard} />
            <PublicRoute path='/login' component={UserLogin} />
            <Route path='/passwordreset' component={ForgotPassword} />
            <Route path='/info' component={Info} />
            <Route path='/blog' component={Blog} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;