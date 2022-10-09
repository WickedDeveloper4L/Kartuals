import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.style'

const WithSpinner = WrappedComponent =>({isLoading, ...otherProps})=>{
   return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer/>
    </SpinnerOverlay>
   ): <WrappedComponent {...otherProps}/>
} 

export default WithSpinner