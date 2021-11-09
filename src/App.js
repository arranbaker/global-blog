import React from 'react';
import Header from './components/header';
import Dashboard from './pages/dashboard';
import UserLogin from './pages/login';
import Blog from './pages/blog';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from './contexts/authContext';
import PrivateRoute from './components/privateRoute';
import PublicRoute from './components/publicRoute';
import ForgotPassword from './pages/forgotPassword';
import './styles/main.scss';
import Signup from './pages/signUp';


function App() {

  return (
    <AuthProvider>
      <Router>
        <div className='global-container'>
          <Header />
          <Switch>
            <PrivateRoute path='/' exact component={() => <Dashboard />} />
            <PublicRoute path='/login' component={UserLogin} />
            <PublicRoute path='/signup' component={Signup} />
            <Route path='/passwordreset' component={ForgotPassword} />
            <Route path='/blog' component={Blog} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;