import React, { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { useHistory } from "react-router-dom";

const ForgotPassword = () => {

    const [emailLogin, setEmailLogin] = useState('');
    const { resetPassword } = useAuth();
    const history = useHistory();

    const handleLogin = async () => {
        try {
            await resetPassword(emailLogin);
            history.push('/')
        }
        catch (error) {
            alert(error.message)
        }
    }


    return (
        <div className="page-container" style={{ background: `url('${process.env.PUBLIC_URL}/img/login.jpg') no-repeat center` }}>
            <div className='forgot-password-container'>
                <form className="forgot-password-form">
                    <h2 className='form-title'>Password Reset</h2>
                    <input placeholder="Email" onChange={(event) => { setEmailLogin(event.target.value) }} required></input>
                    <button type='button' onClick={handleLogin}>Send</button>
                </form>
            </div>
        </div >
    );
}

export default ForgotPassword;