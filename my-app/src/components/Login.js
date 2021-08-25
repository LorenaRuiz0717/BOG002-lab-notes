/* eslint-disable default-case */
import React, { useState,
     useEffect
 } from "react";
import fire, { googleProvider } from './firebase'
import Welcome from './views/Welcome'
import {useHistory} from 'react-router-dom';

function LoginApp() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const clearInputs = () => {
        setEmailError('');
        setPasswordError('');
    }

    // const clearErrors = () => {
    //     setEmail('');
    //     setPassword('');
    // }

    const handleLogin = () => {
        // clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((result)=>console.log(result.user))
            // .catch(history.push('/'))
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };
    const handleSignup = () => {
        // clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(()=>(console.log('create user')))
            .catch(err => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });

        }

    const loginGmail = () => {
        fire.auth().signInWithPopup(googleProvider)
            .then(result => console.log(result.user.email))
            .catch(err => console.log(err.code))
    }

    const restorePassword = () => {
        fire.auth().sendPasswordResetEmail(email)
            .then(setEmailError('Send Email ' + email))
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    }

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        })
    };

    useEffect(() => {
        authListener();
    }, []);
    
    return (
        <div>
            <Welcome
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                emailError={emailError}
                passwordError={passwordError}
                loginGmail={loginGmail}
                restorePassword={restorePassword}
            />
        </div>

    )
}

export default LoginApp;