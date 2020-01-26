import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Aux from '../../../hoc/Auxillary';
import {viewExpenses} from '../../../store/actions/expense';
import {checkAuthState} from '../../../store/actions/auth';
import Button from '../../../components/ui/Button/Button';
import {deleteExpense} from '../../../store/actions/expense';


class ViewExpense extends Component {

    componentDidMount(){
        this.props.onAutoSignIn();
        this.props.onLoadExpenses();
    }

    deleteExpense = (id) => {
        //console.log('Deleting', id);
        this.props.onDelete(id);
    }

    render(){
        if (!this.props.auth) {
            return <Redirect to = '/login' />
        }
        return (
            <Aux>
            <div className='container'>
                <div>
                    <h5>List Of Your Expenses</h5>
                </div>
                    <table className = 'highlight' >
                    <thead>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Vat Added</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                      {this.props.expenseObject.map( (item, index) => (
                          <Aux key={index}>
                              <tr>
                                  <td>{item.description}</td>
                                  <td>{item.reqDate}</td>
                                  <td>{item.reqAmount}</td>
                                  <td>{item.reqVatAdded}</td>
                                  <td><Button buttonName='Delete' buttonClick={() => {this.deleteExpense(index)}}/></td>
                              </tr>
                          </Aux>
                      ))}
                    </tbody>
            </table>
                </div>
        </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        expenseObject: [...state.expense.expenseObject],
        auth: state.auth.isAuthenticated
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAutoSignIn: () => {dispatch(checkAuthState())},
        onLoadExpenses: () => {dispatch(viewExpenses())},
        onDelete: (id) => {dispatch(deleteExpense(id))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewExpense);
