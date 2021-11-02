import React, { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const UserLogin = () => {

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [emailSignup, setEmailSignup] = useState('');
    const [passwordSignup, setPasswordSignup] = useState('');
    const { login, signup } = useAuth();
    const history = useHistory();

    const handleLogin = async () => {
        await login(emailLogin, passwordLogin);
        history.push('/');
    }

    const handleSignup = async () => {
        await signup(emailSignup, passwordSignup);
        history.push('/');
    }

    return (
        <div className="page-container" style={{ background: `url('${process.env.PUBLIC_URL}/img/login.jpg') no-repeat center` }}>
            <div className='login-container'>
                <form className="login-form">
                    <h2 className='form-title'>Login</h2>
                    <input placeholder="Email" onChange={(event) => { setEmailLogin(event.target.value) }} required></input>
                    <input placeholder="Password" onChange={(event) => { setPasswordLogin(event.target.value) }} required></input>
                    <button type='button' onClick={handleLogin}>Login</button>
                    <h2 className='form-title'>Sign Up</h2>
                    <input placeholder="Email" onChange={(event) => { setEmailSignup(event.target.value) }} required></input>
                    <input placeholder="Password" onChange={(event) => { setPasswordSignup(event.target.value) }} required></input>
                    <button type='button' onClick={handleSignup}>Submit</button>
                </form>
                <Link to='/passwordreset' className='forgot-password'>Forgot Password?</Link>
            </div>
        </div >
    );
}

export default UserLogin;