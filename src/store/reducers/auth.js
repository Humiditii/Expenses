import * as  actionTypes from '../actions/actionTypes';

const initialState = {
    name: null,
    password: null,
    error:null,
    loading:false,
    isAuthenticated: false,
    toBeRedirected: false
}

const authStart = (state, action) => {
    return{
        ...state,
        loading:true
    }
}

const authSuccess = (state, action) => {
    return {
        ...state,
        name: action.name,
        isAuthenticated: action.auth,
        loading: false
    }
}

const authFail = (state, action) => {
    return {
        ...state,
        error: action.error
    }
}

const authSignUp = (state, action)  => {
    return {
        ...state,
        toBeRedirected: true,
        loading: false
    }
}

const logout = (state, action) => {
    return {
        ...state,
        isAuthenticated: false
    }
}


const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_SIGNUP: return authSignUp(state, action);
        case actionTypes.LOGOUT: return logout(state, action);
        default:
            return state
    }
}


export default reducer;