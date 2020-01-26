import * as actionTypes from './actionTypes';

export const addExpenseStart = () => {
    return {
        type: actionTypes.ADD_EXPENSE_START
    }
}

export const addExpenseFail = () => {
    return {
        type: actionTypes.ADD_EXPENSE_FAIL
    }
}

export const addExpenseSuccess = (message) => {
   return {
        type: actionTypes.ADD_EXPENSE_SUCCESS,
        message: message
   }
}

export const view = (expenses) => {
    return {
        type: actionTypes.VIEW,
        expenseObject: expenses
    }
}

export const clearMessage = ()=> {
    return dispatch => {
        setTimeout(() => {
           dispatch(addExpenseSuccess()); 
        }, 3*1000);
    }
}




export const expensesSubmit = (desc, date, amount, vatAdded) => {
    return dispatch => {
        dispatch(addExpenseStart());
        const description = desc;
        const reqDate = date;
        const reqAmount = amount;
        const reqVatAdded = vatAdded;

        const Expense = {
            description: description,
            reqDate: reqDate,
            reqAmount: reqAmount,
            reqVatAdded: reqVatAdded
        }

        const getPresentExpenseState = JSON.parse(localStorage.getItem('Expenses')) || [] ;

        const gottenState = [...getPresentExpenseState];

        gottenState.push(Expense);

        localStorage.setItem('Expenses', JSON.stringify(gottenState));
        const message = 'New Expense added';
        dispatch(addExpenseSuccess(message));
        dispatch(clearMessage());
        // if (localStorage.setItem('Expenses', JSON.stringify(gottenState))) {
        //     dispatch(addExpenseSuccess());
        // }else{
        //     dispatch(addExpenseFail());
        // }

        
    }
}


export const viewExpenses  = () =>  {
    return dispatch => {
        dispatch(addExpenseStart());

        const getExpenseObject = JSON.parse(localStorage.getItem('Expenses'));
        
        dispatch(view(getExpenseObject));
    

        
    }
}

export const deleteExpense = (id) => {
    return dispatch => {
        dispatch(addExpenseStart());
        const getExpensesModel = [...JSON.parse(localStorage.getItem('Expenses'))];
        //console.log(getExpensesModel);
        getExpensesModel.splice(id, 1);
        localStorage.setItem('Expenses', JSON.stringify(getExpensesModel));
        //console.log('Passed test 1');
        const getUpdatedModel = JSON.parse(localStorage.getItem('Expenses'));
        //console.log('Passed test 2')
        dispatch(view(getUpdatedModel));
        //console.log('Passed test 3');
        
       
        
    }
}
