import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { auth } from '../firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/')
      })
      .catch(error => alert(error.message));
  }

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)
        if (auth) {
          history.push('/');
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className="login">

      <img className='login_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="" />

      <div className="login_container">
        <h1>Sign-in</h1>

        <form action="">
          <h5>Email</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} name="email" id="email" />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

          <button type='submit' onClick={signIn} >Sign In</button>
        </form>

        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button onClick={register}>Create your Amazon Account</button>
      </div>

    </div>
  )
}

export default Login