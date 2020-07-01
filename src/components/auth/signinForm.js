import React, {Component} from "react";

import{reduxForm,Field} from 'redux-form';

import {FormInput, FormButton} from "../formFields";

class SignInForm extends Component{
    render(){
        const {className, handleSubmit} =this.props;
        return(   
        <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
            <Field className="sign-in-form__email"
            name="email"
            type="email"
            placeholder="Email"
            title="Email"
            component={FormInput}/>
            <Field className="sign-in-form__password"
            name="password"
            type="password"
            placeholder="Password"
            title="Password"
            component={FormInput}/>
            <Field className="sign-in-form__login"
            onClick={()=> console.log("tryna submit")}
            name="login"
            type="submit"
            title="Login"
            component={FormButton}/>
        </form>
        )
    }
}

SignInForm=reduxForm({
    form:"SignInForm"
})(SignInForm);

export default SignInForm;