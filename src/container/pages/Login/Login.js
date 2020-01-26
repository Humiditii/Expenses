import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {signIn} from '../../../store/actions/auth';
import Aux from '../../../hoc/Auxillary';
import Card from '../../../components/ui/Card/Card';
import FormBuilder from '../../../components/ui/FormBuilder/FormBuilder';
import Button from '../../../components/ui/Button/Button';
import classes from './login.module.css';
import Spinner from '../../../components/ui/Spinner/Spinner';

class Login extends Component {

    state = {
        name: null,
        password: null
    }

    submitHandler = (event) => {
        event.preventDefault();

        const name = this.state.name;
        const password = this.state.password;
        this.props.onSignIn(name,password);
        console.log(name,password);
    }
    render(){

        if (this.props.isAuthenticated) {
            return <Redirect to='/addExpense' />
        }

        let myLogin = (
            <div className={classes.myForm}>
                    <Card cardTitle='Login to your account'>
                        <span className='red-text text-darken-2'>
                            <h6>{this.props.error}</h6>
                        </span>
                        <div className= 'row'>
                            <div className ='col s12 m12'>
                                <form onSubmit={this.submitHandler}>
                                    < FormBuilder formholder = 'Input your name here'
                                        input_id = 'first_name'
                                        formtype = 'text'
                                        inputname = 'Name'
                                        class='validate'
                                        changed = {
                                            (event) => this.setState({
                                                name: event.target.value
                                            })
                                        }
                                    />
                                    < FormBuilder formholder = 'Input your password here'
                                        input_id = 'password'
                                        formtype = 'password'
                                        class = 'validate'
                                        inputname = 'Password'
                                        changed = {
                                            (event) => this.setState({
                                                password: event.target.value
                                            })
                                        }
                                    />
                                    <Button buttonName='Sign-In' />
                                </form>

                            </div>
                        </div>
                    </Card>
                </div>
        );

        if (this.props.loading) {
            myLogin = <Spinner/>
        }

        return(
            <Aux>
                {myLogin}
            </Aux>
        );
    }

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignIn: (name,password) => {dispatch(signIn(name,password))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);