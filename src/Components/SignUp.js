import React from 'react'
import "./SignUp.css"


function SignUp() {
    return (
        <div className="signupScreen_body">
        <div className="signupScreen">
            <form>
        <h1>Sign In</h1>
        <input  placeholder="Email" type="email" />
        <input  placeholder="Password" type="password" />
        <button type="submit" >
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray"> New to BetaLoop? </span>
          <span className="signupScreen__link" >
             Sign up now.
          </span>
        </h4>
      </form>
      </div>
   
            
        </div>
    )
}

export default SignUp
