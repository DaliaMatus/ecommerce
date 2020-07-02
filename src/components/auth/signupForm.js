import React, {Component} from "react";

import{reduxForm,Field} from 'redux-form';

import {FormInput, FormButton} from "../formFields";
import Details from '../details';

import history from '../../history';

class SignUpForm extends Component{
    render(){
        const {className, handleSubmit} =this.props;
        const links = [
            {
                _id: 0,
                title: 'Not registered? Create account here',
                onClick: () => history.push('/signup')
            },
            {
                _id: 1,
                title: 'Forgot account email?',
                onClick: () => console.log('forgot email')
            },
            {
                _id: 2,
                title: 'Forgot password?',
                onClick: () => console.log('forgot password')
            }
        ]
        return(   
        <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
            <Field className="sign-up-form__name"
            name="name"
            type="name"
            placeholder="Name"
            title="Name"
            component={FormInput}/>
            <Field className="sign-up-form__email"
            name="email"
            type="email"
            placeholder="Email"
            title="Email"
            component={FormInput}/>
            <Field className="sign-up-form__password"
            name="password"
            type="password"
            placeholder="Password"
            title="Password"
            component={FormInput}/>
            <div className='sign-in-form__line'></div>
            <Field className="sign-up-form__confirm-password"
            name="confirm"
            type="password"
            placeholder="Confirm Password"
            title="Confirm Password"
            component={FormInput}/>
            <div className='sign-in-form__line'></div>
            <Field className="sign-up-form__login"
            onClick={()=> console.log("tryna submit")}
            name="login"
            type="submit"
            title="Login"
            component={FormButton}/>
            <Field className="sign-up-form__back"
            onClick={()=> console.log("tryna go back")}
            name="back"
            type="button"
            title="Back"
            short={true}
            component={FormButton}/>
            <Details className='sign-up-form__details' title='QuickLinks' links={links}/>
        </form>
        )
    }
}

SignUpForm=reduxForm({
    form:"SignUpForm"
})(SignUpForm);

export default SignUpForm;