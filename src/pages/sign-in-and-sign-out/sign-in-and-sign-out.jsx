import React from 'react'
import './sign-in-and-sign-out.scss'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'

const SignInSignOutPage = () => {
  return (
    <div className='sign-in-and-sign-up'>
    <SignIn/>
    <SignUp/>
    </div>
  )
}

export default SignInSignOutPage