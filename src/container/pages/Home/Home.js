import React, {Component} from 'react';
import Aux from '../../../hoc/Auxillary'; 
import M from 'materialize-css';
import classes from './Home.module.css';
import myExpense from '../../../assets/images/images.png';
import {NavLink} from 'react-router-dom';


class Home extends Component {


    render(){
                document.addEventListener('DOMContentLoaded', () => {
                    const elems = document.querySelectorAll('.collapsible');
                    const instances = M.Collapsible.init(elems);
                    return instances;
                });
        return(
            <Aux>
                <div className={classes.Home}>     
                        <div className='container'>
                            <h4>Welcome to Expen </h4> <br/>
                               <p className={classes.articleSize}> Expen application is designed for users to
                                be able to keep track of their expenses.</p> <br/>
                                <img src={myExpense} alt='img' />
                                <p className={classes.articleSize}> Being able to account and plan our daily expenses as human 
                                requires the use of sufficiently advanced tool.</p> <br/>
                        </div>

                        <div className='container-fluid'>
                           <div>
                                <h5 className={classes.containerBg}>Features of Expen application</h5>
                                <br/>
                            <ul className="collapsible popout" data-collapsible="accordion">
                                <li>
                                <div className="collapsible-header active"><i className="material-icons">accessibility</i>Getting authenticated</div>
                                <div className="collapsible-body"><span> Before User can be allowed to do anything on this app, the user has to be Authenticated first.</span></div>
                                </li>
                                <li>
                                <div className="collapsible-header"><i className="material-icons">add_circle</i>Adding Expenses</div>
                                <div className="collapsible-body"><span>Authenthicated and Authorized User can add new expenses and fill the form displayed appropriately.</span></div>
                                </li>
                                <li>
                                <div className="collapsible-header"><i className="material-icons">accessible</i>Actions on Authenthicated user</div>
                                <div className="collapsible-body"><span>Authorized user can view added expenses and delete expenses.</span></div>
                                </li>
                            </ul>
                           </div>
                           <button className='waves-effect white btn-large'><NavLink to='/signUp' className='waves-effect' > <b>Get Started</b></NavLink></button>
                        </div>
                </div>

                    
            
            </Aux>
        );
    }
}



export default Home