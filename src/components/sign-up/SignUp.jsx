import React, { Component } from 'react'
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import {auth, createUserProfileDocument} from '../firebase/firebase.utils'

import './signp.scss'


export default class SignUp extends Component {
    constructor() {
        super();
        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit= async event=>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});

            this.setState(
                {
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }
            )
        } catch(error){
            console.error(error);
        }

    }
    
    handlChange = event =>{
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }
  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className='sign-up'>
      <h2 className="title"> I do not have a account</h2>
      <span>Sign up with ypur email and password</span>
      <form onSubmit={this.handleSubmit} className="sign-up-form">
        <FormInput type='text' name='displayName' value={displayName} onChange={this.handlChange} label='Display Name' required />
        <FormInput type='email' name='email' value={email} onChange={this.handlChange} label='Email' required />

        <FormInput type='password' name='password' value={password} onChange={this.handlChange} label='Password' required />

        <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handlChange} label='Confirm Password' required />

        <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

