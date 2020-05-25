import appConfig from './AppConfig';
import {handleResponse} from './response.util';


export const loginService = {
    login,
    logout,
    currentUser: localStorage.getItem('currentUser'),
 
};

function login(email,password) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type':  'application/json',
        'Accept': 'application/json',
        'password': password,
        'app': appConfig.APP_CODE },
        body: null
    };

    return fetch(appConfig.API_ENDPOINT+email, requestOptions)
    .then(handleResponse);
}

function logout() {
    localStorage.removeItem('currentUser');
}
