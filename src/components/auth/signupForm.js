import React, {Component} from "react";

import{reduxForm,Field} from 'redux-form';

import {FormInput, FormButton} from "../formFields";
import Details from '../details';

import history from '../../history';

class SignUpForm extends Component{
    render(){
        const {className, handleSubmit} =this.props;
        const info = [
            {
                _id: 0,
                title: 'At least 6 characters'
            },
            {
                _id: 1,
                title: 'At least one number'
            },
            {
                _id: 2,
                title: 'At least one symbol'
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
            <Field className="sign-up-form__confirm"
            name="confirm"
            type="password"
            placeholder="Confirm Password"
            title="Confirm Password"
            component={FormInput}/>
            <div className='sign-in-form__line'></div>
            <Field className="sign-up-form__login"
            onClick={() => history.push('/account')}
            name="login"
            type="submit"
            title='Creat Account'
            component={FormButton}/>
            <Field className="sign-up-form__back"
            onClick={() => history.push('/signin')}
            name="back"
            type="button"
            title="Back"
            short={true}
            component={FormButton}/>
            <Details className='sign-up-form__details' title='Password Requirements' info={info}/>
        </form>
        )
    }
}

SignUpForm=reduxForm({
    form:"SignUpForm"
})(SignUpForm);

export default SignUpForm;