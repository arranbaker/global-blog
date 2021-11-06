import React, { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { useHistory, Link } from "react-router-dom";
const UserLogin = () => {

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const history = useHistory();

    const handleLogin = async () => {
        try {
            setError("")
            setLoading(true)
            await login(emailLogin, passwordLogin);
            history.push('/');
        } catch {
            setError('Wrong email or password')
        }

        setLoading(false)
    }


    return (
        <div className="page-container" style={{ background: `url('${process.env.PUBLIC_URL}/img/login.jpg') no-repeat center` }}>
            <div className='login-container'>
                <form className="login-form">
                    <h2 className='form-title'>Login</h2>
                    <input placeholder="Email" onChange={(event) => { setEmailLogin(event.target.value) }} required></input>
                    <input placeholder="Password" onChange={(event) => { setPasswordLogin(event.target.value) }} required></input>
                    <button type='button' disabled={loading} onClick={handleLogin}>Login</button>
                </form>
                {<p>{error}</p>}
                <Link to='/signup' className='page-link'>Sign Up</Link>
                <Link to='/passwordreset' className='forgot-password'>Forgot Password?</Link>
            </div>
        </div >
    );
}

export default UserLogin;