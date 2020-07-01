import React, {Component} from "react";

import{reduxForm,Field} from 'redux-form';

import FormInput from "../formFields";

class SignInForm extends Component{
    render(){
        const {className} =this.props;
        return(   
        <form className={`${className} sign-in-form`}>
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
        </form>
        )
    }
}

SignInForm=reduxForm({
    form:"SignInForm"
})(SignInForm);

export default SignInForm;