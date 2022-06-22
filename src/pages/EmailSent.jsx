import React from 'react';
import '../styles/EmailSent.scss'

const EmailSent = () => {
  return (
    <div className="login">
       <div className="form-container">
           <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
           <h1 className="title">Email has been sent</h1>
           <p className="subtitle">Please check youor inbox for insttructions on how to reset the password</p>
           <div className="email-img">
            <img src="./icons/email.svg" alt="sobresito" />
           </div>
           <button className="primary-button login-button">Login</button>
           <p className="resent">
              <span>Don't receive the email?</span>
              <a href="/">Resent</a>
           </p>
       </div>
   </div>
  )
}

export default EmailSent