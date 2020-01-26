import * as actionTypes from '../actions/actionTypes';

const initialState = {
    message: null,
    loading: false,
    expenseObject: []
}

const addExpenseStart = (state, action) => {
    return{
        ...state, 
    }
}

const addExpenseSuccess = (state, action) => {
    return {
        ...state,
        message: action.message
    }
}

const addExpenseFail = (state, action) => {
    return {
        ...state
    }
}

const viewExpense = (state, action) => {
    return {
        ...state,
        expenseObject: [...action.expenseObject] 
    }
}
const reducer = (state=initialState, action) => {
    switch (action.type) {
       case actionTypes.ADD_EXPENSE_START: return addExpenseStart(state, action);
       case actionTypes.ADD_EXPENSE_FAIL: return addExpenseFail(state, action);
       case actionTypes.ADD_EXPENSE_SUCCESS: return addExpenseSuccess(state, action);
       case actionTypes.VIEW: return viewExpense(state, action);
       default:
           return state
    

    }
}

export default reducer;