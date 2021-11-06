import React, { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { useHistory, Link } from "react-router-dom";

const Signup = () => {

    const [emailSignup, setEmailSignup] = useState('');
    const [passwordSignup, setPasswordSignup] = useState('');
    const { signup } = useAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory();

    const handleSignup = async () => {
        try {
            setError("")
            setLoading(true)
            await signup(emailSignup, passwordSignup);
            history.push('/');
        } catch {
            setError('Sign Up Failed')
        }

        setLoading(false)
    }

    return (
        <div className="page-container" style={{ background: `url('${process.env.PUBLIC_URL}/img/login.jpg') no-repeat center` }}>
            <div className='signup-container'>
                <form className=''>
                    <h2 className='form-title'>Sign Up</h2>
                    <input placeholder="Email" onChange={(event) => { setEmailSignup(event.target.value) }} required></input>
                    <input placeholder="Password" onChange={(event) => { setPasswordSignup(event.target.value) }} required></input>
                    <button type='button' disabled={loading} onClick={handleSignup}>Submit</button>
                </form>
                {<p>{error}</p>}
                <Link to='/login' className='page-link'>Login</Link>
                <Link to='/passwordreset' className='forgot-password'>Forgot Password?</Link>
            </div>
        </div>);
}

export default Signup; <div>
</div>