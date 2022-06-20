import React from 'react';
import '../styles/Login.scss'

const Login = () => {
  return (
    <div class="login">
       <div class="form-container">
           <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo" />
           <form action="/" class="form">
               <label for="email" class="label">Email adress</label>
               <input type="text" id="email" placeholder="alex.senger@hotmail.com" class="input input-email" />
               <label for="password" class="label">Password</label>
               <input type="password" id="password" placeholder="********" class="input input-password" />
               <input type="submit" value="Log in" class="primary-button login-button" />
               <a href="/" class="forgot-password">Forgot my password</a>
           </form>
           <button class="secondary-button signup-button">Sign up</button>
       </div>
   </div>
  )
}

export default Login;