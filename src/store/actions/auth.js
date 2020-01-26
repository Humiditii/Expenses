import * as actionTypes from './actionTypes';


export const authFail = (errMsg) => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: errMsg
    }
}

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSignUp = () => {
    return {
        type: actionTypes.AUTH_SIGNUP
    }
}

export const authSuccess = (name, auth) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        name: name,
        auth: auth
    }
}

export const logout = () => {
    localStorage.removeItem('expiresIn');
    localStorage.setItem('auth', false);

    return{
        type: actionTypes.LOGOUT
    }

}

export const checkAuthTimeOut = (expiresIn) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expiresIn);
    }
}

export const signUp = (name, password, confirmPwd) => {
    return dispatch => {
        dispatch(authStart());

        const reqName = name;
        const reqPwd = password;
        const reqConfirmPwd = confirmPwd;

        if (reqPwd === reqConfirmPwd) {
            const User = {
                name: reqName,
                password: reqPwd,
            }

            localStorage.setItem('UserModel', JSON.stringify(User));
            dispatch(authSignUp());

        }else {
            dispatch(authFail());
        }
        
    }
}

export const signIn = (name, password) => {
    return dispatch => {
        const reqName = name;
        const reqPwd = password;
        const expiresIn = 3600 * 1000;
        const expirationDate = new Date(new Date().getTime() + expiresIn);
        const getUser = JSON.parse(localStorage.getItem('UserModel')) || null;
        console.log(getUser);

        if(!getUser){
            const notAuth = 'No userFound please register'
            return dispatch(authFail(notAuth));
        }else{
            if (getUser.name === reqName) {
                if (getUser.password === reqPwd) {
                    localStorage.setItem('auth', true);
                    localStorage.setItem('expiresIn', expirationDate);
                    const auth = localStorage.getItem('auth');
                    dispatch(authSuccess(getUser.name, auth));
                } else {
                    const pwdErr = 'Invalid Password';
                    localStorage.setItem('auth', false);
                    dispatch(authFail(pwdErr));
                }
            } else {
                const userErr = 'Invalid Username';
                localStorage.setItem('auth', false);
                dispatch(authFail(userErr));
            }
        }
    }
}

export const checkAuthState = () => {
    return dispatch => {
        const authAccess = localStorage.getItem('auth');
        if (!authAccess) {
            dispatch(logout());
        }else{
            const expirationDate = new Date(localStorage.getItem('expiresIn'));
            if(expirationDate <= new Date()){
                dispatch(logout());
            }else{
                const User = JSON.parse(localStorage.getItem('UserModel'));
                const userName = User.name;
                dispatch(authSuccess(userName, authAccess));
            }
        }
    }
}
