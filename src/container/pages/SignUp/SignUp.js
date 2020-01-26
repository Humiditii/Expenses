import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp} from '../../../store/actions/auth';
import Aux from '../../../hoc/Auxillary';
import classes from './signUp.module.css';
import Card from '../../../components/ui/Card/Card';
import FormBuilder from '../../../components/ui/FormBuilder/FormBuilder';
import Button from '../../../components/ui/Button/Button';

class SignUp extends Component {

    state = {
        name: null,
        password: null,
        confirmPassword: null,
        passwordMsg: null
    }


    submitHandler = (event) =>{
        event.preventDefault();
        const name = this.state.name;
        const password = this.state.password;
        const confirmPassword = this.state.confirmPassword;
       
        console.log(name,password, confirmPassword);

        this.props.onSignUp(name, password, confirmPassword);
    }
    render(){

        if (this.props.toBeRedirected) {
            return <Redirect to='/login' />
        }
        return(
            <Aux>
                <div className={classes.myForm}>
                    <Card cardTitle='Sign up as a new User'>
                        <div className='row'>
                            <div className='col s12 m12'>
                                <form onSubmit={this.submitHandler}>
                                    <FormBuilder formholder = 'Input your name here'
                                        input_id = 'first_name'
                                        formtype = 'text'
                                        inputname = 'Name'
                                        changed = {
                                            (event) => this.setState({
                                                name: event.target.value
                                            })
                                        }
                                    />
                                    < FormBuilder formholder = 'Input your password here'
                                        input_id = 'password'
                                        formtype = 'password'
                                        inputname = 'Password'
                                        class = 'validate'
                                        changed = {
                                            (event) => this.setState({
                                                password: event.target.value
                                            })
                                        }
                                    />

                                    < FormBuilder formholder = 'Confirm Password'
                                        input_id = 'password'
                                        formtype = 'password'
                                        class = 'validate'
                                        inputname = 'Password'
                                        changed = {
                                            (event) => this.setState({
                                                confirmPassword: event.target.value
                                            })
                                        }
                                    />
                                    <Button buttonName='Sign-Up' />
                                </form>
                            </div>
                        </div>
                    </Card>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        toBeRedirected: state.auth.toBeRedirected
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onSignUp: (name, password, confirmPassword) => {dispatch(signUp(name,password,confirmPassword))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);