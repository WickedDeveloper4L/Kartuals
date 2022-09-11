import React, { Component } from 'react'

import FormInput from '../form-input/FormInput';
import './signIn.scss'
import CustomButton from '../custom-button/CustomButton';
import {auth, signInWithGoogle } from '../firebase/firebase.utils';



export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault()

        const {email, password} = this.state;

        try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({
            email: '',
            password: ''
        })
        } catch (error) {
          console.log(error)
        }
        
    }

    handleChange = event =>{
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }
    
  render() {
    return (
      <div className='sign-in'>
      <h2>I Already have an Account</h2>
      <span>please input your email and password</span>

      <form onSubmit={this.handleSubmit}>
      <FormInput 
      type="email"
      value={this.state.email} 
      required 
      handleChange={this.handleChange} 
      label='email'
      name="email"/>

      <FormInput 
      type="password" 
      value={this.state.password} 
      required 
      handleChange={this.handleChange}
      label='password' 
      name="password"/>

      <div className='buttons'>
        <CustomButton type="submit">SIGN IN </CustomButton>
        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>GOOGLE</CustomButton>
      </div>  
      
      </form>
      </div>
    )
  }
}
