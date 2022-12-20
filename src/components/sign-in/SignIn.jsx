import React, { Component } from 'react'

import FormInput from '../form-input/FormInput';
import './signIn.scss'
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';



 class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault()
        const {emailSignInStart} = this.props
        const {email, password} = this.state;

        emailSignInStart(email, password)
    }

    handleChange = event =>{
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }
    
  render() {
    const {googleSignInStart} = this.props

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
        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>GOOGLE</CustomButton>
      </div>  
      
      </form>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch =>({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password)=>dispatch(emailSignInStart({email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn)
