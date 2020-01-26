import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Aux from '../../../hoc/Auxillary';
import Card from '../../../components/ui/Card/Card';
import Button from '../../../components/ui/Button/Button';
import FormBuilder from '../../../components/ui/FormBuilder/FormBuilder';
import {checkAuthState} from '../../../store/actions/auth';
import {expensesSubmit} from '../../../store/actions/expense';

class AddExpense extends Component {

    state = {
        description: null,
        date: null,
        amount:null,
    }

     


    componentDidMount(){
        this.props.onAutoAuthorize();
    
    }

    vatAmount = () =>  20/100 * this.state.amount;

    onSubmitExpense = (event) => {
        event.preventDefault();
        const description = this.state.description;
        const date = this.state.date;
        const amount = this.state.amount;
        const vatAddedAmount = Number(this.vatAmount()) + Number(this.state.amount);
        console.log('Passed 1');
        this.props.onAddExpense(description,date,amount,vatAddedAmount);
        console.log('passed 2');

    }

    render(){

        if (!this.props.auth) {
            return <Redirect to='/login' />
        }
        // document.addEventListener('DOMContentLoaded', ()=> {
        //     const elems = document.querySelector('.datepicker');
        //     const instances = M.Datepicker.init(elems);
        //     return instances;
        // })

        const addExpenseForm = (
            <Card cardTitle='Add New Expenses'>
                <span className='blue-text text-darken-2'>
                    <h6>{this.props.message}</h6>
                </span>
                    <div>
                        <div className='row'>
                            <div className='col s12 m12'>
                                <form onSubmit={this.onSubmitExpense}>
                                    <span className='blue-text text-darken-2'>
                                    <FormBuilder formholder = 'Add short description'
                                        input_id = 'desc'
                                        formtype = 'text'
                                        inputname = 'Description'
                                        changed = {
                                            (event) => this.setState({
                                                description: event.target.value
                                            })
                                        }
                                    />
                                     <FormBuilder formholder = 'Select Date'
                                        input_id='date'
                                        formtype = 'date'
                                        inputname= 'Date'
                                        changed = {
                                            (event) => this.setState({
                                                date: event.target.value
                                            })
                                        }
                                     />
                                      <FormBuilder formholder = 'Input your Amount'
                                        input_id = 'amount'
                                        formtype = 'number'
                                        inputname = 'amount'
                                        changed = {
                                            (event) => this.setState({
                                                amount: event.target.value
                                            })
                                        }
                                    />

                                      <h6>VAT AMOUNT: ${this.vatAmount()}</h6> 
                                       <h6>TOTAL AMOUNT: ${Number(this.vatAmount())+ Number(this.state.amount)}</h6>
                                       <h6>VAT RATE: 20%</h6>
                                    </span>

                                    <Button buttonName='Add' />
                                </form>
                            </div>
                        </div>
                    </div>
                </Card>
        );

        
        return(
            <Aux>
                {addExpenseForm}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth.isAuthenticated,
        loading: state.expense.loading,
        message: state.expense.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAutoAuthorize : () => {dispatch (checkAuthState()) },
        onAddExpense: (desc, date, amount, vatAdded) => {dispatch(expensesSubmit(desc, date, amount, vatAdded))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);

