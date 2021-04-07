import React from 'react'

function SignUpScreen() {
    return (
         <div className="signupScreen_body">
        <div className="signupScreen">
            <form>
        <h1>Sign Up</h1>
        <input  placeholder="Email" type="email" />
        <input  placeholder="Password" type="password" />
        <input  placeholder="ID" type="Identification number" />
        <input  placeholder="Date of Birth" type="date of birth" />
        <input  placeholder="Nationality" type="nationality" />
        <input  placeholder="Title" type="title" />
        <input  placeholder="University" type="university" />
        <input  placeholder="Profession" type="profession" />
        <button type="submit" >
          Sign Up
        </button>
      </form>
      </div>
   
            
        </div>
    )
}

export default SignUpScreen
