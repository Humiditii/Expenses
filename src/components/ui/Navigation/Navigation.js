import React, {Component} from 'react';
import M from 'materialize-css';
import {connect} from 'react-redux';
import Aux from '../../../hoc/Auxillary';
import MenuButton from '../MenuButton/MenuButton';
import NavLogo from './NavLogo/NavLogo';
import NavUrl from './NavUrl/NavUrl';

class Navigation extends Component {
    render(){

        document.addEventListener('DOMContentLoaded', () => {
            const elems = document.querySelectorAll('.sidenav');
            const instances = M.Sidenav.init(elems);
            return instances;
        });

        let appLink = (
            <Aux>
                    <nav>
                        <div className = 'nav-wrapper  blue darken-2' >
                            <NavLogo/>
                            <MenuButton/>
                            <ul className='right hide-on-med-and-down' >
                                    <NavUrl link='/'  name='Home' viewtype='desktop' />
                                    <NavUrl link='/signUp' name='Sign Up' viewtype='desktop'  />
                                    <NavUrl link='/login' name='Login' viewtype='desktop' />        
                            </ul>
                        </div>
                    </nav>
                    <ul className='sidenav sidenav-close' id='mobile-demo' >  
                            <NavUrl link='/' name='Home' iconName='home' viewtype='mobile'  />
                            <NavUrl link='/signUp' name='Sign Up' iconName='create' viewtype='mobile'  />
                            <NavUrl link='/login' name='Login' iconName='explore' viewtype='mobile' />        
                    </ul>   
            </Aux>
        );
        if(this.props.auth){
            appLink = (
                <Aux>
                        <nav>
                            <div className = 'nav-wrapper  blue darken-2' >
                                <NavLogo/>
                                <MenuButton/>
                                <ul className='right hide-on-med-and-down' >
                                        <NavUrl link='/'  name='Home' viewtype='desktop' />
                                        <NavUrl link='/viewExpense' name='View Expense' viewtype='desktop'  />
                                        <NavUrl link='/addExpense' name='expenses' viewtype='desktop'  />
                                        <NavUrl link='/logout' name='Logout' viewtype='desktop' />        
                                </ul>
                            </div>
                        </nav>
                        <ul className='sidenav sidenav-close' id='mobile-demo' >  
                                <NavUrl link='/' name='Home' iconName='home' viewtype='mobile'  />
                                <NavUrl link='/ViewExpense' name='View Expense' iconName='dashboard' viewtype='mobile'  />
                                <NavUrl link='/addExpense' name='Add Expense' iconName='add' viewtype='mobile'  />
                                <NavUrl link='/logout' name='Logout' iconName='logout' viewtype='mobile' />        
                        </ul>
                </Aux>
            );
        }
            return(
                <Aux>
                    {appLink}
                </Aux>
            );
        }
        
    }


const mapStateToProps = state => {
    return {
        auth: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(Navigation);