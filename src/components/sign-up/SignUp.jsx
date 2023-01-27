import React from 'react'
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import './signp.scss'


const SignUp =()=> {
   const [userCredentials, setUserCredentials] = React.useState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
  })

  const {displayName, email, password, confirmPassword} = userCredentials;

   const handleSubmit= async event=>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
      }

      signUpStart({displayName, email, password})
    }
    
    const handlChange = event =>{
        const {name, value} = event.target;

        setUserCredentials({
          ...userCredentials,
            [name]: value
        })
    };

    return (
      <div className='sign-up'>
      <h2 className="title"> I do not have a account</h2>
      <span>Sign up with ypur email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput type='text' name='displayName' value={displayName} onChange={handlChange} label='Display Name' required />
        <FormInput type='email' name='email' value={email} onChange={handlChange} label='Email' required />

        <FormInput type='password' name='password' value={password} onChange={handlChange} label='Password' required />

        <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={handlChange} label='Confirm Password' required />

        <CustomButton  type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )

}

const mapDispatchToProps = dispatch=>({
    signUpStart: userCredentials=>dispatch(signUpStart(userCredentials))
})
export default connect(null, mapDispatchToProps)(SignUp);
