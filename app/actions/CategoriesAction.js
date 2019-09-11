import {
    LOGIN_ATTEMP,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from './types';

export const login = ({ username, avatar }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_ATTEMP });
        //Auth Annones
        
    }
};

export const loggedIn = (user) => {
    return ({ type: LOGIN_SUCCESS, payload: user });
}