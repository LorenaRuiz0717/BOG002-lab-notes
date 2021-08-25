import React from 'react';
import '../Styles/Welcome.css';
// import  fire from './firebase'
import facebook from '../assets/facebook2.png'
import gmail from '../assets/gmail.png'
// import addNote from "./assets/addNote1.png"

const Welcome = (props) => {
   const {
      email,
      setEmail,
      password,
      setPassword,
      handleLogin,
      handleSignup,
      emailError,
      passwordError,
      loginGmail,
      restorePassword
   } = props;

   return (
      <div className='container'>
         <div className='container1'>
            <h1 className='logo'>School Notes</h1>
            <form className='formulario'>
               <label>Email: </label>
               <input
                  className='email'
                  placeholder='Shcool_Notes@email.com'
                  type='email'
                  autoFocus
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
               ></input>
               <p className='errormsg'>{emailError}</p>
               <label>Password: </label>
               <input
                  className='password'
                  placeholder='*********'
                  type='password'
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
               ></input>
               <p className='errormsg'>{passwordError}</p>
               <div className='contact'>
                  <button type='button' className='loginIn' onClick={handleLogin}>Sign In</button>
                  <p>
                     <button type='button' className='link' onClick={restorePassword}>Forgot your password?</button>
                  </p>
                  <div className='containerIcons'>
                     <img src={gmail} alt="gmail" className='gmail' onClick={loginGmail} />
                     <img src={facebook} alt="facebook" className='facebook' />
                  </div>
                  <p>
                     <button type='button' className='link' onClick={handleSignup}>Register</button>
                  </p>
               </div>
            </form>
         </div>


      </div>
   )
}

export default Welcome;