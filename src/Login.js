import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            
            <div className="login__logo">
                <img src = "data:image/jpeg;base64,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" alt=""/>
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
        
    );
}

export default Login;
